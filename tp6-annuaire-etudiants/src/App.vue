<script setup>
</script>

<template>
  <header class="topbar">
    <router-link to="/" class="brand">🎓 Annuaire ENSA Safi</router-link>
  </header>
  <main class="container">
    <router-view />
  </main>
</template>

<style>
* { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, sans-serif; background: #f4f6fa; color: #1f2937; }
.topbar { background: #1e3a8a; padding: 1rem 2rem; }
.brand { color: #fff; font-weight: 700; font-size: 1.2rem; text-decoration: none; }
.container { max-width: 900px; margin: 1.5rem auto; padding: 0 1rem; }
input, select, button { padding: .5rem .7rem; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 1rem; }
button { background: #1e3a8a; color: #fff; border: none; cursor: pointer; }
button:hover { background: #1d4ed8; }
</style>
