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

<script>
import Table from '@/Components/Table';

export default {
  components: { Table },
  props: {
    users: Object,
    filters: Object,
  }
};
</script>
