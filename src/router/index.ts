import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Vélo Saguenay - Accueil",
        description:
          "Vélo Saguenay coordonne le développement et l’entretien de deux sites exceptionnels de vélo de montagne en milieu urbain, Le Centre de vélo de montagne Le Panoramique à Chicoutimi et le Mont-Bélu Bike-Park de La Baie.",
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      meta: {
        title: "Vélo Saguenay - À Propos",
        description:
          "Vélo Saguenay coordonne le développement et l’entretien de deux sites exceptionnels de vélo de montagne en milieu urbain, Le Centre de vélo de montagne Le Panoramique à Chicoutimi et le Mont-Bélu Bike-Park de La Baie.",
      },
    },
    {
      path: "/involvement",
      name: "involvement",
      component: () => import("../views/InvolvementView.vue"),
      meta: {
        title: "Vélo Saguenay - Impliquez-vous",
        description:
          "Pour devenir bénévole, vous pouvez participer à l'assemblée générale annuelle de Vélo Saguenay",
      },
    },
    {
      path: "/mont-belu",
      name: "mont-belu",
      component: () => import("../views/MontBeluView.vue"),
      meta: {
        title: "Vélo Saguenay - Mont-Bélu Véloparc",
        description:
          "Le Mont Bélu offre des sentiers de type « enduro » depuis 2012. Un sentier d’ascension et 6 sentiers descendant de tous les niveaux sont disponibles.",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
      meta: {
        title: "Vélo Saguenay - Contactez-nous",
        description:
          "Vélo Saguenay ce fera un plaisir de vous répondre. Le meilleur moyen de communiquer avec nous est d'utiliser la page facebook de Vélo Saguenay.",
      },
    },
    {
      path: "/le-panoramique",
      name: "le-panoramique",
      component: () => import("../views/LePanoramique.vue"),
      meta: {
        title: "Vélo Saguenay - Le Panoramique",
        description:
          "Le panoramique possède un réseau de plus de 41 km de sentiers étendu sur 40 sentiers aménagés.",
      },
    },
    {
      path: "/emploi",
      name: "emploi",
      component: () => import("../views/JobOfferView.vue"),
      meta: {
        title: "🎯 Offre d'emploi - Directeur(trice) des opérations ski et vélo | Vélo Saguenay",
        description:
          "Rejoignez notre équipe! Poste permanent à l'année à Saguenay. Directeur(trice) des opérations ski et vélo pour Le Panoramique et Mont-Bélu. Travail terrain, gestion d'équipe, développement d'infrastructures.",
        ogImage: `${window.location.origin}/og-emploi.jpg`,
        ogType: "article",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  updateDocumentMeta(to.meta);
  next();
});

interface RouteMeta {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: string;
}

/**
 * Updates document meta information based on route metadata
 * @param meta Route meta information containing title, description, and Open Graph data
 */
function updateDocumentMeta(meta: RouteMeta) {
  const defaultTitle = "Vélo Saguenay";
  const defaultDescription = "Vélo Saguenay coordonne le développement et l'entretien de deux sites exceptionnels de vélo de montagne en milieu urbain.";
  const defaultImage = `${window.location.origin}/og-image.jpg`;
  const siteUrl = window.location.origin + window.location.pathname + window.location.hash;

  const title = meta.title || defaultTitle;
  const description = meta.description || defaultDescription;
  const ogImage = meta.ogImage || defaultImage;
  const ogType = meta.ogType || "website";

  // Update document title
  document.title = title;

  // Helper function to update or create meta tag
  const updateMetaTag = (selector: string, content: string) => {
    let element = document.querySelector(selector);
    if (element) {
      element.setAttribute("content", content);
    } else {
      element = document.createElement("meta");
      const [attr, value] = selector.replace(/[\[\]]/g, "").split("=");
      element.setAttribute(attr, value.replace(/"/g, ""));
      element.setAttribute("content", content);
      document.head.appendChild(element);
    }
  };

  // Update standard meta tags
  updateMetaTag('meta[name="description"]', description);

  // Update Open Graph meta tags
  updateMetaTag('meta[property="og:title"]', title);
  updateMetaTag('meta[property="og:description"]', description);
  updateMetaTag('meta[property="og:image"]', ogImage);
  updateMetaTag('meta[property="og:url"]', siteUrl);
  updateMetaTag('meta[property="og:type"]', ogType);
  updateMetaTag('meta[property="og:site_name"]', "Vélo Saguenay");

  // Update Twitter Card meta tags
  updateMetaTag('meta[name="twitter:card"]', "summary_large_image");
  updateMetaTag('meta[name="twitter:title"]', title);
  updateMetaTag('meta[name="twitter:description"]', description);
  updateMetaTag('meta[name="twitter:image"]', ogImage);
}

export default router;
