<script setup>
defineProps({
  student: { type: Object, required: true }
})
</script>

<template>
  <div class="card">
    <h3>{{ student.prenom }} {{ student.nom }}</h3>
    <p>{{ student.filiere }} – {{ student.year }}<sup>e</sup> année</p>
  </div>
</template>

<style scoped>
.card { background: #fff; border-radius: 10px; padding: 1rem; box-shadow: 0 1px 4px rgba(0,0,0,.1); transition: transform .15s; }
.card:hover { transform: translateY(-2px); }
h3 { margin: 0 0 .4rem; }
p { margin: 0; color: #475569; }
</style>
