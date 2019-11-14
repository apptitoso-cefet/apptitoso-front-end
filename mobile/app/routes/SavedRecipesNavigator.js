import React from 'react'
import SavedRecipesScreen from '../screens/SavedRecipesScreen'
import RecipeExecuteNavigator from './RecipeExecuteNavigator'
import { createStackNavigator } from 'react-navigation'

const SavedStack = createStackNavigator({
    SavedRecipes: SavedRecipesScreen,
    RecipeExecuteNavigator: RecipeExecuteNavigator,
})

export default SavedStack
