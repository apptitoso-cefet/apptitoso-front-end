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
        { key: 'home', title: 'Home', icon: 'info-outline' },
        { key: 'search', title: 'Search', icon: 'bars' },
        { key: 'saved', title: 'Saved', icon: 'info-outline' },
        { key: 'menu', title: 'Menu', icon: 'chef-hat' },
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
