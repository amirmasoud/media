<template>
  <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
    <div class="px-4 py-5 sm:px-6">
      <h1>Add new user</h1>
    </div>
    <div class="px-4 py-5 sm:p-6">
      <form @submit.prevent="form.post('/dashboard/users')">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
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
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6" />
          </div>
        </div>
        <Button
          type="submit"
          form="form"
        >
          Submit
        </Button>
      </form>
    </div>
    <div class="px-4 py-4 sm:px-6" />
  </div>
</template>

<script>
import { useForm } from '@inertiajs/inertia-vue3';
import Input from "@/Components/Forms/Inputs/Input";
import Button from "@/Components/Forms/Buttons/Button";
import Card from "@/Components/Forms/Cards/Card";

export default {
  components: {
    Card,
    Button,
    Input,
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
