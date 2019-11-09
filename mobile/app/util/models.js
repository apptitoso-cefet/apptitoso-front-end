class CulinaryConcept {
    constructor(name, description, picture = null, id = null) {
        this.name = name
        this.description = description
        this.picture = picture
        this.id = id
    }
}

class User {
    recipes = []

    constructor(email, firstName, lastName, picture, id = null) {
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
        this.picture = picture
        this.id = id
    }
}
class Recipe {
    evaluation = null
    steps = []

    constructor(name, description, picture, user, categories = [], id = null) {
        this.name = name
        this.description = description
        this.picture = picture
        this.user = user
        this.id = id
        this.categories = categories
    }
}

class Category {
    constructor(name, id) {
        this.name = name
        this.id = id
    }
}

class Step {
    constructor(recipe, description, stepOrder, timer, picture, id) {
        this.recipe = recipe
        this.description = description
        this.stepOrder = stepOrder
        this.picture = picture
        this.timer = timer
        this.id = id
    }
}

class Ingredient {
    constructor(description, id) {
        this.description = description
        this.id = id
    }
}

class RecipeIngredient {
    constructor(recipe, ingredient, unitOfMeasurement, quantity, id) {
        this.recipe = recipe
        this.ingredient = ingredient
        this.unitOfMeasurement = unitOfMeasurement
        this.quantity = quantity
        this.id = id
    }
}

class Evaluation {
    constructor(usuario, recipe, evaluatioCriterion, note, id) {
        this.usuario = usuario
        this.recipe = recipe
        this.evaluatioCriterion = evaluatioCriterion
        this.note = note
        this.id = id
    }
}
