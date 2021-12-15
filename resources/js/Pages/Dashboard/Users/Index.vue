<template>
  <Head>
    <title>Media - Users</title>
  </Head>
  <DashboardHeading
    class="mb-6"
    :items="[
      {
        link: '/dashboard',
        label: 'Dashboard',
      },
      {
        link: '/dashboard/users',
        label: 'Users',
      },
      {
        link: '#',
        label: 'List'
      }
    ]"
    header="Users"
    :buttons="[
      {
        link: '/dashboard/users/create',
        label: 'Create a New User',
      },
    ]"
  />
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
    :actions="{
      edit: {
        label: 'Edit',
      },
      delete: {
        label: 'Delete',
      }
    }"
  />
</template>

<script setup>
import Table from "@/Components/Table";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid';
import DashboardHeading from "@/Components/DashboardHeading";

defineProps({ users: Object, filters: Object });
</script>
