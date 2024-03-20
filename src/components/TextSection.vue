<script setup>
defineProps({
  isFull: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
});
</script>
<template>
  <div class="container mt-5">
    <div
      class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
      :style="{
        backgroundImage:
          'url(https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg)'
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark"></span>
      <div class="container">
        <div class="row">
          <div :class="isFull ? 'col-lg-10 ms-lg-1' : 'col-lg-8 ms-lg-4'">
            <h1 v-if="title" class="text-white">{{ title }}</h1>
            <p class="lead text-white opacity-8">
              {{ description }}
            </p>
            <a
              href="/contact"
              class="text-white icon-move-right"
            >
              Contact us
              <i class="fas fa-arrow-right text-sm ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
