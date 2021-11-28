<template>
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
      <div>
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <template
            v-for="(link, index) in records.meta.links"
            :key="index"
          >
            <!-- First link -->
            <template v-if="index === 0">
              <Component
                :is="link.url ? 'Link' : 'span'"
                :href="link.url"
                :class="{ 'cursor-not-allowed': ! link.url }"
                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span class="sr-only">Previous</span>
                <chevron-left-icon class="h-5 w-5" />
              </Component>
            </template>
            <!-- Last link -->
            <template v-else-if="index === records.meta.links.length - 1">
              <Component
                :is="link.url ? 'Link' : 'span'"
                :href="link.url"
                :class="{ 'cursor-not-allowed': ! link.url }"
                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span class="sr-only">Next</span>
                <chevron-right-icon class="h-5 w-5" />
              </Component>
            </template>
            <!-- Three dots inner items -->
            <template v-else-if="! link.url">
              <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                {{ link.label }}
              </span>
            </template>
            <template v-else>
              <Link
                :href="link.url"
                :class="[link.active ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50']"
                class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                {{ link.label }}
              </Link>
            </template>
          </template>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { SortAscendingIcon, SortDescendingIcon, ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/outline";

export default {
  components: { SortAscendingIcon, SortDescendingIcon, ChevronRightIcon, ChevronLeftIcon },
  props: { records: Object }
};
</script>
