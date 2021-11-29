<template>
  <div class="max-w-xl my-6">
    <label
      for="search"
      class="block text-sm font-medium text-gray-700"
    >Quick search</label>
    <div class="mt-1 relative flex items-center">
      <input
        id="search"
        v-model.trim="search"
        type="text"
        name="search"
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
      >
      <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
        <kbd class="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
          ⌘K
        </kbd>
      </div>
    </div>
  </div>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Name
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Email
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Email Verified At
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
        v-for="user in records.data"
        :key="user.id"
      >
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {{ user.name }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {{ user.email }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {{ user.email_verified_at }}
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

<script lang="ts">
import Paginator from "./Paginator.vue";
import { defineComponent } from "@vue/runtime-core";
import { Vue } from "vue-class-component";

@Component
export default class Table extends Vue {
  components: { Paginator }

  props: {
    records: Object,
    filters: Object,
  }
}

// export default defineComponent({
//   components: { Paginator },
//   props: {
//     records: Object,
//     filters: Object,
//   },
// });

// import { ref, watch } from "vue";
// import { Inertia } from "@inertiajs/inertia";
//
// let props = defineProps({
//   records: Object,
//   filters: Object
// });
//
// let search = ref(props.filters.search);
//
// watch(search, value => {
//   Inertia.get('/dashboard/users', { search: value }, {
//     preserveState: true,
//     replace: true
//   });
// });
</script>
