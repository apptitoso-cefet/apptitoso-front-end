import React from 'react'
import CulinaryConceptScreen from '../screens/CulinaryConceptScreen'
import CulinaryConceptListScreen from '../screens/CulinaryConceptListScreen'
import { createStackNavigator } from 'react-navigation'

const CulinaryConceptStack = createStackNavigator({
    CulinaryConcept: CulinaryConceptScreen,
    CulinaryConceptList: CulinaryConceptListScreen,
})

export default CulinaryConceptStack
