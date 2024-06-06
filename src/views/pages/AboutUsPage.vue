<script setup>
//example components
import NavbarDefault from "@/components/NavbarDefault.vue";
import about_2 from "@/assets/img/about/about_2.jpg";
//image


import adrienImgBg2 from "@/assets/img/about/team_1_bg.jpeg";

import adrienImg from "@/assets/img/about/team_1.png";
import arinaImg from '@/assets/img/about/team_2.png'
import Footer from "@/components/Footer.vue";
</script>

<script>
//hooks
export default {
  data() {
    return {
      isFirstSlide: true,
    };
  },

  mounted() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("presentation-page");
    body.classList.add("bg-gray-200");
    window.location.href = document.URL.replace(/#.*$/, "") + "#aus1";
  },

  beforeUnmount() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("presentation-page");
    body.classList.remove("bg-gray-200");
  },
};
</script>
<template>
  <NavbarDefault light/>
  <!-- <WhatsAppButton /> -->
    <div class="section" data-anchor="aus1">
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
                :style="{ display: 'inline-block ' }"
              >
                ABOUT US
              </h1>
              <p class="text-white">
                At AAP SECURITY, we bring over a decade of expertise to the
                forefront, prioritizing a deep understanding of your hospitality
                business dynamics and unique needs. Our commitment to delivering
                top-tier security solutions sets us apart, and we take pride in
                seamlessly integrating into your service team, solidifying our
                position as a trusted leader in the industry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="carouselExampleCaptions" class="carousel slide min-vh-100 carousel-fade" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="section" data-anchor="aus2">
      <div
        class="page-header page-header-founder min-vh-100 py-5 px-4"
        :style="`background-image: url(${about_2}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
        loading="lazy"
      >
        <img class="founder-image animate__animated animate__backInLeft" :src="adrienImg" alt="" />
        <div class="container">
          <div class="row">
            <div class="col-lg-4 text-center mx-auto position-relative"></div>
            <div
              class="col-lg-8 text-align-center justify-content-center d-flex flex-wrap flex-column mx-auto"
            >
              <h1 class="text-white animate__animated animate__fadeInLeft">ADRIEN</h1>
              <p class="text-white lead animate__animated animate__fadeInLeft py-5 mb-300">
                With seven years of seasoned experience in the security
                industry, Adrien’s expertise is the cornerstone of our
                operational excellence. <br> <br>
                His knack for identifying and nurturing
                talent has been instrumental in assembling a team that’s not
                just proficient but also genuinely committed to our clients’
                safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
          <div class="carousel-item">
            <div class="section" data-anchor="aus3">
      <div
        class="page-header  page-header-founder min-vh-100 py-5 px-4"
        :style="`background-image: url(${adrienImgBg2}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 60%)`"
        loading="lazy"
      >
        <img class="founder-image animate__animated animate__backInLeft" :src="arinaImg" alt="" />
        <div class="container">
          <div class="row">
            <div class="col-lg-4 text-center mx-auto position-relative"></div>
            <div
              class="col-lg-8 text-align-center justify-content-center d-flex flex-wrap flex-column"
            >
              <h1 class="text-white animate__animated animate__fadeInLeft">ARINA</h1>
              <p class="text-white lead animate__animated animate__fadeInLeft py-5 mb-300">
                Co founder Arina, the entrepreneurial force behind ASK33 and
Nexus College of London, brings a strategic perspective to our services, ensuring our
approaches are not just effective but also aligned with our clients’ long term objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    <div class="section" data-anchor="aus4">
      <div
        class="page-header min-vh-100"
        :style="`background-image: url(${about_2}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
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
              <p class="text-white mt-5">
                Our ethos is built on trust, reliability, and unparalleled
                service quality. We don’t just offer security services; we
                provide peace of mind, knowing that you’re protected by the best
                in the business. Our proactive approach to potential threats and
                our relentless pursuit of innovation set us apart, making us the
                preferred choice for those who value their safety and
                well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section" data-anchor="aus5">
      <div
        class="page-header min-vh-100"
        :style="`background-image: url(${adrienImgBg2}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 60%)`"
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
              <p class="text-white mt-5">
                Discover how AAP Security can enhance your security and peace of
                mind. Contact us today to learn more about our services and how
                we can tailor our solutions to meet your unique needs
              </p>
              <div class="container">
                <div class="row">
                  <div class="col-6 justify-content-center d-flex">
                    <RouterLink
                      :to="{ name: 'contact' }"
                      class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                    >
                      <i class="material-icons about-us-cta">email</i>
                    </RouterLink>
                  </div>
                  <div class="col-6 justify-content-center d-flex">
                    <a
                      class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                      href="tel:+447951027265"
                    >
                      <i class="material-icons about-us-cta">phone</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
</template>

<style>
.founder-image {
  position: absolute;
  left: 16px;
  bottom: 0;
  max-height: 50vh;
  border-radius: 12px;
}

.about-us-cta {
  font-size: 40px;
  color: white;
  background-color: #862b2b;
  border-radius: 50%;
  padding: 12px;
}
</style>
