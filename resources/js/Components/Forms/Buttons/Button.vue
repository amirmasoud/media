<template>
  <button
    :type="type"
    :disabled="form.processing"
    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-wait"
  >
    <Spinner
      v-if="form.processing"
      class="h-4 w-4"
    />
    <slot />
  </button>
</template>

<script setup>
import Spinner from "@/Components/Icons/Spinner";

defineProps({
  type: {
    type: String,
    default: 'button',
  },
  form: {
    type: Object,
    default() {
      return { processing: false };
    }
  }
});
</script>
