<template>
  <form @submit.prevent="submit">
    {{ form }}
    <!-- email -->
    <input
      v-model="form.email"
      type="text"
    >
    <div v-if="form.errors.email">
      {{ form.errors.email }}
    </div>
    <!-- password -->
    <input
      v-model="form.password"
      type="password"
    >
    <div v-if="form.errors.password">
      {{ form.errors.password }}
    </div>

    <input
      v-model="form.name"
      type="text"
    >
    <div v-if="form.errors.name">
      {{ form.errors.name }}
    </div>
    <!-- submit -->
    <button
      type="submit"
      :disabled="form.processing"
    >
      submit
    </button>
  </form>
</template>

<script>
import { useForm } from '@inertiajs/inertia-vue3';

export default {
  setup () {
    const form = useForm({
      email: null,
      password: null,
      name: null,
    });

    return { form };
  },
};
</script>
