<template>
  <Head>
    <title>Media - Users</title>
  </Head>

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
