<script>
  import { Router, Route } from 'svelte-routing'
  import MainLayout from "./components/layout/MainLayout.svelte"

  import NotFound from './pages/NotFound.svelte'
  import Home from './pages/Home.svelte'
</script>

<Router>
  <MainLayout>
    <Route path="/" component="{Home}" />
    <Route path="*" component="{NotFound}" />
  </MainLayout>
</Router>