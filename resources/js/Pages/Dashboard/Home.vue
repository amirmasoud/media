<template>
  <Head>
    <title>Media - Home</title>
  </Head>
  <h1 class="text-2xl font-semibold text-gray-900">
    Home
  </h1>

  <div class="flex flex-col py-4">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <Table :records="users" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table from "../../Components/Table";

export default {
  components: { Table },
  props: { users: Object }
};
</script>
