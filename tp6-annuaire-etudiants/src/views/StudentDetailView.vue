<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { store } from '../store'

const route = useRoute()

// route.params.id est une chaîne ; les id du store sont des nombres.
// find() renvoie une RÉFÉRENCE vers l'objet du store : le modifier modifie la source.
const student = computed(() =>
  store.students.find(s => s.id === Number(route.params.id))
)
</script>

<template>
  <section v-if="student" class="detail">
    <router-link to="/">← Retour à la liste</router-link>
    <h1>{{ student.prenom }} {{ student.nom }}</h1>

    <label>Filière
      <input v-model="student.filiere" />
    </label>
    <label>Année
      <input v-model.number="student.year" type="number" min="1" max="5" />
    </label>
    <label>Email
      <input v-model="student.email" type="email" />
    </label>
  </section>

  <section v-else>
    <router-link to="/">← Retour à la liste</router-link>
    <h1>Étudiant introuvable</h1>
  </section>
</template>

<style scoped>
.detail { background: #fff; padding: 1.5rem; border-radius: 10px; box-shadow: 0 1px 4px rgba(0,0,0,.1); }
label { display: flex; flex-direction: column; gap: .3rem; margin-bottom: 1rem; font-weight: 600; }
a { color: #1e3a8a; }
</style>
