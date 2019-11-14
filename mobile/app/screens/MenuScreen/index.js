import React from 'react'
import { ScrollView, FlatList, StyleSheet } from 'react-native'
import { Title } from 'react-native-paper'
import BottomTab from '../../routes/BottomTabAppNavigator'
import Header from '../../components/MaterialHeader'
import DefaultList from '../../components/DefaultList'

const items = [
    {
        key: '1',
        name: 'Perfil',
    },
    {
        key: '2',
        name: 'Minhas Receitas',
    },
]

const MenuScreen = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
                <Header />
                <DefaultList style={style.container} items={items} />
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
})

MenuScreen.navigationOptions = {
    title: 'Menu',
    header: null,
}

export default MenuScreen
