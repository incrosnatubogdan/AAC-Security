<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "@/components/NavbarDefault.vue";
import Header from "@/components/Header.vue";
import WhatsAppButton from "@/components/WhatsAppButton.vue";

// sections
import HomePageServices from "./sections/HomePageServices.vue";
import servicesData from "@/helpers/services/data";
import HomePageTestimonials from "./sections/HomePageTestimonials.vue";
import HomePageInfo from "./sections/HomePageInfo.vue";

//images
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${vueMkHeader}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-n5 me-2 new-font"
              :style="{ display: 'inline-block ' }"
            >
              AAP Security
            </h1>
            <p
              class="lead text-white px-5 mt-3 quote-font"
              :style="{ fontWeight: '500' }"
            >
              "Vigilance Without Compromise"
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <WhatsAppButton />

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <!-- <PresentationCounter /> -->
    <HomePageInfo />
    <HomePageServices :data="servicesData" />
    <HomePageTestimonials />
  </div>
</template>
./sections/PresentationExample.vue../../components/NavbarDefault.vue../../components/Header.vue
