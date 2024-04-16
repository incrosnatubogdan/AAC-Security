<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "@/components/NavbarDefault.vue";
import hiring_2 from "@/assets/img/hiring/hiring_2.jpg";
//hooks
import hiring_1 from "@/assets/img/hiring/hiring_1.jpg";
const body = document.getElementsByTagName("body")[0];
const options = {
    licenseKey: 'gplv3-license',
    menu: '#menu',
    anchors: ['page1', 'security-officer', 'security-manager'],
}

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
  <NavbarDefault />
  <!-- <WhatsAppButton /> -->
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      <div
          class="page-header min-vh-100"
          :style="`background-image: url(${hiring_1}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
          loading="lazy"
        >
         <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center mx-auto position-relative">
              </div>
              <div class="col-lg-10 text-align-center justify-content-center d-flex flex-wrap flex-column">
                <h1 class="text-white">JOB OPENINGS </h1>
                <p class="text-white mt-5">We offer rewarding careers with comprehensive training, competitive salaries, and growth opportunities in a supportive and professional environment. Join us to make a meaningful impact in the security industry alongside a team committed to excellence and integrity.</p>
                <div class="row mt-5">
                  <div class="col-lg-6 justify-content-center d-flex mb-3">
                    <a class="d-flex cursor-pointer align-items-center flex-column hiring-page-options pb-0" href="#security-officer"> 
                      <h5 class="text-white">SECURITY OFFICER</h5>
                      <p class="text-white">LONDON</p>
                      <p class="text-white text-decoration-underline">See full description</p>
                    </a>
                  </div>
                  <div class="col-lg-6 justify-content-center d-flex">
                    <a class="d-flex cursor-pointer align-items-center flex-column hiring-page-options pb-0" href="#security-manager"> 
                      <h5 class="text-white">SECURITY MANAGER/SUPERVISOR</h5>
                      <p class="text-white">LONDON</p>
                      <p class="text-white text-decoration-underline">See full description</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div class="section">
      <div
          class="page-header min-vh-100"
          :style="`background-image: url(${hiring_2}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
          loading="lazy"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center mx-auto position-relative">
                <h3
                  class="text-white pt-3 mt-n5 me-2 mb-5"
                  :style="{ display: 'inline-block ', fontWeight: '500' }"
                >
                SECURITY OFFICER - LONDON
                </h3>
                <div class="row">
                  <div class="col-lg-6 align-items-start d-flex flex-column text-white">
                    <h5 class="text-white">Job Duties:</h5>
                    <ul class="text-left">
                      <li>Patrolling premises and conducting security checks</li>
                      <li>Monitoring CCTV and responding to alarms.</li>
                      <li>Managing access control for buildings or events.</li>
                      <li>Reporting incidents and ensuring safety protocols are followed.</li>
                      <li>Assisting in emergency situations and coordinating with law enforcement.</li>
                    </ul>
                  </div>
                  <div class="col-lg-6 align-items-start d-flex flex-column text-white">
                    <h5 class="text-white">Requirements:</h5>
                    <ul class="text-left">
                      <li>SIA (Security Industry Authority) license</li>
                      <li>Good communication skills and physical fitness.</li>
                      <li>Ability to work shifts, including nights and weekends.</li>
                      <li>Background check and a clean criminal record.</li>
                      <li>Experience in security work is preferred, but training is often provided for new recruits.</li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12 justify-content-center d-flex">
                    <RouterLink
                      :to="{ name: 'contact' }"
                      class="hiring-page-cv d-flex cursor-pointer align-items-center"
                    >
                      <i
                        class="material-icons hiring-page-cta-icon"
                        >email</i
                      >
                      <span class="text-white px-3">Send your CV</span>
                    </RouterLink>
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
.hiring-page-options {
  border-radius: 12px;
  padding: 12px;
  background-color: #862B2B;
  height: fit-content;
}

.text-left {
  text-align: left;
}

.hiring-page-cv {
  border-radius: 25px;
  background: #862B2B;
}

.hiring-page-cta-icon {
  color: white;
  font-size: 20px;
    border-radius: 50%;
    border: 2px solid white;
    padding: 7px;
}
</style>