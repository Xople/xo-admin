<!-- Sidebar.svelte -->
<script>
  import { Link } from "svelte-routing"
  export let isCollapsed // Bindable prop synced with store
  // Import Tabler Icons
  import { IconHome, IconDashboard } from "@tabler/icons-svelte"

  function toggleSidebar() {
    isCollapsed = !isCollapsed
  }
</script>

<!-- <img
  src="https://demo.tailadmin.com/src/images/logo/logo.svg"
  alt="Logo"
  class="h-8"
/> -->
<div
  class={`${isCollapsed ? "w-16" : "w-64"} transition-all duration-300 bg-base  border-r border-base-200`}
>
  <div class="flex flex-col h-full">
    <!-- Header -->
    <div class="p-4 flex items-center justify-between">
      {#if !isCollapsed}
        LOGO IMAGE
      {:else}
        LOGO
      {/if}
      <button
        class="btn btn-ghost btn-circle absolute right-2 top-2"
        on:click={toggleSidebar}
      >
        {#if isCollapsed}
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        {:else}
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        {/if}
      </button>
    </div>

    <!-- Menu Items with Tabler Icons -->
    <ul class={`menu flex-1 text-base-content w-auto`}>
      <li class={`${isCollapsed ? "justify-center" : ""}`}>
        <Link
          to="/"
          class={`flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-base-300 ${isCollapsed ? "justify-center" : ""}`}
        >
          <IconHome size="20" stroke={2} />
          {#if !isCollapsed}
            <span>Home</span>
          {/if}
        </Link>
      </li>
      <li class={`${isCollapsed ? "justify-center" : ""}`}>
        <Link
          to="/dashboard"
          class={`flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-base-300 ${isCollapsed ? "justify-center" : ""}`}
        >
          <IconDashboard size="20" stroke={2} />
          {#if !isCollapsed}
            <span>Dashboard</span>
          {/if}
        </Link>
      </li>
    </ul>

    <!-- Profile Section -->
    {#if !isCollapsed}
      <div class="p-4 border-t border-base-300">
        <div class="flex items-center gap-3">
          <div class="avatar">
            <div class="w-10 rounded-full">
              <img
                src="https://demo.tailadmin.com/assets/user-1-BKjYvBku.jpg"
                alt="User"
              />
            </div>
          </div>
          <div>
            <p class="font-medium">John Doe</p>
            <p class="text-sm text-base-content/70">john@example.com</p>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .drawer-side {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
  }
</style>