<template>
  <div class="md:flex md:items-center md:justify-between mb-6">
    <div class="flex-1 min-w-0">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Users
      </h2>
    </div>
  </div>



  <div class="">
    <!-- Mobile filter dialog -->
    <TransitionRoot
      as="template"
      :show="open"
    >
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 sm:hidden"
        @close="open = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="translate-x-full"
        >
          <div class="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
            <div class="px-4 flex items-center justify-between">
              <h2 class="text-lg font-medium text-gray-900">
                Filters
              </h2>
              <button
                type="button"
                class="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                @click="open = false"
              >
                <span class="sr-only">Close menu</span>
                <XIcon
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </button>
            </div>

            <!-- Filters -->
            <form class="mt-4">
              <Disclosure
                v-for="section in filters"
                :key="section.name"
                v-slot="{ open }"
                as="div"
                class="border-t border-gray-200 px-4 py-6"
              >
                <h3 class="-mx-2 -my-3 flow-root">
                  <DisclosureButton class="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400">
                    <span class="font-medium text-gray-900">
                      {{ section.name }}
                    </span>
                    <span class="ml-6 flex items-center">
                      <ChevronDownIcon
                        :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform']"
                        aria-hidden="true"
                      />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel class="pt-6">
                  <div class="space-y-6">
                    <div
                      v-for="(option, optionIdx) in section.options"
                      :key="option.value"
                      class="flex items-center"
                    >
                      <input
                        :id="`filter-mobile-${section.id}-${optionIdx}`"
                        :name="`${section.id}[]`"
                        :value="option.value"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      >
                      <label
                        :for="`filter-mobile-${section.id}-${optionIdx}`"
                        class="ml-3 text-sm text-gray-500"
                      >
                        {{ option.label }}
                      </label>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </form>
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>

    <div class="max-w-3xl mx-auto px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
      <section
        aria-labelledby="filter-heading"
        class="py-6"
      >
        <h2
          id="filter-heading"
          class="sr-only"
        >
          Product filters
        </h2>

        <div class="flex items-center justify-between">
          <Menu
            as="div"
            class="relative z-10 inline-block text-left"
          >
            <div>
              <MenuButton class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <ChevronDownIcon
                  class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems class="origin-top-left absolute left-0 z-10 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="py-1">
                  <MenuItem
                    v-for="option in sortOptions"
                    :key="option"
                    v-slot="{ active }"
                  >
                    <a
                      :href="option.href"
                      :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm font-medium text-gray-900']"
                    >
                      {{ option.name }}
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>

          <button
            type="button"
            class="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
            @click="open = true"
          >
            Filters
          </button>

          <PopoverGroup class="hidden sm:flex sm:items-baseline sm:space-x-8">
            <Popover
              v-for="(section, sectionIdx) in filters"
              id="desktop-menu"
              :key="section.name"
              as="div"
              class="relative z-10 inline-block text-left"
            >
              <div>
                <PopoverButton class="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  <span>{{ section.name }}</span>
                  <span
                    v-if="(sectionIdx === 0)"
                    class="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums"
                  >1</span>
                  <ChevronDownIcon
                    class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </PopoverButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <PopoverPanel class="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <form class="space-y-4">
                    <div
                      v-for="(option, optionIdx) in section.options"
                      :key="option.value"
                      class="flex items-center"
                    >
                      <input
                        :id="`filter-${section.id}-${optionIdx}`"
                        :name="`${section.id}[]`"
                        :value="option.value"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      >
                      <label
                        :for="`filter-${section.id}-${optionIdx}`"
                        class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        {{ option.label }}
                      </label>
                    </div>
                  </form>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
        </div>
      </section>
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

<script setup>
import { ref, watch } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import Paginator from '@/Components/Paginator';
import debounce from "lodash/debounce";
import Input from "@/Components/Forms/Inputs/Input";
import Button from "@/Components/Forms/Buttons/Button";

import {
  Dialog,
  DialogOverlay,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { XIcon } from '@heroicons/vue/outline';
import { ChevronDownIcon } from '@heroicons/vue/solid';

const sortOptions = [
  { name: 'Most Popular', href: '#' },
  { name: 'Best Rating', href: '#' },
  { name: 'Newest', href: '#' },
];
const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'tees', label: 'Tees' },
      { value: 'crewnecks', label: 'Crewnecks' },
      { value: 'hats', label: 'Hats' },
    ],
  },
  {
    id: 'brand',
    name: 'Brand',
    options: [
      { value: 'clothing-company', label: 'Clothing Company' },
      { value: 'fashion-inc', label: 'Fashion Inc.' },
      { value: 'shoes-n-more', label: "Shoes 'n More" },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'black', label: 'Black' },
      { value: 'grey', label: 'Grey' },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
    ],
  },
];

let props = defineProps({
  records: Object,
  filters: Object,
  endpoint: String,
});

let search = ref(props.filters.search);
const open = ref(false);

watch(search, debounce(function (value) {
  Inertia.get(props.endpoint, { ...(value !== '' && { search : value }) }, { preserveState: true, replace: true });
}, 300));
</script>
