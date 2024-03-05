<script setup lang="ts">
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../../examples/cards/blogCards/CenteredBlogCard.vue";
import { ServiceDescription } from "../../../../helpers/model";
import { PropType } from "vue"

defineProps({
  callToAction: {
    type: Object as PropType<ServiceDescription>,
    required: true,
  },
  serviceDescription: {
    type: Array as PropType<ServiceDescription[]>,
    required: true,
  },
});
</script>

<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard
              v-for="(card, i) in serviceDescription"
              :key="i"
              color="info"
              :icon="card.icon"
              :title="card.title"
              :description="card.description"
            />
            
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard
            :image="callToAction.icon"
            :title="callToAction.title"
            :description="callToAction.description"
            :action="callToAction.action"
          />
        </div>
      </div>
    </div>
  </section>
</template>
