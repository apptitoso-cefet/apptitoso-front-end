import { Recipe } from './models'
import { keyToTestName } from 'jest-snapshot/build/utils'

const host = 'localhost'

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
    const retorno = await response.json()
    return retorno
}

async function getUser(id) {}
async function getCulinaryConcept(id) {}
async function getCulinaryConceptList() {}
async function getRecipeList() {
    const link = 'listRecipe'
    const data = await getData(host, link)
    const recipies = data.arrReceitas.map(recipe => {
        const {
            key,
            name,
            picture,
            authorKey,
            recipeAuthorName: authorName,
        } = receita
        return new Recipe(
            name,
            null,
            picture,
            { authorKey, authorName },
            [],
            key
        )
    })
    return recipies
}

async function getRecipe(id) {}
async function getStepsFromRecipe(recipe) {}
async function getCategory(id) {}
async function getIngredients() {}
async function getIngredientsFromRecipe(recipe) {}

async function postUser(user) {}
async function postRecipe(recipe) {}
async function postCategory(category) {}
async function postIngredient(ingredient) {}
