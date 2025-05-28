export interface Recette {
    id : Number
    titre: string
    ingredients: string[]
    instructions: string
    type: 'ENTREE' | 'PLAT' | 'DESSERT'
    dateAjout : Date
    like : Number
}

