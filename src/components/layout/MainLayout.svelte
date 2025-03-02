<script>
  import Sidebar from '../dashboard/Sidebar.svelte'
  import Navbar from '../dashboard/Navbar.svelte'
  import { isSidebarCollapsed } from '@/stores/store.js' // Import the store

  let collapsed = false
  $: collapsed = $isSidebarCollapsed
</script>

<div class="flex min-h-screen">
  <Sidebar bind:isCollapsed={$isSidebarCollapsed} />
  <div
    class={`flex-1 flex flex-col transition-all duration-300`}
  >
    <Navbar />
    <main class="p-6 flex-1">
      <slot />
    </main>
  </div>
</div>