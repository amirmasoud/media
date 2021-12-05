<template>
  <div class="md:flex md:justify-between md:items-center mt-2">
    <div class="flex-1 min-w-0">
      <h2 class="text-2xl sm:text-3xl font-bold leading-7 text-gray-900 sm:truncate">
        Create a new user
      </h2>
    </div>
    <div class="flex flex-shrink-0 mt-4 md:mt-0 md:ml-4">
      <Link
        href="/dashboard/users"
        class="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm focus:outline-none"
      >
        Users list
      </Link>
    </div>
  </div>

  <form @submit.prevent="form.post('/dashboard/users')">
    <div class="overflow-hidden sm:rounded-md shadow">
      <div class="sm:p-6 py-5 px-4 bg-white">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-4">
            <Input
              v-model="form.name"
              label="Name"
              name="name"
              :form="form"
            />
          </div>

          <div class="col-span-6 sm:col-span-4">
            <Input
              v-model="form.email"
              label="Email"
              name="email"
              type="email"
              :form="form"
            />
          </div>

          <div class="col-span-6 sm:col-span-4">
            <Input
              v-model="form.password"
              label="Password"
              name="password"
              type="password"
              :form="form"
            />
          </div>

          <div class="col-span-6 sm:col-span-4">
            <Button
              type="submit"
              form="form"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { useForm } from '@inertiajs/inertia-vue3';
import Input from "@/Components/Forms/Inputs/Input";
import Button from "@/Components/Forms/Buttons/Button";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid';

export default {
  components: {
    Button,
    Input,
    ChevronLeftIcon,
    ChevronRightIcon
  },

  setup () {
    const form = useForm({
      email: null,
      password: null,
      name: null,
    });

    return { form };
  },
};
</script>
