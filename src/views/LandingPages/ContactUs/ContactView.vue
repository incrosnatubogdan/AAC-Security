<script setup>
import { onMounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";

//image
import image from "@/assets/img/contact/hero.svg";

//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
import MaterialAlert from "@/components/MaterialAlert.vue";
onMounted(async () => {
  setMaterialInput();
});
</script>

<script>
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      emailSend: {
        status: null,
        description: "",
      },
    };
  },
  methods: {
    setEmailStatus(status, description) {
      this.emailSend = {
        status,
        description,
      };

      setTimeout(() => {
        this.emailSend = {
          status: null,
          description: "",
        };
      }, 3000);
    },
    sendEmail() {
      event.preventDefault();
      const previousData = localStorage.getItem("contactData");
      const lastContactSentTime = localStorage.getItem("lastContactSentTime");
      let newSeconds = null;

      if (lastContactSentTime) {
        newSeconds =
          (new Date().getTime() - new Date(lastContactSentTime).getTime()) /
          60000;

        if (newSeconds > 5) {
          newSeconds = null;
        }
      }

      if (this.$refs.form && previousData) {
        switch (true) {
          case !JSON.parse(previousData).description.length:
            this.setEmailStatus("danger", "Invalid description");
            return;

          case !JSON.parse(previousData).email.length:
            this.setEmailStatus("danger", "Invalid email");
            return;

          case !JSON.parse(previousData).full_name.length:
            this.setEmailStatus("danger", "Invalid Full Name");
            return;

          case newSeconds !== null:
            console.log(newSeconds, "newSeconds");
            this.setEmailStatus(
              "warning",
              "We have received your previous request, and we'll get back to you"
            );
            return;
          default:
            console.log(newSeconds, "newSeconds");
            localStorage.setItem("lastContactSentTime", new Date());

            emailjs
              .sendForm(
                import.meta.env.VITE_GOOGLE_EMAIL,
                import.meta.env.VITE_TEMPLATE,
                this.$refs.form,
                import.meta.env.VITE_SDK
              )
              .then((result) => {
                this.emailSend = {
                  status: "success",
                  description:
                    "We have received your email and will get back to you!",
                };
              });
        }
      } else {
        this.setEmailStatus("danger", "Missing fields");
      }
    },
  },
};
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar :sticky="true" />
      </div>
    </div>
  </div>
  <section>
    <div class="page-header min-vh-100">
      <div class="container">
        <div class="row">
          <div
            class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column"
          >
            <div
              class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
              :style="{
                backgroundImage: `url(${image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPositionY: '50%',
              }"
              loading="lazy"
            ></div>
          </div>
          <div
            class="mt-8 col-xl-5 col-lg-6 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5"
          >
            <div
              class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5"
            >
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent"
              >
                <div
                  class="bg-gradient-success shadow-success border-radius-lg p-3"
                >
                  <h3 class="text-white text-success mb-0">Contact us</h3>
                </div>
              </div>
              <div class="card-body">
                <p class="pb-3">
                  For further questions, including partnership opportunities,
                  please email hello@creative-tim.com or contact using our
                  contact form.
                </p>
                <form
                  id="contact-form"
                  ref="form"
                  method="post"
                  autocomplete="off"
                >
                  <div class="card-body p-0 my-3">
                    <div class="row">
                      <div class="col-md-6">
                        <MaterialInput
                          model="full_name"
                          class="input-group-static mb-4"
                          type="text"
                          label="Full Name"
                          placeholder="Full Name"
                        />
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="email"
                          model="email"
                          label="Email"
                          placeholder="hello@creative-tim.com"
                        />
                      </div>
                    </div>
                    <div class="form-group mb-0 mt-md-0 mt-4">
                      <MaterialTextArea
                        id="message"
                        class="input-group-static mb-4"
                        :rows="6"
                        model="description"
                        placeholder="Describe your problem in at least 250 characters"
                        >How can we help you?</MaterialTextArea
                      >
                    </div>
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <MaterialButton
                          @click="sendEmail()"
                          variant="gradient"
                          color="success"
                          class="mt-3 mb-0"
                          >Send Message</MaterialButton
                        >
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <MaterialAlert
    v-if="emailSend.status !== null"
    @click="setEmailStatus(null, '')"
    class="contact-alert"
    :color="emailSend.status"
    fontWeight="bold"
    >{{ emailSend.description }}</MaterialAlert
  >
</template>

<style scoped>
.contact-alert {
  position: fixed;
  bottom: 0;
  z-index: 51;
  right: 0;
  cursor: pointer;
}
</style>
