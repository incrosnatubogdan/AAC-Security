import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import ContactView from "../views/LandingPages/ContactUs/ContactView.vue";
import Hiring from "../views/LandingPages/ContactUs/Hiring.vue";
import SignInBasicView from "../views/LandingPages/SignIn/BasicView.vue";

import CloseProtection from "../views/LandingPages/Services/CloseProtection.vue";
import LuxuryEvent from "../views/LandingPages/Services/LuxuryEvent.vue";
import ResidentialSecurity from "../views/LandingPages/Services/ResidentialSecurity.vue";
import Corporate from "../views/LandingPages/Services/Corporate.vue";
import Hotel from "../views/LandingPages/Services/Hotel.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
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
      path: "/pages/landing-pages/contact-us",
      name: "contact",
      component: ContactView,
    },
    // Unused go here
    {
      path: "/hiring",
      name: "hiring",
      component: Hiring,
    },
    {
      path: "/pages/landing-pages/basic",
      name: "signin-basic",
      component: SignInBasicView,
    },
  ],
});

export default router;
