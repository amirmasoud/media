import { createApp, h } from 'vue';
import { InertiaProgress } from '@inertiajs/progress';
import { createInertiaApp, Head, Link, InertiaApp } from "@inertiajs/inertia-vue3";
import Dashboard from "./Shared/Dashboard.vue";

createInertiaApp({
  resolve: async name => {
    const page = (await import(`./Pages/${name}`)).default;
    page.layout = page.layout || Dashboard;
    return page;
  },

  setup({ el, app, props, plugin }) {
    createApp({ render: () => h(app, props) })
      .use(plugin)
      .component("Head", Head)
      .component("Link", Link)
      .mount(el);
  },

  title: title => `${title} - Media`,
});

InertiaProgress.init({
  color: 'red',
  showSpinner: true,
});
