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

button.cta-button-services {
  width: 120px;
}
</style>