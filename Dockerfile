# ==========================================
# Étape 1 : Build de l'application Vite
# ==========================================
FROM node:22-alpine AS builder

WORKDIR /app

# Optimisation du cache Docker en copiant les fichiers de dépendances en premier
COPY package.json package-lock.json ./

# Installation propre et reproductible des dépendances
RUN npm ci

# Copie du code source
COPY . .

# Construction des fichiers statiques optimisés pour la production (dist/)
RUN npm run build

# ==========================================
# Étape 2 : Serveur Web Nginx haute performance
# ==========================================
FROM nginx:alpine AS runner

# Suppression de la configuration par défaut de Nginx
RUN rm -rf /etc/nginx/conf.d/*

# Copie de la configuration Nginx optimisée (SPA, Gzip, cache, sécurité)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie des fichiers compilés depuis l'étape de build
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposition du port HTTP interne
EXPOSE 80

# Vérification de santé du conteneur (Docker Healthcheck)
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1/healthz || exit 1

# Démarrage de Nginx en premier plan
CMD ["nginx", "-g", "daemon off;"]
