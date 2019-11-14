import React from 'react'
import SearchResultsScreen from '../screens/SearchResultsScreen'
import RecipeExecuteNavigator from './RecipeExecuteNavigator'
import { createStackNavigator } from 'react-navigation'

const SearchStack = createStackNavigator({
    SearchResults: SearchResultsScreen,
    RecipeExecuteNavigator: RecipeExecuteNavigator,
})

export default SearchStack
