<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../../../components/NavbarDefault.vue";

//image
import bg0 from "@/assets/img/services/close_protection/cover.jpg";
//sections
import Information from "../sections/ServicesInformation.vue";

import {
  residentialSecurityServices,
  residentialSecurityServicesCta,
} from "../../../helpers/services/residentialSecurity";
import servicesData from "../../../helpers/services/data";
import WhatsAppButton from "../../../components/WhatsAppButton.vue";

const body = document.getElementsByTagName("body")[0];
const pageInfo = servicesData.filter(
  (service) => service.id === "residential-security"
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
  <DefaultNavbar transparent />
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      :style="{ backgroundImage: `url(${bg0})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h3 class="mb-4 text-white opacity-8">{{ pageInfo.heading }}</h3>
            <p class="lead mb-4 text-white opacity-8">
              {{ pageInfo.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <Information
      :serviceDescription="residentialSecurityServices"
      :callToAction="residentialSecurityServicesCta"
    />
  </div>
  <WhatsAppButton />
</template>../../pages/ServicesInformation.vue../../../components/NavbarDefault.vue
