import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import BottomTabAppNavigator from './BottomTabAppNavigator'
import RecipeExecuteNavigator from './RecipeExecuteNavigator'
import HomeScreen from '../screens/HomeScreen'

const BottomTabStack = createStackNavigator(
    {
        Home: HomeScreen,
        BottomTab: BottomTabAppNavigator,
        RecipeExecute: RecipeExecuteNavigator,
    },
    {
        initialRouteName: 'Home',
    }
)

export default App = createAppContainer(BottomTabStack)
