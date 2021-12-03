<template>
  <label
    :for="id"
    class="block text-sm font-medium text-gray-700"
  >{{ label }}</label>
  <div class="mt-1">
    <input
      :id="id"
      :value="modelValue"
      :type="type"
      :name="name"
      class="shadow-sm block w-full sm:text-sm rounded-md"
      :class="[form.errors[name] ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 ']"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
  <p
    v-if="form.errors[name]"
    id="email-error"
    class="mt-2 text-sm text-red-600"
  >
    {{ form.errors[name] }}
  </p>
</template>

<script setup>
defineEmits(['update:modelValue']);

defineProps({
  name: String,
  label: String,
  modelValue: String,
  id: {
    type: String,
    default: (props) => props.name,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  form: {
    type: Object,
    default() {
      return { errors: {} };
    }
  }
});
</script>
