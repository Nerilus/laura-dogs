export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  description: string;
  duration: string;
  features: string[];
  startingPrice: string;
}

export interface PriceTier {
  id: string;
  name: string;
  label: string;
  examples: string;
  bain: string;
  tonte: string;
  ciseaux: string;
  soinComplet: string;
  duration: string;
  popular?: boolean;
}

export const SALON_INFO = {
  name: "LAURA' DOGS",
  subtitle: "Atelier de Toilettage Canin & Félin",
  tagline: "Douceur, bien-être et respect de votre compagnon à Ézanville",
  address: "42 Rue Jacques Gallicher",
  postalCode: "95460",
  city: "Ézanville",
  fullAddress: "42 Rue Jacques Gallicher, 95460 Ézanville",
  phone: "07 82 99 37 13",
  phoneRaw: "+33782993713",
  phoneMobile: "07 82 99 37 13",
  phoneMobileRaw: "+33782993713",
  email: "lauradog95@gmail.com",
  googleMapsUrl: "https://maps.google.com/?q=42+Rue+Jacques+Gallicher+95460+Ezanville",
  googleReviewLink: "https://www.google.com/maps/search/?api=1&query=Laura%27+Dogs+42+Rue+Jacques+Gallicher+95460+Ezanville",
  googleRating: 4.8,
  googleReviewCount: 29,
  openingHoursDisplay: "Mardi au Samedi : 9h30 - 18h00",
  schedule: [
    { day: "Lundi", hours: "Fermé", open: false },
    { day: "Mardi", hours: "09:30 - 18:00", open: true, openTime: 9.5, closeTime: 18 },
    { day: "Mercredi", hours: "09:30 - 18:00", open: true, openTime: 9.5, closeTime: 18 },
    { day: "Jeudi", hours: "09:30 - 18:00", open: true, openTime: 9.5, closeTime: 18 },
    { day: "Vendredi", hours: "09:30 - 18:00", open: true, openTime: 9.5, closeTime: 18 },
    { day: "Samedi", hours: "09:30 - 18:00", open: true, openTime: 9.5, closeTime: 18 },
    { day: "Dimanche", hours: "Fermé", open: false },
  ],
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "coupe-ciseaux",
    title: "Coupe Ciseaux, Tonte & Épilation",
    subtitle: "Précision artistique & morphologie respectée",
    image: "/images/ciseaux.jpg",
    badge: "Savoir-Faire Signature",
    description: "Une coupe entièrement personnalisée adaptée au standard de la race ou aux envies du maître. Notre technique de coupe aux ciseaux sublime la silhouette tout en préservant le confort du chien.",
    duration: "1h30 à 2h30",
    features: [
      "Étude morphologique & conseils personnalisés",
      "Tonte de propreté et égalisation millimétrée",
      "Coupe ciseaux traditionnelle douce",
      "Finitions soignées tête, oreilles et pattes 'nounours'",
      "Bain traitant et brushing volumateur inclus"
    ],
    startingPrice: "dès 52€",
  },
  {
    id: "bains-traitants",
    title: "Bains Traitants & Démêlage",
    subtitle: "Cosmétique naturelle & séchage ultra-doux",
    image: "/images/bain.jpg",
    badge: "Bien-Être & Pelage",
    description: "Un rituel balnéo apaisant utilisant des shampoings botaniques bio formulés pour respecter le pH cutané. Idéal pour revitaliser le pelage, éliminer le sous-poil mort et soulager les démangeaisons.",
    duration: "1h à 1h45",
    features: [
      "Shampoing naturel hypoallergénique sur-mesure",
      "Masque nutritif démêlant à l'huile végétale",
      "Évacuation douce de la mue et sous-poil",
      "Séchage tiède sans chaleur excessive ni cabine stressante",
      "Brushing éclat et délicat parfum sans alcool"
    ],
    startingPrice: "dès 38€",
  },
];

export const PRICE_TIERS: PriceTier[] = [
  {
    id: "small",
    name: "Petits Chiens",
    label: "Moins de 10 kg",
    examples: "Yorkshire, Bichon, Caniche toy/nain, Shih Tzu, Cavalier King Charles, Jack Russell, Spitz...",
    bain: "40 €",
    tonte: "52 €",
    ciseaux: "58 €",
    soinComplet: "65 €",
    duration: "Environ 1h15 à 1h45",
    popular: true,
  },
  {
    id: "medium",
    name: "Moyens Chiens",
    label: "De 10 à 25 kg",
    examples: "Cocker anglais/américain, Épagneul Breton, Beagle, Caniche moyen, Schnauzer...",
    bain: "50 €",
    tonte: "62 €",
    ciseaux: "68 €",
    soinComplet: "78 €",
    duration: "Environ 1h30 à 2h00",
  },
  {
    id: "large",
    name: "Grands Chiens",
    label: "Plus de 25 kg",
    examples: "Golden Retriever, Berger Australien, Setter, Samoyède, Labrador, Briard...",
    bain: "68 €",
    tonte: "78 €",
    ciseaux: "88 €",
    soinComplet: "98 €",
    duration: "Environ 2h00 à 2h45",
  },
  {
    id: "cat",
    name: "Chats & Félins",
    label: "Tous gabarits",
    examples: "Européen, British Shorthair, Persan, Maine Coon, Sacré de Birmanie, Ragdoll...",
    bain: "48 €",
    tonte: "65 €",
    ciseaux: "55 €",
    soinComplet: "72 €",
    duration: "Environ 45 min à 1h30",
  },
];
