import React, { useState } from 'react'
import { BottomNavigation, Text } from 'react-native-paper'
import AboutScreen from '../screens/AboutScreen'
import CulinaryConceptScreen from '../screens/CulinaryConceptScreen'
import CulinaryConceptsListScreen from '../screens/CulinaryConceptsListScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default MateNavigation = props => {
    const [index, setIndex] = useState(0)

    const routes = [
        { key: 'about', title: 'About', icon: 'info-outline' },
        { key: 'concept', title: 'Concept', icon: 'chef-hat' },
        { key: 'list', title: 'List', icon: 'bars' },
    ]

    _handleIndexChange = index => {
        setIndex(index)
    }

    _renderScene = BottomNavigation.SceneMap({
        about: AboutScreen,
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
