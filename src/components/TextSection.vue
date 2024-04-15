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
          <div class="col-lg-12">
            <h1 v-if="title" class="text-white">Why choose us?</h1>
            <!-- <p class="lead text-white opacity-8">
              {{ description }}
            </p> -->
            <div class="d-flex mt-5">
              <i
                class="material-icons services-icon"
                >dashboard</i
              >
              <span class="c-white">
                <h3 class="c-white">Commitment to Excellence</h3>
                The company is committed to delivering high-quality security services with a focus on skill, dedication, and forward-thinking strategies.
              </span>
            </div>

            <div class="d-flex mt-5">
              <i
                class="material-icons services-icon"
                >dashboard</i
              >
              <span class="c-white">
                <h3 class="c-white">Comprehensive Security Approach</h3>
                Emphasizes a holistic strategy in security, integrating knowledge and progression to meet evolving challenges.
              </span>
            </div>

            <div class="d-flex my-5">
              <i
                class="material-icons services-icon"
                >dashboard</i
              >
              <span class="c-white">
                <h3 class="c-white">Leadership and Expertise</h3>
                Founded by Adrien and Arina, AAP Security is led by a blend of extensive security experience and educational insight, ensuring top-tier talent and innovative solutions.
              </span>
            </div>
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

<style>
.material-icons.services-icon {
  margin-right: 30px;
  font-size: 80px;
  text-align: center;
  color: #862B2B;
}
</style>