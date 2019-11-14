import React from 'react'
import { View, Text } from 'react-native'
import MenuItem from '../../components/MenuItem'
import Header from '../../components/MaterialHeader'
import BottomTab from '../../routes/BottomTabAppNavigator'

import style from './style'

const SideMenuScreen = ({ navigation }) => {
    return (
        <View>
            <Header showBackAction />
            <View style={style.container}>
                <MenuItem textName='Perfil' />
                <MenuItem textName='Minhas Receitas' />
                <MenuItem textName='Nova Receita' />
                <MenuItem textName='Receitas Salvas' />
                <MenuItem textName='Ajuda' />
                <MenuItem textName='Sobre' />
                <MenuItem textName='Conceitos Culinários' />
                <MenuItem textName='Login/Logout' />
            </View>
            <BottomTab />
        </View>
    )
}

SideMenuScreen.navigationOptions = {
    title: 'SideMenu',
    header: null,
}

export default SideMenuScreen
