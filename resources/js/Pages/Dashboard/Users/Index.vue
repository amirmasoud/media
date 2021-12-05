<template>
  <Head>
    <title>Media - Users</title>
  </Head>
  <div class="mb-6">
    <div>
      <nav
        class="sm:hidden"
        aria-label="Back"
      >
        <a
          href="#"
          class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <ChevronLeftIcon
            class="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Back
        </a>
      </nav>
      <nav
        class="hidden sm:flex"
        aria-label="Breadcrumb"
      >
        <ol
          role="list"
          class="flex items-center space-x-4"
        >
          <li>
            <div class="flex">
              <a
                href="#"
                class="text-sm font-medium text-gray-500 hover:text-gray-700"
              >Dashboard</a>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <ChevronRightIcon
                class="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <a
                href="#"
                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >Users</a>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <ChevronRightIcon
                class="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <a
                href="#"
                aria-current="page"
                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >List</a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <div class="mt-2 md:flex md:items-center md:justify-between">
      <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Users
        </h2>
      </div>
      <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
        <Link
          href="/dashboard/users/create"
          class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create
        </Link>
      </div>
    </div>
  </div>
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

defineProps({ users: Object, filters: Object });
</script>
