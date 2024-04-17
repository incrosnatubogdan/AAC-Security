<script setup>
import NavbarDefault from "@/components/NavbarDefault.vue";
import Header from "@/components/Header.vue";

import HomePageInfo from "./sections/HomePageInfo.vue";
//images
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import home_bg_1 from "@/assets/img/home/home_bg_1.jpg";
import home_bg_2 from "@/assets/img/home/home_bg_2.jpg";
import home_bg_3 from "@/assets/img/home/home_why.png";
</script>

<script>
//hooks
export default {
  data() {
    return {
      isFirstSlide: true,
      options : {
          licenseKey: 'gplv3-license',
          scrollingSpeed: 0,
          menu: '#menu',
          anchors: ['landing-page1', 'landing-page2', 'landing-page3', 'landing-page4', 'landing-page5'],
          sectionsColor: ['transparent', '#ff5f45', '#0798ec', '#0798ec'],
          onLeave: (origin, destination, direction, trigger) => {
            if(destination) {
              this.isFirstSlide = destination.anchor === 'landing-page'
            }
          }
      }
    };
  },

  mounted() {
    const body = document.getElementsByTagName("body")[0];
    // const fullpage = document.getElementById("fullpage")[0];
    body.classList.add("presentation-page");
    body.classList.add("bg-gray-200");
    window.location.href = document.URL.replace(/#.*$/, "") + "#landing-page"
  },

  beforeUnmount() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("presentation-page");
    body.classList.remove("bg-gray-200");
  },
}
</script>

<template>
  <NavbarDefault :isOnFirstSlide="isFirstSlide" />

  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section" data-anchor="landing-page">
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

    <div class="section page-header min-vh-100" data-anchor="page2" :style="`background-image: url(${home_bg_1}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`">
        <div class="row">
              <div class="col-lg-12 text-center">
                <HomePageInfo />
              </div>
            </div>
    </div>

    <div class="section" data-anchor="page3">
      <div
          class="page-header min-vh-100"
          :style="`background-image: url(${home_bg_2}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
          loading="lazy"
        >
        <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center mx-auto position-relative">
                <h1 class="text-white text-center">Why choose us?</h1>
              </div>
            </div>
          </div>
      </div>
    </div>

    <div class="section page-header min-vh-100" :style="`background-image: url(${home_bg_3}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`">
        <div class="slide">
        <div class="container">
          <div class="row">
          <div class="col-md-8 offset-md-2 offset-1 col-10 d-flex justify-content-center align-items-center flex-column flex-lg-row">
              <span class="c-white">
                <h3 class="c-white">Commitment to Excellence</h3>
                The company is committed to delivering high-quality security services with a focus on skill, dedication, and forward-thinking strategies.
              </span>
          </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2 offset-1 col-10 d-flex justify-content-center align-items-center flex-column flex-lg-row">
              <span class="c-white">
                <h3 class="c-white">Comprehensive Security Approach</h3>
                Emphasizes a holistic strategy in security, integrating knowledge and progression to meet evolving challenges.
              </span>
          </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="container">
          <div class="row">
          <div class="col-md-8 offset-md-2 offset-1 col-10 d-flex justify-content-center align-items-center flex-column flex-lg-row">
              <span class="c-white">
                <h3 class="c-white">Leadership and Expertise</h3>
                Founded by Adrien and Arina, AAP Security is led by a blend of extensive security experience and educational insight, ensuring top-tier talent and innovative solutions.
              </span>
          </div>
          </div>
        </div>
      </div>
    </div>
</full-page>
  <!-- <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    
    
    
    
  </div> -->
</template>
