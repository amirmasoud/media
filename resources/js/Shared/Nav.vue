<template>
  <nav>
    <ul>
      <li>
        <Link
          href="/"
          :class="{'font-bold underline': $page.component === 'Home'}"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/users"
          :class="{'font-bold underline': $page.component === 'Users'}"
        >
          Users
        </Link>
      </li>
      <li>
        <Link
          href="/settings"
          :class="{'font-bold underline': $page.component === 'Settings'}"
        >
          Settings
        </Link>
      </li>
      <li>
        <Link
          href="/logout"
          method="post"
          as="button"
          preserve-scroll
          :class="{'text-bold text-underline': true}"
        >
          Log out
        </Link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';

export default {
  components: { Link },
};
</script>
