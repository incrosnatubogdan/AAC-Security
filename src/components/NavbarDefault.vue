<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "@/assets/js/useWindowsWidth";
import Logo from "@/assets/img/logo.png";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "tel:+447951027265",
      color: "bg-gradient-success",
      label: "Call us +4479 5102 7265",
    }),
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  isOnFirstSlide: {
    type: Boolean,
  },
  light: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  darkText: {
    type: Boolean,
    default: false,
  },
});

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  return 'text-white';
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>
<template>
  <div v-if="props.isOnFirstSlide" class="navbar-call-cta d-flex bg-gradient-success">
    <span>Experience Premier Protection</span>
    <a
        href="tel:+447951027265"
        class="btn btn-sm bg-black mb-0 ms-auto text-white "
        >
        <i class="material-icons text-md mx-2">phone</i>
        Get in touch</a
      >
  </div>
  <nav
    class="navbar navbar-expand-lg  z-index-3 w-100 shadow-none navbar-transparent position-absolute mb-3 navbar-dark bg-black z-index-3 py-3"
    :class="props.isOnFirstSlide ? 'top-40' : 'top-0'"
  >
    <div
      :class="
        props.transparent || props.light || props.dark
          ? 'container'
          : 'container-fluid px-0'
      "
    >
      
      <RouterLink
        class="navbar-brand d-block d-lg-none"
        :class="
          (props.transparent || props.dark
            ? 'text-white'
            : 'font-weight-bolder ms-sm-3',
          'p-0')
        "
        to="/"
        rel="tooltip"
        title="AAP Security"
        data-placement="bottom"
      >
        <img
          :src="Logo"
          alt="logo"
          loading="lazy"
          :style="{ height: '40px' }"
        />
      </RouterLink>
      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
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
        class="collapse navbar-collapse w-100 px-5 bg-black"
        id="navigation"
      >
        <ul class="navbar-nav navbar-nav-hover w-100 justify-content-between">
          <!-- Start here -->
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
        class="navbar-brand d-none d-md-block p-0 position-relative"
        :to="{ name: 'presentation' }"
        rel="tooltip"
        title="AAP Security"
        data-placement="bottom"
      >
        <img
          :src="Logo"
          alt="logo"
          loading="lazy"
          :style="{ width: '140px', position: 'absolute', left: '-40px', top: '-30px' }"
        />
      </RouterLink>
          </li>

          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuPages"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-2 border-radius-xl mt-0 mt-lg-3 bg-black"
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
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.bg-black {
  background-color: #1C1F20 !important;
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


.navbar-call-cta  > span {
  color: white;
  font-size: 20px;
}
</style>
