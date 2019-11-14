import React from 'react'
import RecipePreviewScreen from '../screens/RecipePreviewScreen'
import StepsOrderEditionScreen from '../screens/StepsOrderEditionScreen'
import IndividualStepScreen from '../screens/IndividualStepScreen'
import { createStackNavigator } from 'react-navigation'

const RecipeExecutionStack = createStackNavigator(
    {
        RecipePreview: RecipePreviewScreen,
        StepsOrderEdition: StepsOrderEditionScreen,
        IndividualStep: IndividualStepScreen,
    },
    {
        initialRouteName: 'RecipePreview',
    }
)

export default RecipeExecutionStack
