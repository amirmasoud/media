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
    endpoint="/dashboard/users"
  />
</template>

<script setup>
import Table from "@/Components/Table";

defineProps({ users: Object, filters: Object });
</script>
