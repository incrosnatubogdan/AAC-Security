<script setup>
defineProps({
  id: {
    type: String,
    default: "message",
  },
  rows: {
    type: Number,
    default: 4,
  },
  placeholder: {
    type: String,
    default: "",
  },
  labelClass: {
    type: String,
    default: "",
  },
  model: {
    type: String,
    default: "",
  },
});
</script>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },

  mounted() {
  },

  methods: {
    handleInput(value, model) {
      const previousData = localStorage.getItem("contactData");
      let parsedPrevData;
      if (previousData) {
        parsedPrevData = JSON.parse(previousData);

        parsedPrevData[model] = value;
      } else {
        parsedPrevData = {
          full_name: "",
          email: "",
          description: "",
        };
      }
      parsedPrevData = JSON.stringify(parsedPrevData);
      localStorage.setItem("contactData", parsedPrevData);
    },
  },
};

</script>

<template>
  <div class="input-group">
    <label :for="id" :class="labelClass"><slot /></label>
    <textarea
    @input="handleInput($event.target.value, model)"
      :name="model"
      class="form-control"
      :id="id"
      :ref="model"
      :placeholder="placeholder"
      :rows="rows"
      isRequired
    />
  </div>
</template>
