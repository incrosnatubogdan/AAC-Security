import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/pages/HomePage.vue";
import ContactPage from "../views/pages/ContactPage.vue";
import HiringPage from "../views/pages/HiringPage.vue";

import CloseProtection from "../views/pages/services/CloseProtection.vue";
import LuxuryEvent from "../views/pages/services/LuxuryEvent.vue";
import ResidentialSecurity from "../views/pages/services/ResidentialSecurity.vue";
import Corporate from "../views/pages/services/Corporate.vue";
import Hotel from "../views/pages/services/Hotel.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: HomePage,
    },
    {
      path: "/close-protection-vip",
      name: "closeProtection",
      component: CloseProtection,
    },
    {
      path: "/luxury-event-security",
      name: "luxuryEvent",
      component: LuxuryEvent,
    },
    {
      path: "/residential-security",
      name: "residentialSecurity",
      component: ResidentialSecurity,
    },

    {
      path: "/corporate-security",
      name: "corporate",
      component: Corporate,
    },
    {
      path: "/hotel-security",
      name: "hotel",
      component: Hotel,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage,
    },
    {
      path: "/hiring",
      name: "hiring",
      component: HiringPage,
    },
  ],
});

export default router;
