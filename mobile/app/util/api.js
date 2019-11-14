import { Recipe } from './models'

const host = 'http://127.0.0.1:8000'

export async function postData(url = '', data = {}) {
    const response = fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/JSON' },
        body: data,
    })
    return await response.json()
}

export async function getData(url = host, link = '') {
    const response = await fetch(`${url}/${link}`)
    console.log(response, response)
    const retorno = await response.json()
    return retorno
}

export async function getUser(id) {
    const link = 'perfil/'+id
    const data = await getData(host,link)
    return data
}

export async function getCulinaryConcept(id) {
    const link = 'fullCulinaryConcept/'+id
    const data = await getData(host, link)
    return data
}

export async function getCulinaryConceptList() {
    const link = 'listCulinaryConcept'
    const data = await getData(host, link)
    return data
}


export async function getRecipe(id) {
    const link = 'listFullRecipe/'+id
    const data = await getData(host, link)
    return data
}

export async function getIndividualStep(id, rkey) {
    const link = 'individualStep/'+id+'/'+key
    const data = await getData(host, link)
    return data
}

export async function getSavedRecipes(id) {
    const link = 'listSavedRecipe/'+id
    const data = await getData(host, link)
    return data
}



export async function getIngredients() {}
export async function getIngredientsFromRecipe(recipe) {}
export async function postUser(user) {}
export async function postRecipe(recipe) {}
export async function postCategory(category) {}
export async function postIngredient(ingredient) {}
