<script setup>
import RotatingCard from "@/components/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "@/components/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "@/components/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "@/components/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="my-3 py-3">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12 ms-auto">
          <div class="row justify-content-start mb-2">
            <DefaultInfoCard
              col="col-lg-3 col-md-6 col-sm-12 d-flex mb-2"
              title="Personal Security"
              description="Whether you need close protection, residential
security, or secure transportation, our expert team is equipped to offer top-notch
personal security services, ensuring your safety in every scenario."
            />
            <DefaultInfoCard
              col="col-lg-3 col-md-6 col-sm-12 d-flex mb-2"
              title="Corporate Security Solutions"
              description="We provide a holistic approach to corporate
security, encompassing risk assessment, surveillance, and crisis management to
protect your assets, data, and personnel."
            />
            <DefaultInfoCard
              col="col-lg-3 col-md-6 col-sm-12 d-flex mb-2"
              title="Event Security"
              description="From private gatherings to large-scale events, our security
personnel are trained to manage all aspects of event security, ensuring a safe
environment for all attendees."
            />
            <DefaultInfoCard
              col="col-lg-3 col-md-6 col-sm-12 d-flex py-1 mb-2"
              title="Close protection"
              description="Leveraging the latest in security technology,
              we offer security services for public appearances, promotional events, and other gatherings involving you."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
