<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "@/components/NavbarDefault.vue";
//image
import bg0 from "@/assets/img/bg9.jpg";

//dep
import Typed from "typed.js";

//sections
import Information from "./sections/ServicesInformation.vue";

import {
  hiringServices,
  hiringServicesCta,
} from "../../helpers/services/hiring";

const body = document.getElementsByTagName("body")[0];
const mailToRoute = `mailto:${import.meta.env.VITE_HIRING_EMAIL}`;
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
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
            <h1 class="text-white">
              Work with an amazing <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>team</h1>
              <h1>industry</h1>
              <h1>clientele</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8">
              We’re constantly trying to express ourselves and actualize our
              dreams. Join in on the opportunity by sending your CV
            </p>
            <button type="submit" class="btn bg-white text-dark">
              <a :href="mailToRoute">Send us your CV</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <h2 class="container pt-4">Expected duties</h2>
    <Information
      :serviceDescription="hiringServices"
      :callToAction="hiringServicesCta"
    />
  </div>
</template>../../components/NavbarDefault.vue
