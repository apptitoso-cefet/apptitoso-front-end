import React from 'react'
import RecipePreviewScreen from '../screens/RecipePreviewScreen'
import StepsOrderEditionScreen from '../screens/StepsOrderEditionScreen'
import IndividualStepScreen from '../screens/IndividualStepScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const RecipeExecutionStack = createStackNavigator({
    RecipePreview: RecipePreviewScreen,
    StepsOrderEdition: StepsOrderEditionScreen,
    IndividualStep: IndividualStepScreen,
})

export default App = createAppContainer(RecipeExecutionStack)
