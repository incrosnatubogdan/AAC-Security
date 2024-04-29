<script setup>
import { RouterLink } from "vue-router";
import LogoWhite from "@/assets/img/logo_red.png";
import LogoDark from "@/assets/img/logo_black.png";

import facebook_icon from "@/assets/img/icons/facebook.png";
import instagram_icon from "@/assets/img/icons/instagram.png";
import linkedin_icon from "@/assets/img/icons/linkedin.png";
const props = defineProps({
  light: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
});

</script>

<script>
//hooks
export default {
  data() {
    return {
      isOnFirstSlide: false,
      windowHeight: window.innerHeight,
      address: '364-366 Kensington High St, London W14 8NS, UK'
    };
  },

  mounted() {
    
    this.isOnFirstSlide = document.documentElement.scrollTop === 0;
    window.onscroll = () => {
        setTimeout(() => {
          const scrollTop = document.documentElement.scrollTop
          this.isOnFirstSlide = scrollTop === 0;
        }, 100);    }
  }
};
</script>

<template>
  <div class="navbar-call-cta d-flex justify-content-end bg-gradient-success" :class="isOnFirstSlide ? '' : 'd-none' ">
    <a class="location d-md-block d-none" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/bg9B9fkdkcrCZgtp9">{{ address }}</a>
      <a
      target="_blank" rel="noopener noreferrer"
        href="https://www.facebook.com/profile.php?id=61558573751283&mibextid=LQQJ4d" class="mb-0 mx-3 text-white d-flex align-items-center">
        <img :src="facebook_icon" alt="facebook logo">
      </a>

        <a
        target="_blank" rel="noopener noreferrer"
        href="" class="mb-0 mx-3 text-white d-flex align-items-center">
        <img :src="instagram_icon" alt="instagram logo"></a>

        <a
        target="_blank" rel="noopener noreferrer"
        href="" class="mb-0 mx-3 text-white d-flex align-items-center">
        <img :src="linkedin_icon" alt="linkedin logo"></a>

  </div>
  <nav
    class="navbar navbar-expand-lg z-index-3 w-100 shadow-none navbar-transparent position-fixed mb-3 navbar-dark z-index-3 py-3 min-vw-100"
    :class="light ? 'bg-white' : 'bg-black'"
  >
    <div
      class="container-fluid px-0"
    >
      <RouterLink
        class="navbar-brand d-block d-lg-none font-weight-bolder ms-sm-3 p-0"
        to="/"
        rel="tooltip"
        title="AAP Security"
        data-placement="bottom"
      >
        <img
          :src="light ? LogoDark : LogoWhite"
          alt="logo"
          loading="lazy"
          :style="{ height: '40px'}"
        />
      </RouterLink>
      <button
        class="navbar-toggler collapsed shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#topNavigation"
        aria-controls="topNavigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div
        class="collapse navbar-collapse px-5"
        :class="light ? 'bg-white' : 'bg-black'"
        id="topNavigation"
      >
        <ul class="navbar-nav navbar-nav-hover w-100 justify-content-between">
          <li class="nav-item mx-2">
            <RouterLink
              :to="{ name: 'hiring' }"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
            >
              <span>Hiring</span>
            </RouterLink>
          </li>
          
          <li class="nav-item mx-2">
            <RouterLink
              :to="{ name: 'about-us' }"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
            >
              <span>About us</span>
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink
        class="navbar-brand d-none d-lg-block p-0 position-relative"
        :to="{ name: 'presentation' }"
        rel="tooltip"
        title="AAP Security"
        data-placement="bottom"
      >
        <img
          :src="light ? LogoDark : LogoWhite"
          alt="logo"
          loading="lazy"
          :style="{ width: '120px', position: 'absolute', left: '-30px', top: isOnFirstSlide ? '-30px' : '-10px'  }"
        />
      </RouterLink>
          </li>

          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link dropdown-toggle ps-2 d-flex cursor-pointer align-items-center"
              :class="light ? 'text-black' : 'text-white'"
              
              id="dropdownMenuPages"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>
            <div
              class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-lg p-2 border-radius-xl mt-0 mt-lg-3"
              :class="light ? 'bg-white' : 'bg-black'"
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="col-12">
                  <div class="row">
                    <div class="position-relative">
                      <RouterLink
                        :to="{ name: 'closeProtection' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Close Protection & VIP</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row d-none d-lg-block">
                <div class="col-12">
                  <div class="row">
                    <div class="position-relative">
                      <RouterLink
                        :to="{ name: 'luxuryEvent' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Luxury Event Security</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row d-none d-lg-block">
                <div class="col-12">
                  <div class="row">
                    <div class="position-relative">
                      <RouterLink
                        :to="{ name: 'residentialSecurity' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Residential security</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row d-none d-lg-block">
                <div class="col-12">
                  <div class="row">
                    <div class="position-relative">
                      <RouterLink
                        :to="{ name: 'corporate' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Corporate </span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row d-none d-lg-block">
                <div class="col-12">
                  <div class="row">
                    <div class="position-relative">
                      <RouterLink
                        :to="{ name: 'hotel' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Hotel</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-lg-none">
                <RouterLink
                  :to="{ name: 'closeProtection' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Close Protection & VIP</span>
                </RouterLink>

                <RouterLink
                  :to="{ name: 'luxuryEvent' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Luxury Event Security</span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'residentialSecurity' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Residential security</span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'corporate' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Corporate </span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'hotel' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Hotel</span>
                </RouterLink>
              </div>
            </div>
          </li>
          
          <li class="nav-item mx-2">
            <RouterLink
              :to="{ name: 'contact' }"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
            >
              <span>Contact us</span>
            </RouterLink>
          </li>

          <li class="nav-item d-md-none mx-2">
            <a class="location" target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/bg9B9fkdkcrCZgtp9">{{ address }}</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
</template>

<style>

.bg-black {
  background-color: #1C1F20 !important;
}

.text-black {
  color: #1C1F20 !important;
}

.nav-item span,
.nav-item a.nav-link {
  font-family: 'Atrament' !important;
  font-size: 24px;
  color: white;
}


.nav-item .dropdown-item:hover, 
.nav-item .dropdown-item:focus {
  background-color: #303435 !important;
}

.router-link-active {
  text-decoration: underline;
  text-decoration-color: #862B2B;
  text-underline-offset: 8px;
}

.top-40 {
  top: 40px !important;
}

@media (min-width: 550px) {
  .navbar-call-cta {
  padding: 4px 4rem;
}
}

@media (max-width: 551px) {
  .navbar-call-cta {
    padding: 4px;
  }
}

.navbar-call-cta > a.text-white {
  min-height: 34px;
}


.navbar-call-cta > a img {
  height: 24px;
}

.navbar-call-cta > a.location {
  flex: 1;
  padding-top: 4px;
  color: white;
}

.nav-item a.location {
  color: grey;
  font-size: 12px;
}

/* White navbar */

.navbar.bg-white .nav-item span,
.navbar.bg-white .nav-item a.nav-link {
  color: black;
}

.navbar.bg-white .nav-item a.nav-link:hover {
  color: var(--bs-dropdown-link-hover-bg);
}

.navbar.bg-white .navbar-toggler-icon .navbar-toggler-bar {
  background: black !important;
}

.navbar.bg-white .nav-item .dropdown-item:hover, 
.navbar.bg-white .nav-item .dropdown-item:focus {
  background-color: var(--bs-dropdown-link-hover-bg) !important;
}

</style>

