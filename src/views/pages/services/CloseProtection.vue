<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "@/components/NavbarDefault.vue";
import WhatsAppButton from "@/components/WhatsAppButton.vue";

//image
import bg0 from "@/assets/img/services/close_protection_cover.jpg";

import {
  closeProtectionServices,
} from "../../../helpers/services/closeProtection";
import servicesData from "../../../helpers/services/data";

const body = document.getElementsByTagName("body")[0];
const pageInfo = servicesData.filter(
  (service) => service.id === "close-protection-vip"
)[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <NavbarDefault />
  <!-- <WhatsAppButton /> -->
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-100"
      :style="{ backgroundImage: `url(${bg0})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-5 py-5">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h3 class="mb-4 text-white opacity-8 text-decoration-underline">{{ pageInfo.heading }}</h3>
            <p class="lead mb-5 text-white opacity-8">
              {{ pageInfo.description }}
            </p>
          </div>

          <div class="row mt-5">
            <p class="c-white col-lg-3 col-md-6 col-sm-12" v-for="service in closeProtectionServices">
              <h5 class="c-white">{{ service.title }}</h5>
              {{ service.description }}
            </p>
          </div>
          <button type="button" class="btn btn-sm mb-0 mt-3 bg-gradient-light cta-button-services">
            <a href="tel:+447951027265"> CALL US </a>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
