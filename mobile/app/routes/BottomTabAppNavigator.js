import React, { useState } from 'react'
import { BottomNavigation, Text } from 'react-native-paper'
import HomeScreen from '../screens/HomeScreen'
import MenuScreen from '../screens/MenuScreen'
import SearchResultsScreen from '../screens/SearchResultsScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default BottomTab = props => {
    const [index, setIndex] = useState(0)

    const routes = [
        { key: 'home', title: 'Home', icon: 'info-outline' },
        { key: 'search', title: 'Search', icon: 'bars' },
        { key: 'menu', title: 'Menu', icon: 'chef-hat' },
    ]

    _handleIndexChange = index => {
        setIndex(index)
    }

    _renderScene = BottomNavigation.SceneMap({
        home: HomeScreen,
        search: SearchResultsScreen,
        menu: MenuScreen,
    })

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={_handleIndexChange}
            renderScene={_renderScene}
        />
    )
}
