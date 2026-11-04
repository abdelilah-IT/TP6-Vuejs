<script setup>
import { ref, computed } from 'vue'
import { store } from '../store'
import StudentCard from '../components/StudentCard.vue'

// Formulaire d'ajout
const nom = ref('')
const prenom = ref('')
const filiere = ref('')
const year = ref(1)
const email = ref('')

// Recherche et tri
const recherche = ref('')
const tri = ref('nom')

function ajouterEtudiant() {
  if (!nom.value.trim() || !prenom.value.trim() || !filiere.value.trim()) return

  const nextId = store.students.reduce((max, s) => Math.max(max, s.id), 0) + 1
  store.students.push({
    id: nextId,
    nom: nom.value.trim(),
    prenom: prenom.value.trim(),
    filiere: filiere.value.trim(),
    year: Number(year.value),
    email: email.value.trim()
  })

  nom.value = ''
  prenom.value = ''
  filiere.value = ''
  year.value = 1
  email.value = ''
}

// Filtrer puis trier (filter() renvoie déjà un nouveau tableau : le store n'est pas muté)
const etudiantsAffiches = computed(() => {
  const q = recherche.value.trim().toLowerCase()
  const filtres = store.students.filter(s =>
    s.nom.toLowerCase().includes(q) || s.prenom.toLowerCase().includes(q)
  )
  return filtres.sort((a, b) => a[tri.value].localeCompare(b[tri.value]))
})
</script>

<template>
  <section>
    <h1>Annuaire des étudiants</h1>

    <form class="form" @submit.prevent="ajouterEtudiant">
      <input v-model="nom" placeholder="Nom" />
      <input v-model="prenom" placeholder="Prénom" />
      <input v-model="filiere" placeholder="Filière" />
      <input v-model.number="year" type="number" min="1" max="5" placeholder="Année" />
      <input v-model="email" type="email" placeholder="Email" />
      <button type="submit">Ajouter</button>
    </form>

    <div class="toolbar">
      <input v-model="recherche" placeholder="Rechercher par nom ou prénom…" />
      <select v-model="tri">
        <option value="nom">Trier par nom</option>
        <option value="filiere">Trier par filière</option>
      </select>
    </div>

    <p v-if="etudiantsAffiches.length === 0">Aucun étudiant trouvé.</p>

    <div class="grid">
      <router-link
        v-for="s in etudiantsAffiches"
        :key="s.id"
        :to="`/etudiant/${s.id}`"
        class="link"
      >
        <StudentCard :student="s" />
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.form, .toolbar { display: flex; flex-wrap: wrap; gap: .5rem; margin-bottom: 1rem; }
.toolbar input { flex: 1; }
.form input[type="number"] { width: 90px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem; }
.link { text-decoration: none; color: inherit; }
</style>
