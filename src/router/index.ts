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
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Vélo Saguenay";
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", to.meta.description || "");
  next();
});

export default router;
