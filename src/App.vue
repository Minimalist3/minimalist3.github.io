<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="p-3 bg-dark mb-auto">
    <nav class="navbar navbar-expand navbar-dark">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">
          <img src="./assets/logo.svg" alt="" width="30" height="30">
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavBar" aria-controls="mainNavBar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNavBar">
          <div class="navbar-nav mx-auto">
            <RouterLink class="nav-link" to="/">About</RouterLink>
            <RouterLink class="nav-link" to="/projects">Projects</RouterLink>
            <a class="nav-link" href="#" @click="sendMail()">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <main class="flex-shrink-0">
    <div class="container">
      <RouterView />
    </div>
  </main>

  <footer class="footer mt-auto py-3 bg-light">
    <div class="container">
      <span class="text-muted">Copyright &#169; 2023</span>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    sendMail() {
      window.open("mailto:contact@granblue.party", "_parent");
    }
  }
}
</script>