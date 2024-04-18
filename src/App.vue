<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <router-view />
</template>

<style>
.vci--right-label {
  top: 40% !important;
}

.vci--container {
  border-radius: 12px;
}

.c-white {
  color: #fff !important;
}

.services-card {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  border-radius: 8px;
  background-color: #862B2B;
  color: white;
  padding: 20px 10px 20px 20px;
}

.services-card > h5 {
  color: white;
}

button.btn.cta-button-services,
button.btn.cta-button-services:hover {
  width: 120px;
  background: #862B2B;
  background-color: #862B2B;
}

.fp-watermark {
  display: none;
}

@media (max-width: 991.98px) {
  .navbar-toggler + .navbar-collapse .dropdown.nav-item .dropdown-menu {
    overflow: hidden;
  }
}
</style>