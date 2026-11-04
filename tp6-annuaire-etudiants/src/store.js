import { reactive } from 'vue'

export const store = reactive({
  students: [
    { id: 1, nom: 'Alaoui', prenom: 'Sara', filiere: 'Génie Informatique', year: 2, email: 'sara.alaoui@ensa.ma' },
    { id: 2, nom: 'Benali', prenom: 'Youssef', filiere: 'Génie Civil', year: 3, email: 'youssef.benali@ensa.ma' },
    { id: 3, nom: 'El Idrissi', prenom: 'Khadija', filiere: 'Génie Industriel', year: 1, email: 'khadija.elidrissi@ensa.ma' },
    { id: 4, nom: 'Tazi', prenom: 'Omar', filiere: 'Génie Informatique', year: 3, email: 'omar.tazi@ensa.ma' },
    { id: 5, nom: 'Mansouri', prenom: 'Imane', filiere: 'Génie Électrique', year: 2, email: 'imane.mansouri@ensa.ma' }
  ]
})
