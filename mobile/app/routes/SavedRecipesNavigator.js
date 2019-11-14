import React from 'react'
import SavedRecipesScreen from '../screens/SavedRecipesScreen'
import RecipeExecuteNavigator from './RecipeExecuteNavigator'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const SavedStack = createStackNavigator(
    {
        SavedRecipes: SavedRecipesScreen,
        RecipeExecuteNavigator: RecipeExecuteNavigator,
    },
    {
        initialRouteName: 'SavedRecipes',
    }
)

export default App = createAppContainer(SavedStack)
