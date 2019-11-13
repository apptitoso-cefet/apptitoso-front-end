import React, { useState } from 'react'
import { BottomNavigation, Text } from 'react-native-paper'
import SearchResultsScreen from '../screens/SearchResultsScreen'
import CulinaryConceptScreen from '../screens/CulinaryConceptScreen'
import CulinaryConceptsListScreen from '../screens/CulinaryConceptsListScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default MateNavigation = props => {
    const [index, setIndex] = useState(0)

    const routes = [
        { key: 'search', title: 'Search', icon: 'loupe' },
        { key: 'concept', title: 'Concept', icon: 'chef-hat' },
        { key: 'list', title: 'List', icon: 'bars' },
    ]

    _handleIndexChange = index => {
        setIndex(index)
    }

    _renderScene = BottomNavigation.SceneMap({
        search: SearchResultsScreen,
        concept: CulinaryConceptScreen,
        list: CulinaryConceptsListScreen,
    })

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={_handleIndexChange}
            renderScene={_renderScene}
        />
    )
}
