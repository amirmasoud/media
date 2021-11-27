import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Dashboard from "./Shared/Dashboard";

createInertiaApp({
  resolve: name => {
    const page = require(`./Pages/${name}`).default;
    page.layout = page.layout || Dashboard;
    return page;
  },

  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
});

InertiaProgress.init({
  color: 'purple',
  showSpinner: true,
});
