<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Object,
    color: String,
    route: String,
    label: String,
    default: () => ({
      route: "tel:+447951027265",
      color: "bg-gradient-success",
      label: "Call us +4479 5102 7265",
    }),
  },
});
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>
<template>
  <div class="card">
    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
      <a :href="action.route" class="d-block blur-shadow-image">
        <img :src="image" :alt="title" class="img-fluid border-radius-lg" />
      </a>
    </div>
    <div class="card-body text-center">
      <h5 class="font-weight-bold">
        {{ title }}
      </h5>
      <p class="mb-0">
        {{ description }}
      </p>
      <button type="button" class="btn btn-sm mb-0 mt-3 bg-gradient-success">
        <a :href="action.route">{{ action.label }}</a>
      </button>
    </div>
  </div>
</template>
