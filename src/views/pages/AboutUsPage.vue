<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "@/components/NavbarDefault.vue";
//image
import bg0 from "@/assets/img/bg9.jpg";
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
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

const options = {
    licenseKey: 'gplv3-license',
    menu: '#menu',
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
}

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <DefaultNavbar :sticky="true" />
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      <div
          class="page-header min-vh-100"
          :style="`background-image: url(${vueMkHeader}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
          loading="lazy"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-7 text-center mx-auto position-relative">
                <h1
                  class="text-white pt-3 mt-n5 me-2"
                  :style="{ display: 'inline-block ', fontWeight: '500' }"
                >
                ABOUT US
                </h1>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div class="section">
      <div
          class="page-header min-vh-100"
          :style="`background-image: url(${vueMkHeader}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
          loading="lazy"
        >
        <img class="founder-image" src="https://media.canva.com/1/image-resize/1/800_533_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9oMHJKUS9NQUdCeHhoMHJKUS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAJnopO1op_q5Hs-ffPFjds6okwzKHzxH3V8h7wmMrA2l&exp=1713269768&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAADAZASVE2VQ5uZ7x3z_vz9JftwAogc8WCMJlF3n8UYzO" alt="">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 text-center mx-auto position-relative">
              </div>
              <div class="col-lg-8 text-align-center justify-content-center d-flex flex-wrap flex-column">
                <h1 class="text-white">ADRIEN</h1>
                <p class="text-white">With seven years of seasoned experience in the security industry, Adrien’s expertise is the cornerstone of our operational excellence. His knack for  identifying and nurturing talent has been instrumental in assembling a team that’s not  just proficient but also genuinely committed to our clients’ safety</p>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div class="section">
      <div
          class="page-header min-vh-100"
          :style="`background-image: url(${vueMkHeader}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
          loading="lazy"
        >
        <img class="founder-image" src="https://media.canva.com/1/image-resize/1/533_800_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS94V1JZRS9NQUdCeHd4V1JZRS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAOEsOCLWn7RY68WvUu615S9kdMiQg0YiITwTi0Gaco8r&exp=1713267746&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAACC7uF5FD2RovenCuoUAZr16dvqVVHx49-V2hwGTHWYo" alt="">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 text-center mx-auto position-relative">
              </div>
              <div class="col-lg-8 text-align-center justify-content-center d-flex flex-wrap flex-column">
                <h1 class="text-white">ARINA</h1>
                <p class="text-white">Co-founder Arina, the entrepreneurial force behind ASK33 and Nexus College of London, brings a strategic perspective to our services, ensuring our approaches are not just effective but also aligned with our clients’ long-term objectives.</p>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div class="section">
      <div
          class="page-header min-vh-100"
          :style="`background-image: url(${vueMkHeader}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
          loading="lazy"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-7 text-center mx-auto position-relative">
                <h3
                  class="text-white pt-3 mt-n5 me-2"
                  :style="{ display: 'inline-block ', fontWeight: '500' }"
                >
                TOGHETER WE ARE COMMITED TO EXCELLENCE
                </h3>
                <p class="text-white mt-5">Our ethos is built on trust, reliability, and unparalleled service quality. We don’t just offer security services; we provide peace of mind, knowing that you’re protected by the best in the business. Our proactive approach to potential threats and our relentless pursuit of innovation set us apart, making us the preferred choice for those who value their safety and well-being.</p>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div class="section">
      <div
          class="page-header min-vh-100"
          :style="`background-image: url(${vueMkHeader}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
          loading="lazy"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-7 text-center mx-auto position-relative">
                <h3
                  class="text-white pt-3 mt-n5 me-2"
                  :style="{ display: 'inline-block ', fontWeight: '500' }"
                >
                GET IN TOUCH
                </h3>
                <p class="text-white mt-5">Discover how AAP Security can enhance your security and peace of mind. Contact us today to learn more about our services and how we can tailor our solutions to meet your unique needs</p>
                <div class="row">
                  <div class="col-lg-6 justify-content-center d-flex">
                    <RouterLink
                      :to="{ name: 'contact' }"
                      class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                    >
                      <i
                        class="material-icons about-us-cta"
                        >email</i
                      >
                    </RouterLink>
                  </div>
                  <div class="col-lg-6 justify-content-center d-flex">
                    <a class="nav-link ps-2 d-flex cursor-pointer align-items-center" href="tel:+447951027265"> 
                      <i
                        class="material-icons about-us-cta"
                        >phone</i
                      >
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </full-page>
  
</template>

<style>
.founder-image {
  position: absolute;
  left: 0;
  bottom: 0;
  max-height: 50vh;
}

.about-us-cta {
  font-size: 40px;
  color: white;
  background-color: #862B2B;
  border-radius: 50%;
  padding: 12px;
}
</style>