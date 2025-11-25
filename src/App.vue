<template>
  <div class="app-shell">
    <header class="app-header">
      <img alt="Vue logo" class="logo" src="/vite.svg" />
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>

    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #dfe3e8;
  background-color: #f8fafc;
}

.logo {
  height: 32px;
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav a {
  color: #0f172a;
  font-weight: 600;
  text-decoration: none;
}

.nav a.router-link-active {
  color: #2563eb;
}

.app-main {
  padding: 1.5rem;
  flex: 1;
}
</style>
