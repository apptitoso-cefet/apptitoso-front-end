import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import BottomTabAppNavigator from './BottomTabAppNavigator'

const BottomTabStack = createStackNavigator({
    BottomTab: BottomTabAppNavigator,
})

export default App = createAppContainer(BottomTabStack)
