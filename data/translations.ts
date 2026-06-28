export const LANGUAGES = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
] as const;

export type Language = (typeof LANGUAGES)[number]["code"];

type T = {
  nav: { about: string; skills: string; projects: string; contact: string; cta: string };
  hero: { greeting: string; role: string; bio: string; cv: string };
  about: {
    title: string;
    p1: string; p2: string; p3: string;
    years: string; yearsLabel: string;
    mobile: string; mobileLabel: string;
    web: string; webLabel: string;
    coffee: string; coffeeLabel: string;
  };
  themes: { dark: string; light: string; warm: string };
  skills: { title: string; tools: string };
  projects: { title: string; code: string; demo: string; appStore: string; playStore: string };
  contact: { subtitle: string; title: string; body: string; cta: string; by: string };
};

export const translations: Record<Language, T> = {
  tr: {
    nav: {
      about: "Hakkımda", skills: "Yetenekler", projects: "Projeler",
      contact: "İletişim", cta: "Bağlanalım",
    },
    hero: {
      greeting: "Merhaba, ben",
      role: "Software Developer & Computer Engineer",
      bio: "React, React Native ve modern web teknolojileriyle kullanıcı odaklı, performanslı uygulamalar geliştiriyorum. Temiz kod ve güzel arayüzler benim tutkum.",
      cv: "CV İndir",
    },
    about: {
      title: "Hakkımda",
      p1: "Bilgisayar Mühendisliği öğrencisiyim ve yazılım geliştirmeye tutkuyla bağlıyım. React ve React Native ekosistemlerinde hem web hem mobil uygulamalar geliştiriyorum.",
      p2: "Kullanıcı deneyimini her zaman ön planda tutarak temiz, okunabilir ve sürdürülebilir kod yazmayı ilke ediniyorum. Takım çalışmasına uyumlu ve problem çözmeye odaklıyım.",
      p3: "Boş zamanlarımda açık kaynak projelere katkıda bulunmayı, yeni teknolojileri keşfetmeyi ve teknik blog okumayı seviyorum.",
      years: "3+ Yıl", yearsLabel: "Yazılım Geliştirme",
      mobile: "5+ Mobil", mobileLabel: "Uygulama",
      web: "10+ Web", webLabel: "Projesi",
      coffee: "∞ Kahve", coffeeLabel: "Tüketimi",
    },
    themes: { dark: "Koyu", light: "Açık", warm: "Sıcak" },
    skills: { title: "Yetenekler", tools: "Araçlar & DevOps" },
    projects: { title: "Projeler", code: "Kod", demo: "Demo", appStore: "App Store", playStore: "Play Store" },
    contact: {
      subtitle: "04. İletişim", title: "Selamlaşalım",
      body: "Bir proje fikriniz mi var, iş birliği mi yapmak istiyorsunuz ya da sadece merhaba mı demek istiyorsunuz? Mesaj atmaktan çekinmeyin!",
      cta: "Mesaj Gönder", by: "Tasarlandı & Geliştirildi",
    },
  },
  en: {
    nav: {
      about: "About", skills: "Skills", projects: "Projects",
      contact: "Contact", cta: "Let's Connect",
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Software Developer & Computer Engineer",
      bio: "I build user-focused, performant applications using React, React Native, and modern web technologies. Clean code and beautiful interfaces are my passion.",
      cv: "Download CV",
    },
    about: {
      title: "About Me",
      p1: "I'm a Computer Engineering student passionate about software development. I specialize in the React and React Native ecosystems, building both web and mobile applications.",
      p2: "I always prioritize user experience, committing to clean, readable, and maintainable code. I'm a collaborative team player focused on problem-solving.",
      p3: "In my spare time, I contribute to open-source projects, explore new technologies, and read technical blogs.",
      years: "3+ Years", yearsLabel: "Software Development",
      mobile: "5+ Mobile", mobileLabel: "Applications",
      web: "10+ Web", webLabel: "Projects",
      coffee: "∞ Coffee", coffeeLabel: "Consumed",
    },
    themes: { dark: "Dark", light: "Light", warm: "Warm" },
    skills: { title: "Skills", tools: "Tools & DevOps" },
    projects: { title: "Projects", code: "Code", demo: "Demo", appStore: "App Store", playStore: "Play Store" },
    contact: {
      subtitle: "04. Contact", title: "Let's Talk",
      body: "Have a project in mind, want to collaborate, or just want to say hi? Don't hesitate to reach out!",
      cta: "Send Message", by: "Designed & Built by",
    },
  },
  es: {
    nav: {
      about: "Sobre mí", skills: "Habilidades", projects: "Proyectos",
      contact: "Contacto", cta: "Conectemos",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Software Developer & Computer Engineer",
      bio: "Desarrollo aplicaciones centradas en el usuario con React, React Native y tecnologías web modernas. El código limpio y las interfaces hermosas son mi pasión.",
      cv: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      p1: "Soy estudiante de Ingeniería Informática apasionado por el desarrollo de software. Me especializo en React y React Native, creando aplicaciones web y móviles.",
      p2: "Siempre priorizo la experiencia del usuario, comprometiéndome con código limpio, legible y mantenible. Trabajo bien en equipo y me enfoco en resolver problemas.",
      p3: "En mi tiempo libre contribuyo a proyectos de código abierto, exploro nuevas tecnologías y leo blogs técnicos.",
      years: "3+ Años", yearsLabel: "Desarrollo de Software",
      mobile: "5+ Móvil", mobileLabel: "Aplicaciones",
      web: "10+ Web", webLabel: "Proyectos",
      coffee: "∞ Café", coffeeLabel: "Consumido",
    },
    themes: { dark: "Oscuro", light: "Claro", warm: "Cálido" },
    skills: { title: "Habilidades", tools: "Herramientas & DevOps" },
    projects: { title: "Proyectos", code: "Código", demo: "Demo", appStore: "App Store", playStore: "Play Store" },
    contact: {
      subtitle: "04. Contacto", title: "Hablemos",
      body: "¿Tienes una idea de proyecto, quieres colaborar o simplemente decir hola? ¡No dudes en escribirme!",
      cta: "Enviar Mensaje", by: "Diseñado & Desarrollado por",
    },
  },
  de: {
    nav: {
      about: "Über mich", skills: "Fähigkeiten", projects: "Projekte",
      contact: "Kontakt", cta: "Verbinden",
    },
    hero: {
      greeting: "Hallo, ich bin",
      role: "Software Developer & Computer Engineer",
      bio: "Ich entwickle nutzerorientierte, performante Anwendungen mit React, React Native und modernen Web-Technologien. Sauberer Code und schöne Interfaces sind meine Leidenschaft.",
      cv: "Lebenslauf",
    },
    about: {
      title: "Über Mich",
      p1: "Ich bin Informatikstudent mit großer Leidenschaft für Softwareentwicklung. Ich spezialisiere mich auf React und React Native und entwickle Web- sowie Mobile-Anwendungen.",
      p2: "Ich stelle Nutzererfahrung immer in den Vordergrund und schreibe sauberen, lesbaren und wartbaren Code. Ich arbeite gerne im Team und löse Probleme effizient.",
      p3: "In meiner Freizeit trage ich zu Open-Source-Projekten bei, erkunde neue Technologien und lese technische Blogs.",
      years: "3+ Jahre", yearsLabel: "Softwareentwicklung",
      mobile: "5+ Mobile", mobileLabel: "Apps",
      web: "10+ Web", webLabel: "Projekte",
      coffee: "∞ Kaffee", coffeeLabel: "Konsumiert",
    },
    themes: { dark: "Dunkel", light: "Hell", warm: "Warm" },
    skills: { title: "Fähigkeiten", tools: "Werkzeuge & DevOps" },
    projects: { title: "Projekte", code: "Code", demo: "Demo", appStore: "App Store", playStore: "Play Store" },
    contact: {
      subtitle: "04. Kontakt", title: "Lass uns reden",
      body: "Haben Sie eine Projektidee, möchten Sie zusammenarbeiten oder einfach Hallo sagen? Zögern Sie nicht, mich zu kontaktieren!",
      cta: "Nachricht senden", by: "Entworfen & entwickelt von",
    },
  },
  fr: {
    nav: {
      about: "À propos", skills: "Compétences", projects: "Projets",
      contact: "Contact", cta: "Connectons",
    },
    hero: {
      greeting: "Bonjour, je suis",
      role: "Software Developer & Computer Engineer",
      bio: "Je développe des applications performantes centrées sur l'utilisateur avec React, React Native et les technologies web modernes. Le code propre et les belles interfaces sont ma passion.",
      cv: "Télécharger CV",
    },
    about: {
      title: "À Propos",
      p1: "Je suis étudiant en informatique passionné par le développement logiciel. Je me spécialise dans React et React Native, créant des applications web et mobiles.",
      p2: "Je place toujours l'expérience utilisateur au premier plan, m'engageant à écrire du code propre, lisible et maintenable. Je travaille bien en équipe et résous les problèmes efficacement.",
      p3: "Dans mon temps libre, je contribue à des projets open source, explore de nouvelles technologies et lis des blogs techniques.",
      years: "3+ Ans", yearsLabel: "Développement Logiciel",
      mobile: "5+ Mobile", mobileLabel: "Applications",
      web: "10+ Web", webLabel: "Projets",
      coffee: "∞ Café", coffeeLabel: "Consommé",
    },
    themes: { dark: "Sombre", light: "Clair", warm: "Chaud" },
    skills: { title: "Compétences", tools: "Outils & DevOps" },
    projects: { title: "Projets", code: "Code", demo: "Demo", appStore: "App Store", playStore: "Play Store" },
    contact: {
      subtitle: "04. Contact", title: "Parlons",
      body: "Vous avez une idée de projet, souhaitez collaborer ou juste dire bonjour? N'hésitez pas à me contacter!",
      cta: "Envoyer un message", by: "Conçu & Développé par",
    },
  },
};
