import React from 'react'
import CulinaryConceptScreen from '../screens/CulinaryConceptScreen'
import CulinaryConceptsListScreen from '../screens/CulinaryConceptsListScreen'
import { createStackNavigator } from 'react-navigation'

const CulinaryConceptStack = createStackNavigator(
    {
        CulinaryConcept: CulinaryConceptScreen,
        CulinaryConceptsList: CulinaryConceptsListScreen,
    },
    {
        initialRouteName: 'CulinaryConceptsList',
    }
)

export default CulinaryConceptStack
