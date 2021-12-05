<template>
  <Head>
    <title>Media - Users</title>
  </Head>

  <Table
    :records="users"
    :filters="filters"
    endpoint="/dashboard/users"
    :fields="{
      name: {
        label: 'Name',
      },
      email: {
        label: 'Email',
      },
      email_verified_at: {
        label: 'Email Verified At',
      },
    }"
  />
</template>

<script setup>
import Table from "@/Components/Table";

defineProps({ users: Object, filters: Object });
</script>
