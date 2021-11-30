<template>
  <Head>
    <title>Media - Users</title>
  </Head>

  <h1 class="text-2xl font-semibold text-gray-900 mb-6">
    Users
  </h1>

  <Table
    :records="users"
    :filters="filters"
  />
</template>

<script lang="ts">
import Table from "@/Components/Table.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Table },
  props: {
    users: {
      type: Object,
      required: true,
    },
    filters: {
      type: Object,
      required: true,
    },
  }
});
</script>
