import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Dashboard from "./Shared/Dashboard";

createInertiaApp({
  resolve: async name => {
    const page = (await import(`./Pages/${name}`)).default;
    page.layout = page.layout || Dashboard;
    return page;
  },

  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
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
