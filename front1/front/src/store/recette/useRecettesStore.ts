import { defineStore } from 'pinia'
import type { Recette } from '~/src/obj/recette'

export const useRecettesStore = defineStore('recettes', {
    state: () => ({
        recettes: [] as Recette[]
    }),
    actions: {
        async chargerRecette() {
            try {
                const data = await $fetch<Recette[]>('http://localhost:5000/recettes')
                this.recettes = data
            } catch (error) {
                console.error('Erreur lors du chargement des recettes :', error)
            }
        },

        async ajouterRecette(recette : Recette){
            try{

            }catch (){

            }
        }
    }
})
