import React from 'react'
import SearchResultsScreen from '../screens/SearchResultsScreen'
import RecipeExecuteNavigator from './RecipeExecuteNavigator'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const SearchStack = createStackNavigator(
    {
        SearchResults: {
            screen: SearchResultsScreen,
            navigationOptions: () => {
                header: null
            },
        },
        RecipeExecuteNavigator: RecipeExecuteNavigator,
    },
    {
        initialRouteName: 'SearchResults',
    }
)

export default App = createAppContainer(SearchStack)
