import React, { useState } from 'react'
import { BottomNavigation } from 'react-native-paper'
import HomeScreen from '../screens/HomeScreen'
import MenuNavigator from './MenuNavigator'
import SearchResultNavigator from './SearchResultNavigator'
import SavedRecipesNavigator from './SavedRecipesNavigator'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const BottomTab = props => {
    const [index, setIndex] = useState(0)

    const routes = [
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'search', title: 'Search', icon: 'search' },
        { key: 'saved', title: 'Saved', icon: 'star' },
        { key: 'menu', title: 'Menu', icon: 'info-outline' },
    ]

    _handleIndexChange = index => {
        setIndex(index)
    }

    _renderScene = BottomNavigation.SceneMap({
        home: HomeScreen,
        search: SearchResultNavigator,
        saved: SavedRecipesNavigator,
        menu: MenuNavigator,
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
