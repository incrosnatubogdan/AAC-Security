<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: [String, Object],
    text: String,
    class: String,
    default: () => ({
      class: "",
    }),
  },
  value: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "md",
  },
  error: {
    type: Boolean,
    default: false,
  },
  success: {
    type: Boolean,
    default: false,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  inputClass: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  model: {
    type: String,
    default: "",
  },
});

function getClasses(size, success, error) {
  let sizeValue, isValidValue;

  sizeValue = size && `form-control-${size}`;

  if (error) {
    isValidValue = "is-invalid";
  } else if (success) {
    isValidValue = "is-valid";
  } else {
    isValidValue = "";
  }

  return `${sizeValue} ${isValidValue}`;
}
</script>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },

  mounted() {
    const { model } = toRefs(this.props);
    this.inputValue = this.fetchData(model.value);
  },

  methods: {
    fetchData(model) {
      const previousData = localStorage.getItem("contactData");

      if (previousData) {
        const parsedPrevData = JSON.parse(previousData);
        return parsedPrevData[model];
      }

      return "";
    },

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
    <label v-if="label" :class="label.class"
      >{{ typeof label == "string" ? label : label.text }}</label
    >
    <span v-if="icon" class="input-group-text"
      ><i class="fas" :class="`fa-${icon}`" aria-hidden="true"></i
    ></span>
    <input
      @input="handleInput($event.target.value, model)"
      :id="id"
      :name="model"
      :type="type"
      class="form-control"
      :ref="model"
      :class="[getClasses(size, success, error), inputClass]"
      v-model="inputValue"
      :placeholder="placeholder"
      isRequired
    />
  </div>
</template>
