# 🚀 Guide de Déploiement Continu (CI/CD) sur VPS

Ce projet est configuré avec un pipeline d'intégration et de déploiement continu (**GitHub Actions**) couplé à **Docker** et **Nginx**.

Chaque `git push` sur la branche `main` déclenche automatiquement :
1. ✅ **Validation** : Vérification du lint (`oxlint`) et compilation TypeScript (`npm run build`).
2. 🐳 **Build Docker** : Construction de l'image de production multi-stage ultra-légère et optimisée.
3. 📦 **Publication** : Envoi sur le registre privé/public GitHub Packages (`ghcr.io/nerilus/laura-dogs`).
4. 🚀 **Déploiement VPS** : Connexion SSH, téléchargement de la nouvelle image, redémarrage du conteneur sans interruption et vérification du Healthcheck.

---

## 1. Prérequis sur votre VPS

Assurez-vous que Docker et Docker Compose sont installés sur votre serveur :

```bash
# Vérifier la présence de Docker
docker --version
docker compose version
```

Si Docker n'est pas installé sur votre serveur Debian/Ubuntu :
```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
```

---

## 2. Configuration des Secrets GitHub

Rendez-vous sur votre dépôt GitHub dans **Settings** > **Secrets and variables** > **Actions**, puis cliquez sur **New repository secret** pour ajouter les variables suivantes :

| Secret | Description | Exemple |
| :--- | :--- | :--- |
| `VPS_HOST` | Adresse IP publique ou nom d'hôte de votre VPS | `195.154.xx.xx` ou `vps.mondomaine.fr` |
| `VPS_USERNAME` | Nom de l'utilisateur SSH | `root` ou `debian` ou `ubuntu` |
| `VPS_SSH_KEY` | Clé privée SSH (au format OpenSSH) | Contenu complet de votre clé privée `id_ed25519` |
| `VPS_PORT` *(optionnel)* | Port SSH de votre serveur (défaut : `22`) | `22` ou `2222` |
| `VPS_DEPLOY_PATH` *(optionnel)* | Dossier de destination sur le VPS (défaut : `/opt/lauradogs`) | `/opt/lauradogs` |

### 🔑 Comment créer une clé SSH dédiée au déploiement (Recommandé)

Sur votre machine locale ou sur le VPS :
```bash
# Générer une paire de clés Ed25519 sans mot de passe
ssh-keygen -t ed25519 -C "github-actions-lauradogs" -f deploy_key

# 1. Copiez la clé publique sur le VPS dans authorized_keys :
cat deploy_key.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys

# 2. Copiez la clé privée dans le secret GitHub VPS_SSH_KEY :
cat deploy_key
```

---

## 3. Autorisations GitHub Packages (GHCR)

Pour que GitHub Actions puisse créer et publier automatiquement l'image Docker sur `ghcr.io` :
1. Allez dans **Settings** > **Actions** > **General**.
2. Dans la section **Workflow permissions**, cochez :
   - ✅ **Read and write permissions**
3. Cliquez sur **Save**.

---

## 4. Configuration du Reverse Proxy sur le VPS

Le conteneur écoute sur le port `127.0.0.1:8080` de votre VPS (configurable via `.env` ou variable `APP_PORT`).

### Option A : Avec Nginx installé sur le VPS
Un fichier modèle prêt à l'emploi est disponible à la racine du projet : [`nginx-vps.example.conf`](nginx-vps.example.conf).

```bash
# Copier la configuration
sudo cp nginx-vps.example.conf /etc/nginx/sites-available/lauradogs.conf

# Éditer votre domaine
sudo nano /etc/nginx/sites-available/lauradogs.conf

# Activer le site
sudo ln -s /etc/nginx/sites-available/lauradogs.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Obtenir un certificat SSL Let's Encrypt gratuit
sudo certbot --nginx -d votredomaine.fr -d www.votredomaine.fr
```

### Option B : Avec Nginx Proxy Manager (NPM)
Si vous utilisez NPM avec interface graphique :
- **Forward Hostname / IP** : `127.0.0.1` (ou l'IP de la passerelle Docker `172.17.0.1`)
- **Forward Port** : `8080`
- **Cache Assets** : Activé
- **Block Common Exploits** : Activé
- **SSL** : Request a new SSL Certificate avec "Force SSL" et "HTTP/2 Support".

### Option C : Avec Traefik
Vous pouvez simplement ajouter les labels Traefik au service `lauradogs` dans [`docker-compose.yml`](docker-compose.yml) si votre Traefik partage le même réseau Docker.

---

## 5. Personnalisation du port ou des variables

Sur le VPS, dans `/opt/lauradogs`, vous pouvez créer un fichier `.env` si vous souhaitez changer le port :
```bash
# Exemple sur le VPS dans /opt/lauradogs/.env
APP_PORT=3000
```

---

## 6. Commandes utiles sur le VPS

Pour suivre l'état du conteneur en direct :
```bash
cd /opt/lauradogs

# Voir l'état du conteneur et du healthcheck
docker compose ps

# Consulter les logs en direct
docker compose logs -f

# Redémarrer manuellement
docker compose restart

# Forcer la mise à jour manuellement
docker compose pull && docker compose up -d
```
