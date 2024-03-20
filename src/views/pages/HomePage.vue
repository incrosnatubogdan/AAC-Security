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
              "Security Tailored for You"
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
    <TextSection :isFull="true" :description="introDescription" />
    <HomePageServices :data="servicesData" />
    
    <TextSection :isFull="false" :description="chooseUsDescription" :title="'Why Choose Us'" />
    <VueCompareImage 
    aspectRatio="wider"
    :slideOnClick="false"
    leftImageCss="height:50px"
      leftImage="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      leftImageLabel="Adrien: With seven years of seasoned experience in the security industry, Adrien’s expertise is the cornerstone of our operational excellence. His knack for identifying and nurturing talent has been instrumental in assembling a team that’s not just proficient but also genuinely committed to our clients’ safety." 
      rightImage="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      rightImageLabel="Arina: Co-founder Arina, the entrepreneurial force behind ASK33 and Nexus College of London, brings a strategic perspective to our services, ensuring our approaches are not just effective but also aligned with our clients’ long-term objectives." />
      <HomePageTestimonials />
    <TextSection :isFull="false" :description="commitmentDescription" :title="'Commitment to Excellence'" />

  </div>
</template>
