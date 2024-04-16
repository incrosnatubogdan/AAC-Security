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
import TextSection from "@/components/TextSection.vue";
import { introDescription, chooseUsDescription, commitmentDescription } from "@/helpers/home"
//hooks
const body = document.getElementsByTagName("body")[0];
const options = {
    licenseKey: 'gplv3-license',
    menu: '#menu',
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    sectionsColor: ['transparent', '#ff5f45', '#0798ec', '#0798ec'],
}
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
  

  <WhatsAppButton />
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      <Header>
        <div
          class="page-header min-vh-100"
          :style="`background-image: url(${vueMkHeader}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
          loading="lazy"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-7 text-center mx-auto position-relative">
                <h1
                  class="text-white pt-3 mt-n5 me-2 quote-font"
                  :style="{ display: 'inline-block ', fontWeight: '500' }"
                >
                  Beyond Safety: Total Peace of Mind <br>
                  Customized Security for Every Aspect of Your Life
                </h1>
                <!-- <p
                  class="lead text-white px-5 mt-3 quote-font"
                  :style="{ fontWeight: '500' }"
                >
                
                </p> -->
              </div>
            </div>
          </div>
        </div>
      </Header>
    </div>

    <div class="section">
      <HomePageInfo />
    </div>

    <div class="section">
      <h1 class="text-white text-center">Why choose us?</h1>
    </div>

    <div class="section">
      <div class="slide row">
        <div class="col-md-8 offset-md-2 col-sm-12 d-flex justify-content-center align-items-center">
            <i class="material-icons services-icon">dashboard</i>
            <span class="c-white">
              <h3 class="c-white">Commitment to Excellence</h3>
              The company is committed to delivering high-quality security services with a focus on skill, dedication, and forward-thinking strategies.
            </span>
        </div>
      </div>
      <div class="slide row">
        <div class="col-md-8 offset-md-2 col-sm-12 d-flex justify-content-center align-items-center">
            <i class="material-icons services-icon">dashboard</i>
            <span class="c-white">
              <h3 class="c-white">Comprehensive Security Approach</h3>
              Emphasizes a holistic strategy in security, integrating knowledge and progression to meet evolving challenges.
            </span>
        </div>
      </div>
      <div class="slide row">
        <div class="col-md-8 offset-md-2 col-sm-12 col-auto d-flex justify-content-center align-items-center">
            <i class="material-icons services-icon">dashboard</i>
            <span class="c-white">
              <h3 class="c-white">Leadership and Expertise</h3>
              Founded by Adrien and Arina, AAP Security is led by a blend of extensive security experience and educational insight, ensuring top-tier talent and innovative solutions.
            </span>
        </div>
      </div>
    </div>

    <div class="section">
      <HomePageTestimonials />
    </div>
</full-page>
  <!-- <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    
    
    
    
  </div> -->
</template>
