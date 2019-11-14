import React from 'react'
import { View } from 'react-native'
import Header from '../../components/MaterialHeader'
import HomeBody from '../../components/HomeBody'
import BottomTab from '../../routes/BottomTabAppNavigator'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <HomeBody />
        </View>
    )
}

export default HomeScreen
