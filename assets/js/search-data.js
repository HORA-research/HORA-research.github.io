
const currentUrl = window.location.href;
const siteUrl = "https://HORA-research.github.io";
let updatedUrl = currentUrl.replace("https://HORA-research.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-accueil",
    title: "Accueil",
    section: "menu de navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-membres",
          title: "Membres",
          description: "Les membres du groupe.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-projets",
          title: "Projets",
          description: "Les projets du groupe.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications par ordre chronologique inverse. Générées par Jekyll-Scholar.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-enseignement",
          title: "Enseignement",
          description: "La liste des cours enseignés par les membres du groupe.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "courses-éléments-de-base-de-données",
          title: 'Éléments de base de données',
          description: "Ce cours aborde les aspects fondamentaux des concepts et de l&#39;architecture des bases de données.",
          section: "",handler: () => {
              window.location.href = "/courses/IFT187/";
            },},{id: "courses-mise-en-œuvre-des-bases-de-données",
          title: 'Mise en œuvre des bases de données',
          description: "Ce cours aborde les aspects fondamentaux de la mise en œuvre des bases de données.",
          section: "",handler: () => {
              window.location.href = "/courses/IFT677/";
            },},{id: "courses-sujets-approfondis-en-bases-de-données",
          title: 'Sujets approfondis en bases de données',
          description: "Ce cours aborde des problèmes de recherche dans le domaine des bases de données.",
          section: "",handler: () => {
              window.location.href = "/courses/IFT723/";
            },},{id: "courses-modélisation-des-bases-de-données",
          title: 'Modélisation des bases de données',
          description: "Ce cours aborde les aspects fondamentaux de la modélisation de bases de données.",
          section: "",handler: () => {
              window.location.href = "/courses/IGE687/";
            },},{id: "courses-école-d-été-interdisciplinaire-en-numérique-de-la-santé",
          title: 'École d’été interdisciplinaire en numérique de la santé',
          description: "Ce cours aborde les défis de la mise en place d&#39;un système de santé apprenant.",
          section: "",handler: () => {
              window.location.href = "/courses/SCI707/";
            },},{id: "news-hora-is-officially-created",
          title: 'HORA is officially created !',
          description: "",
          section: "actualités",},{id: "projects-ora",
          title: 'ORA',
          description: "Modélisation ontologique-relationnelle de bases de données.",
          section: "projets",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-uhf",
          title: 'UHF',
          description: "Cadre d&#39;historicisation unifié.",
          section: "projets",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-psn-élcv",
          title: 'PSN-ÉLCV',
          description: "Classification des produits de santé naturels",
          section: "projets",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
          id: 'lang-en',
          title: 'en',
          section: 'langues',
          handler: () => {
            window.location.href = "/en" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'changer le thème en clair',
      description: 'changer le thème du site en clair',
      section: 'thème',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'changer le thème en sombre',
      description: 'changer le thème du site en sombre',
      section: 'thème',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'utiliser le thème par défaut du système',
      description: 'changer le thème du site selon le système par défaut',
      section: 'thème',
      handler: () => {
        setThemeSetting("system");
      },
    },];
