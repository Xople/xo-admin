<script lang="ts">
  let count = $state<number>(0)
  const increment = (): void => {
    count += 1
  }
</script>

<button class="btn btn-accent btn-outline" onclick={increment}>
  count is {count}
</button>
