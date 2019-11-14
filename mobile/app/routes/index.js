import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import BottomTabAppNavigator from './BottomTabAppNavigator'
import RecipeExecuteNavigator from './RecipeExecuteNavigator'

const BottomTabStack = createStackNavigator({
    BottomTab: BottomTabAppNavigator,
    RecipeExecute: RecipeExecuteNavigator,
})

export default App = createAppContainer(BottomTabStack)
