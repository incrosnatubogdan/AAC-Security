<script setup>
import NavbarDefault from "@/components/NavbarDefault.vue";
import hiring_2 from "@/assets/img/hiring/hiring_2.jpg";
//hooks
import hiring_1 from "@/assets/img/hiring/hiring_1.jpg";
import Footer from "@/components/Footer.vue";
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
        anchors: ["hiring_lp", "security-officer", "security-manager", "aus4", "aus5"],
        sectionsColor: ["#ffffff"],
        
        onLeave: (origin, destination, direction, trigger) => {
          const firstPage = "hiring_lp";
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
  <NavbarDefault light />
  <WhatsAppButton />
    <div class="section">
      <div
          class="page-header min-vh-100"
          :style="`background-image: url(${hiring_1}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
          loading="lazy"
        >
         <div class="container my-5 py-5">
            <div class="row">
              <div class="col-10 text-align-center justify-content-center d-flex flex-column">
                <h1 class="text-white">JOB OPENINGS </h1>
                <p class="text-white mt-5">We offer rewarding careers with comprehensive training, competitive salaries, and growth opportunities in a supportive and professional environment. Join us to make a meaningful impact in the security industry alongside a team committed to excellence and integrity.</p>
                <div class="row mt-5">
                  <div class="col-12 d-flex flex-wrap">
                    <a class="d-flex cursor-pointer align-items-center flex-row hiring-page-options pb-0 mt-2" href="#security-officer"> 
                      <h5 class="text-white">SECURITY OFFICER
                        <p class="text-white mb-0">LONDON</p>
                      </h5>
                      <i
                        class="material-icons text-white"
                        style="margin-left: 8px;"
                        >chevron_right</i
                      >
                    </a>
                    <a class="d-flex cursor-pointer align-items-center flex-row hiring-page-options pb-0 mt-2" href="#security-officer"> 
                      <h5 class="text-white">SECURITY MANAGER/SUPERVISOR
                        <p class="text-white mb-0">LONDON</p>
                      </h5>
                      <i
                        class="material-icons text-white"
                        style="margin-left: 8px;"
                        >chevron_right</i
                      >
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div class="section" id="security-officer">
      <div
          class="page-header min-vh-100 py-5"
          :style="`background-image: url(${hiring_2}); box-shadow:inset 0 0 0 2000px rgb(0 0 0 / 40%)`"
          loading="lazy"
        >
          <div class="container">
            <div class="row">
              <div class="col-12 text-center mx-auto position-relative">
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
        <Footer />
    </div>
</template>

<style>
.hiring-page-options {
  border-radius: 12px;
  padding: 12px;
  background-color: #862B2B;
  height: fit-content;
  min-height: 110px;
  justify-content: space-around;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin-right: 16px;
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