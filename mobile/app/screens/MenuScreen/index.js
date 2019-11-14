import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Header from '../../components/MaterialHeader'
import DefaultList from '../../components/DefaultList'

const items = [
    {
        key: '1',
        name: 'Perfil',
    },
    {
        key: '2',
        name: 'Receitas postadas',
    },
    {
        key: '3',
        name: 'Ajuda',
    },
    {
        key: '4',
        name: 'Sobre',
    },
    {
        key: '5',
        name: 'Conceitos culinários',
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
