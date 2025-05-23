import { defineStore } from 'pinia'
import type { Recette } from '~/src/obj/recette'
const URL = 'http://localhost:5000/recettes'
export const useRecettesStore = defineStore('recettes', {
    state: () => ({
        recettes: [] as Recette[]
    }),
    actions: {
        async chargerRecette() {
            try {
                const data = await $fetch<Recette[]>(URL)
                this.recettes = data
            } catch (error) {
                console.error('Erreur lors du chargement des recettes :', error)
            }
        },

        async ajouterRecette(recette : Recette){
            try {
                const nouvelleRecette = await $fetch<Recette> (URL , {
                    method :'POST' ,
                    body : 'recette'
                })
                if (nouvelleRecette && nouvelleRecette.id) {
                    this.recettes.push(nouvelleRecette)
                } else {
                    console.warn('La recette a été envoyée, mais la réponse est invalide.')
                }
            }catch (error){
                console.log("Erreur store recette : POST \n" + error)
            }
        } ,

        async modifierRecette (recette : Recette){
            try{
                const recetteModifier = await $fetch<Recette>(URL+"/"+recette.id ,{
                    method : 'PUT' ,
                    body : recette
                });
                const index  = this.recettes.findIndex(r => r.id === recette.id)
                if (index !== null){
                    this.recettes[index] = recette ;
                }
            }catch (error){
                console.log("Erreur store recette : PUT \n" + error) ;
            }

        } ,

        async supprimmerRecette (idRecette :Number){
            try{
                const delrecette = await $fetch(URL+'/'+idRecette , {
                    method :'DELETE'
                })
            }catch (error){
                console.log("Erreur store recette : DELETE \n" + error) ;
            }

        }
    }
})
