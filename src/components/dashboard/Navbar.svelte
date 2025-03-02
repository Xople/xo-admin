<script>
  import { Link } from "svelte-routing";
  import { isSidebarCollapsed } from '@/stores/store.js' // Import the store

  import { IconBell, IconMenu2 } from "@tabler/icons-svelte"

  let user = {
    name: "John Doe",
    avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
  };

  function toggleSidebar() {
    $isSidebarCollapsed = !$isSidebarCollapsed;
  }
</script>

<nav class="navbar bg-base-100 sticky top-0 left-0 right-0 z-50  border-b border-base-200">
  <!-- Left Side: Hamburger (for mobile) and Brand -->
  <div class="navbar-start flex items-center gap-2">
    <!-- Hamburger Toggle (visible on small screens) -->
    <button
      class="btn btn-ghost btn-circle"
      on:click={toggleSidebar}
    >
      <IconMenu2 size="20" stroke={2} />
    </button>
  </div>

  <!-- Right Side: Notifications and User Dropdown -->
  <div class="navbar-end flex items-center gap-2">
    <!-- Notification Bell (TailAdmin feature) -->
    <button class="btn btn-ghost btn-circle">
      <IconBell size="20" stroke={2} />
      <span class="badge badge-xs badge-primary absolute top-1 right-1">3</span>
    </button>

    <!-- User Dropdown -->
    <details class="dropdown">
      <summary class="btn btn-ghost btn-circle avatar">
        <div class="w-8 rounded-full">
          <img src={user.avatar} alt="User avatar" />
        </div>
      </summary>
      <ul
        class="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52 absolute right-0"
      >
        <li>
          <Link to="/profile" class="justify-between">
            Profile
            <span class="badge">New</span>
          </Link>
        </li>
        <li><Link to="/settings">Settings</Link></li>
        <li><a href="#logout">Logout</a></li>
      </ul>
    </details>
  </div>
</nav>