<script>
  import { Link } from 'svelte-routing'
</script>

<div class="flex items-center justify-center bg-base-100">
  <div class="text-center">
    <!-- 404 Illustration -->
    <div class="mb-8">
      <svg class="w-32 h-32 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>

    <!-- Message -->
    <h1 class="text-4xl font-bold mb-4 text-base-content">404 - Page Not Found</h1>
    <p class="text-lg text-base-content/80 mb-6">
      Oops! It seems like you've wandered off the path. The page you're looking for doesn't exist.
    </p>

    <!-- Back to Home Button -->
    <Link to="/" class="btn btn-primary">
      Back to Home
    </Link>
  </div>
</div>