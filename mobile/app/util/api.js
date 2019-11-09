export async function postData(url = '', data = {}) {
    const response = fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/JSON' },
        body: data,
    })
    return await response.json()
}

export async function getData(url = '') {
    const response = await fetch(`${url}`)
    const retorno = await response.json()
    return retorno
}

async function getUser(id) {}
async function getCulinaryConcept(id) {}
async function getCulinaryConceptList() {}
async function getRecipe(id) {}
async function getStepsFromRecipe(recipe) {}
async function getCategory(id) {}
async function getIngredients() {}
async function getIngredientsFromRecipe(recipe) {}

async function postUser(user) {}
async function postRecipe(recipe) {}
async function postCategory(category) {}
async function postIngredient(ingredient) {}
