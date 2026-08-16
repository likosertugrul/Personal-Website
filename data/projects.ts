import type { Language } from "@/data/translations";

export type LinkType = "github" | "demo" | "appstore" | "playstore";

export type ProjectLink = {
  type: LinkType;
  url: string;
};

export type LocalizedText = Record<Language, string>;

export type Project = {
  id: number;
  title: LocalizedText;
  description: LocalizedText;
  tags: string[];
  links: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: {
      tr: "Bisiklet E-Ticaret Sitesi",
      en: "Bicycle E-Commerce Site",
      es: "Sitio de E-Commerce de Bicicletas",
      de: "Fahrrad-E-Commerce-Website",
      fr: "Site E-Commerce de Vélos",
    },
    description: {
      tr: "Next.js ile geliştirilmiş bisiklet e-ticaret platformu. Prisma + PostgreSQL ile ürün/veri yönetimi, Supabase ile kimlik doğrulama ve Cloudflare üzerinde (OpenNext) yayında.",
      en: "A bicycle e-commerce platform built with Next.js. Product and data management with Prisma + PostgreSQL, authentication via Supabase, deployed on Cloudflare (OpenNext).",
      es: "Plataforma de comercio electrónico de bicicletas construida con Next.js. Gestión de productos y datos con Prisma + PostgreSQL, autenticación con Supabase y desplegada en Cloudflare (OpenNext).",
      de: "Eine mit Next.js entwickelte E-Commerce-Plattform für Fahrräder. Produkt- und Datenverwaltung mit Prisma + PostgreSQL, Authentifizierung über Supabase, bereitgestellt auf Cloudflare (OpenNext).",
      fr: "Plateforme e-commerce de vélos développée avec Next.js. Gestion des produits et des données avec Prisma + PostgreSQL, authentification via Supabase, déployée sur Cloudflare (OpenNext).",
    },
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "Tailwind CSS", "Cloudflare"],
    links: [
      { type: "github", url: "https://github.com/likosertugrul/bicycleEcommerce" },
      { type: "demo", url: "https://bicycle-ecommerce-six.vercel.app" },
    ],
  },
  {
    id: 2,
    title: {
      tr: "Finance Tracker",
      en: "Finance Tracker",
      es: "Finance Tracker",
      de: "Finance Tracker",
      fr: "Finance Tracker",
    },
    description: {
      tr: "Hisse senedi ve kripto varlıkları gerçek zamanlı takip eden, gelir/gider yönetimi sunan mobil (Expo) ve web (Next.js) portföy uygulaması. Supabase Realtime ile çoklu cihaz senkronizasyonu ve ondalık hassasiyetli finansal hesaplamalar içerir.",
      en: "A cross-platform portfolio app (Expo mobile + Next.js web) for real-time stock and crypto tracking with income/expense management. Features multi-device sync via Supabase Realtime and decimal-precision financial calculations.",
      es: "Aplicación de portafolio multiplataforma (Expo móvil + Next.js web) para el seguimiento en tiempo real de acciones y criptomonedas, con gestión de ingresos y gastos. Incluye sincronización multidispositivo con Supabase Realtime y cálculos financieros de precisión decimal.",
      de: "Eine plattformübergreifende Portfolio-App (Expo mobil + Next.js Web) zur Echtzeitverfolgung von Aktien und Kryptowährungen mit Einnahmen-/Ausgabenverwaltung. Mit geräteübergreifender Synchronisierung über Supabase Realtime und finanziellen Berechnungen mit Dezimalgenauigkeit.",
      fr: "Application de portefeuille multiplateforme (Expo mobile + Next.js web) pour le suivi en temps réel des actions et cryptomonnaies, avec gestion des revenus et dépenses. Synchronisation multi-appareils via Supabase Realtime et calculs financiers à précision décimale.",
    },
    tags: ["Next.js", "Expo", "TypeScript", "Supabase", "Turborepo", "Zustand", "TanStack Query"],
    links: [
      { type: "github", url: "https://github.com/likosertugrul/finance-tracker" },
      { type: "demo", url: "https://finance-tracker-web-mocha.vercel.app" },
    ],
    featured: true,
  },
  {
    id: 3,
    title: {
      tr: "Dictinho",
      en: "Dictinho",
      es: "Dictinho",
      de: "Dictinho",
      fr: "Dictinho",
    },
    description: {
      tr: "Expo Router ile hem mobil hem web üzerinde çalışan sözlük uygulaması ve sitesi. Telaffuz desteği, Supabase senkronizasyonu ve yapay zekâ destekli tanımlar içerir.",
      en: "A dictionary app and website running on both mobile and web via Expo Router. Includes pronunciation support, Supabase sync, and AI-powered definitions.",
      es: "Una aplicación y sitio web de diccionario que funciona tanto en móvil como en web mediante Expo Router. Incluye soporte de pronunciación, sincronización con Supabase y definiciones impulsadas por IA.",
      de: "Eine Wörterbuch-App und -Website, die dank Expo Router sowohl mobil als auch im Web läuft. Mit Aussprachefunktion, Supabase-Synchronisierung und KI-gestützten Definitionen.",
      fr: "Une application et un site de dictionnaire fonctionnant à la fois sur mobile et sur le web grâce à Expo Router. Avec prise en charge de la prononciation, synchronisation Supabase et définitions assistées par IA.",
    },
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "NativeWind", "Zustand", "Claude AI"],
    links: [
      { type: "github", url: "https://github.com/likosertugrul/dictinho" },
    ],
    featured: true,
  },
];
