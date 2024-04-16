<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "@/components/NavbarDefault.vue";
import about_2 from "@/assets/img/about/about_2.jpg";
//image
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import adrienImg from "@/assets/img/team_1.webp";
import arinaImg from "@/assets/img/team_2.webp";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");
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
  <NavbarDefault />
  <!-- <WhatsAppButton /> -->
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      <div
          class="page-header min-vh-100"
          :style="`background-image: url(${about_2}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
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
          :style="`background-image: url(${about_2}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
          loading="lazy"
        >
        <img class="founder-image" :src="adrienImg" alt="">
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
          :style="`background-image: url(${about_2}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
          loading="lazy"
        >
        <img class="founder-image" :src="arinaImg" alt="">
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
                <div class="container">
                  <div class="row">
                  <div class="col-6 justify-content-center d-flex">
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
                  <div class="col-6 justify-content-center d-flex">
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