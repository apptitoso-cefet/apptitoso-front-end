<<<<<<< HEAD
import HomeScreen from '../screens/HomeScreen'
=======
import React from 'react'
>>>>>>> babi/navigation
import { createStackNavigator, createAppContainer } from 'react-navigation'
import BottomTabAppNavigator from './BottomTabAppNavigator'
import RecipeExecuteNavigator from './RecipeExecuteNavigator'

<<<<<<< HEAD
const LoginStack = createStackNavigator({
    Home: HomeScreen,
=======
const BottomTabStack = createStackNavigator({
    BottomTab: BottomTabAppNavigator,
    RecipeExecute: RecipeExecuteNavigator,
>>>>>>> babi/navigation
})

export default App = createAppContainer(BottomTabStack)
