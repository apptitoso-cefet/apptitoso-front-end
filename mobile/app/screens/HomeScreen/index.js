import React from 'react'
import { View } from 'react-native'

import Header from '../../components/MaterialHeader'
import HomeBody from '../../components/HomeBody'

const HomeScreen = props => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <HomeBody style={{ flex: 1 }} />
        </View>
    )
}

export default HomeScreen
