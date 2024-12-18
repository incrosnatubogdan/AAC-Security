<script setup>
import DefaultReviewCard from "@/components/cards/reviewCards/DefaultReviewCard.vue";
</script>
<template>
  <section class="my-3 py-3">
    <div class="container">
      <div class="row">
        <DefaultReviewCard
          name="Nick Willever"
          date="1 day ago"
          review='"This is an excellent product, the documentation is excellent and
          helped me get things done more efficiently."'
          :rating="5.0"
        />
        <DefaultReviewCard
          class="ms-md-auto"
          color="bg-gradient-success"
          name="Shailesh Kushwaha"
          date="1 week ago"
          review='"I found solution to all my design needs from Creative Tim. I
                  use them as a freelancer in my hobby projects for fun! And its
                  really affordable, very humble guys !!!"'
          :rating="5.0"
        />

        <DefaultReviewCard
          name="Samuel Kamuli"
          date="3 weeks ago"
          review='"Great product. Helped me cut the time to set up a site. I
                  used the components within instead of starting from scratch. I
                  highly recommend for developers who want to spend more time on
                  the backend!."'
          :rating="5.0"
        />
      </div>
    </div>
  </section>
</template>
