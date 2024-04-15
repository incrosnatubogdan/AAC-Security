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
        <!-- <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4"> -->
          <!-- <RotatingCard>
            <RotatingCardFront
              image="https://images.pexels.com/photos/1427581/pexels-photo-1427581.jpeg?cs=srgb&dl=pexels-samuel-w%C3%B6lfl-1427581.jpg&fm=jpg"
              icon="touch_app"
              title="Welcome to </br > AAP Security"
              description="Find out how you can secure your business and events"
            />

            <RotatingCardBack
              image="https://images.pexels.com/photos/9647534/pexels-photo-9647534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Customized Solutions"
              description="We offer comprehensive security solutions tailored to meet your specific needs and concerns."
              :action="[
                {
                  route: '/contact',
                  label: 'Contact us',
                },
              ]"
            />
          </RotatingCard> -->
        <!-- </div> -->
        <div class="col-lg-12 ms-auto">
          <div class="row justify-content-start mb-2">
            <DefaultInfoCard
              col="col-lg-3 col-md-6 col-sm-12 d-flex"
              title="Personal Security"
              description="Whether you need close protection, residential
security, or secure transportation, our expert team is equipped to offer top-notch
personal security services, ensuring your safety in every scenario."
            />
            <DefaultInfoCard
              col="col-lg-3 col-md-6 col-sm-12 d-flex"
              title="Corporate Security Solutions"
              description="We provide a holistic approach to corporate
security, encompassing risk assessment, surveillance, and crisis management to
protect your assets, data, and personnel."
            />
            <DefaultInfoCard
              col="col-lg-3 col-md-6 col-sm-12 d-flex"
              title="Event Security"
              description="From private gatherings to large-scale events, our security
personnel are trained to manage all aspects of event security, ensuring a safe
environment for all attendees."
            />
            <DefaultInfoCard
              col="col-lg-3 col-md-6 col-sm-12 d-flex py-1"
              title="Technology-Driven Solutions"
              description="Leveraging the latest in security technology,
we offer advanced surveillance, alarm systems, and access control options to fortify
your security infrastructure."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
