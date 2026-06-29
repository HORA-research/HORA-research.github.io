
const currentUrl = window.location.href;
const siteUrl = "https://HORA-research.github.io";
let updatedUrl = currentUrl.replace("https://HORA-research.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("fr".length > 0) {
  updatedUrl = updatedUrl.replace("/fr", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-accueil",
    title: "Accueil",
    section: "menu de navigation",
    handler: () => {
      window.location.href = "/fr/";
    },
  },{id: "nav-membres",
          title: "Membres",
          description: "Les membres du groupe.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr/people/";
          },
        },{id: "nav-projets",
          title: "Projets",
          description: "Les projets du groupe.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications par ordre chronologique inverse. Générées par Jekyll-Scholar.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr/publications/";
          },
        },{id: "nav-dépôts",
          title: "Dépôts",
          description: "Les dépôts GitHub du groupe.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr/repositories/";
          },
        },{id: "nav-enseignement",
          title: "Enseignement",
          description: "La liste des cours enseignés par les membres du groupe.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "articles",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "articles",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "courses-éléments-de-base-de-données",
          title: 'Éléments de base de données',
          description: "Ce cours aborde les aspects fondamentaux des concepts et de l&#39;architecture des bases de données.",
          section: "",handler: () => {
              window.location.href = "/fr/courses/IFT187/";
            },},{id: "courses-mise-en-œuvre-des-bases-de-données",
          title: 'Mise en œuvre des bases de données',
          description: "Ce cours aborde les aspects fondamentaux de la mise en œuvre des bases de données.",
          section: "",handler: () => {
              window.location.href = "/fr/courses/IFT677/";
            },},{id: "courses-sujets-approfondis-en-bases-de-données",
          title: 'Sujets approfondis en bases de données',
          description: "Ce cours aborde des problèmes de recherche dans le domaine des bases de données.",
          section: "",handler: () => {
              window.location.href = "/fr/courses/IFT723/";
            },},{id: "courses-modélisation-des-bases-de-données",
          title: 'Modélisation des bases de données',
          description: "Ce cours aborde les aspects fondamentaux de la modélisation de bases de données.",
          section: "",handler: () => {
              window.location.href = "/fr/courses/IGE687/";
            },},{id: "courses-école-d-été-interdisciplinaire-en-numérique-de-la-santé",
          title: 'École d’été interdisciplinaire en numérique de la santé',
          description: "Ce cours aborde les défis de la mise en place d&#39;un système de santé apprenant.",
          section: "",handler: () => {
              window.location.href = "/fr/courses/SCI707/";
            },},{id: "news-hora-is-officially-created",
          title: 'HORA is officially created !',
          description: "",
          section: "actualités",},{id: "projects-mora",
          title: 'MORA',
          description: "Modélisation ontologique des bases de données relationnelles.",
          section: "projets",handler: () => {
              window.location.href = "/fr/projects/1_project/";
            },},{id: "projects-uhf",
          title: 'UHF',
          description: "Cadre d&#39;historicisation unifié",
          section: "projets",handler: () => {
              window.location.href = "/fr/projects/2_project/";
            },},{id: "projects-psn-élcv",
          title: 'PSN-ÉLCV',
          description: "Classification des produits de santé naturels",
          section: "projets",handler: () => {
              window.location.href = "/fr/projects/3_project/";
            },},{
          id: 'lang-en',
          title: 'en',
          section: 'langues',
          handler: () => {
            window.location.href = "" + updatedUrl;
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
