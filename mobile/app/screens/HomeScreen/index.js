import React from 'react'
import { View } from 'react-native'
import Header from '../../components/MaterialHeader'
import HomeBody from '../../components/HomeBody'
import BottomTab from '../../routes/BottomTabAppNavigator'

<<<<<<< HEAD
const homeData = [
    {
        title: 'aaaa',
        data: [
            [
                { key: 5, name: 'bla ' },
                { key: 9, name: 'ble ' },
                { key: 7, name: 'bli ' },
            ],
        ],
    },
]

const HomeScreen = props => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <HomeBody style={{ flex: 1 }} data={homeData} />
=======
const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <HomeBody />
>>>>>>> master
        </View>
    )
}

export default HomeScreen
