<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "@/components/NavbarDefault.vue";
import about_2 from "@/assets/img/about/about_2.jpg";
//image
import adrienImg from "@/assets/img/about/team_1.jpeg";
import arinaImg from "@/assets/img/about/team_1.jpeg";
import adrienImgNoBg from "@/assets/img/about/team_1.png";
</script>

<script>
//hooks
export default {
  data() {
    return {
      isFirstSlide: true,
      options: {
        licenseKey: "gplv3-license",
        scrollingSpeed: 200,
        responsiveWidth: 0,
        dragAndMove: true,
        easingcss3: 'animate__zoomIn',
        paddingTop: 0,
        menu: "#menu",
        anchors: ["aus1", "aus2", "aus3", "aus4", "aus5"],
        sectionsColor: ["#ffffff"],
        
        onLeave: (origin, destination, direction, trigger) => {
          const firstPage = "aus1";
          if (destination) {
            origin.item.classList.remove('fadeIn', 'animated');
            destination.item.classList.add('fadeIn', 'animated');
            this.isFirstSlide = destination.anchor === firstPage;
          }
        },
      },
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
  <NavbarDefault light :isOnFirstSlide="isFirstSlide" />
  <!-- <WhatsAppButton /> -->
  <full-page ref="fullpageAbout" id="fullpageAbout" :options="options">
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

    <div class="section" data-anchor="aus2">
      <div
        class="page-header min-vh-100 page-header-founder"
        :style="`background-image: url(${about_2}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
        loading="lazy"
      >
        <img class="founder-image" :src="adrienImgNoBg" alt="" />
        <div class="container">
          <div class="row">
            <div class="col-lg-4 text-center mx-auto position-relative"></div>
            <div
              class="col-lg-8 text-align-center justify-content-center d-flex flex-wrap flex-column"
            >
              <h1 class="text-white">ADRIEN</h1>
              <p class="text-white lead">
                With seven years of seasoned experience in the security
                industry, Adrien’s expertise is the cornerstone of our
                operational excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section" data-anchor="aus3">
      <div
        class="page-header min-vh-100 page-header-founder  no-bg"
        loading="lazy"
      >
        <img class="founder-image" :src="adrienImg" alt="" />
        <div class="container">
          <div class="row">
            <div class="col-lg-4 text-center mx-auto position-relative"></div>
            <div
              class="col-lg-8 text-align-center justify-content-center d-flex flex-wrap flex-column"
            >
              <h1 class="text-white">ADRIEN</h1>
              <p class="text-white lead">His knack for identifying and nurturing
                talent has been instrumental in assembling a team that’s not
                just proficient but also genuinely committed to our clients’
                safety
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="section" data-anchor="aus3">
      <div
        class="page-header min-vh-100"
        :style="`background-image: url(${about_2}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
        loading="lazy"
      >
        <img class="founder-image" :src="arinaImg" alt="" />
        <div class="container">
          <div class="row">
            <div class="col-lg-4 text-center mx-auto position-relative"></div>
            <div
              class="col-lg-8 text-align-center justify-content-center d-flex flex-wrap flex-column"
            >
              <h1 class="text-white">ARINA</h1>
              <p class="text-white">
                Co-founder Arina, the entrepreneurial force behind ASK33 and
                Nexus College of London, brings a strategic perspective to our
                services, ensuring our approaches are not just effective but
                also aligned with our clients’ long-term objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->

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
    </div>
  </full-page>
</template>

<style>
.founder-image {
  position: absolute;
  left: 16px;
  bottom: 16px;
  max-height: 50vh;
}

.about-us-cta {
  font-size: 40px;
  color: white;
  background-color: #862b2b;
  border-radius: 50%;
  padding: 12px;
}
</style>
