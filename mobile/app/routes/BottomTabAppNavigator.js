import React, { useState } from 'react'
<<<<<<< HEAD
import { BottomNavigation, Text } from 'react-native-paper'
import SearchResultsScreen from '../screens/SearchResultsScreen'
import CulinaryConceptScreen from '../screens/CulinaryConceptScreen'
import CulinaryConceptsListScreen from '../screens/CulinaryConceptsListScreen'
=======
import { BottomNavigation } from 'react-native-paper'
import HomeScreen from '../screens/HomeScreen'
import MenuScreen from '../screens/MenuScreen'
import SearchResultsScreen from '../screens/SearchResultsScreen'
import SavedRecipesScreen from '../screens/SavedRecipesScreen'
>>>>>>> babi/navigation
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const BottomTab = props => {
    const [index, setIndex] = useState(0)

    const routes = [
<<<<<<< HEAD
        { key: 'search', title: 'Search', icon: 'loupe' },
        { key: 'concept', title: 'Concept', icon: 'chef-hat' },
        { key: 'list', title: 'List', icon: 'bars' },
=======
        { key: 'home', title: 'Home', icon: 'info-outline' },
        { key: 'search', title: 'Search', icon: 'bars' },
        { key: 'saved', title: 'Saved', icon: 'info-outline' },
        { key: 'menu', title: 'Menu', icon: 'chef-hat' },
>>>>>>> babi/navigation
    ]

    _handleIndexChange = index => {
        setIndex(index)
    }

    _renderScene = BottomNavigation.SceneMap({
<<<<<<< HEAD
        search: SearchResultsScreen,
        concept: CulinaryConceptScreen,
        list: CulinaryConceptsListScreen,
=======
        home: HomeScreen,
        search: SearchResultsScreen,
        saved: SavedRecipesScreen,
        menu: MenuScreen,
>>>>>>> babi/navigation
    })

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={_handleIndexChange}
            renderScene={_renderScene}
        />
    )
}

export default BottomTab
