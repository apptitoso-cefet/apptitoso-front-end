import React from 'react'
import { ScrollView, FlatList, StyleSheet } from 'react-native'
import { Title } from 'react-native-paper'

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

const Menu = props => {
    return (
        <ScrollView>
            <Header />
            <DefaultList style={style.container} items={items} />
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Menu
