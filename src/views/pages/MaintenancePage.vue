<!-- eslint-disable prettier/prettier -->
<script setup>
import logo from "@/assets/img/logo_black.png";
</script>
<template>
  <div class="text-center p-5">
    <div class="shadow-sticky-note p-5">
      <img class="logo-img mb-3" :src="logo" alt="AAP Logo" />
      <p class="text-black font-italic">
        We're currently upgrading our security systems to serve you better.
        <br />
        This maintenance will last through the festive period, but we'll be back
        shortly to keep you safe and secure.<br />
        Thank you for your patience!
      </p>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<style scoped>
.shadow-sticky-note {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.text-grey {
  color: #b9b9b9;
}

.logo-img {
  max-width: 200px;
}
</style>
