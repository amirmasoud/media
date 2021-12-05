<template>
  <div class="md:flex md:items-center md:justify-between mb-6">
    <div class="flex-1 min-w-0">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Users
      </h2>
      <Input
        v-model="search"
        name="search"
        label="Search"
        type="search"
        placeholder="Search records"
      />
    </div>
  </div>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th
          v-for="(field, name) in fields"
          :key="name"
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          {{ field.label }}
        </th>
        <th
          scope="col"
          class="relative px-6 py-3"
        >
          <span class="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr
        v-for="record in records.data"
        :key="record.id"
      >
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {{ record.name }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {{ record.email }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {{ record.email_verified_at }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a
            href="#"
            class="text-indigo-600 hover:text-indigo-900"
          >Edit</a>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
    <div class="flex-1 flex justify-between sm:hidden">
      <Component
        :is="records.links.prev ? 'Link' : 'span'"
        :href="records.links.prev"
        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
      >
        Previous
      </Component>
      <Component
        :is="records.links.next ? 'Link' : 'span'"
        :href="records.links.next"
        class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
      >
        Next
      </Component>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{ records.meta.from }}</span>
          to
          <span class="font-medium">{{ records.meta.to }}</span>
          of
          <span class="font-medium">{{ records.meta.total }}</span>
          results
        </p>
      </div>
      <Paginator :links="records.meta.links" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import Paginator from '@/Components/Paginator';
import debounce from "lodash/debounce";
import Input from "@/Components/Forms/Inputs/Input";

let props = defineProps({
  records: Object,
  filters: {
    type: Object,
    default() {
      return { search: '' };
    }
  },
  endpoint: String,
  fields: Object,
});

let search = ref(props.filters.search);

watch(search, debounce(function (value) {
  Inertia.get(props.endpoint, { ...(value !== '' && { search : value }) }, { preserveState: true, replace: true });
}, 300));
</script>
