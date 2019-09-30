import React from 'react'
import { View, Text } from 'react-native'
import MenuItem from '../../components/MenuItem'

import Header from '../../components/Header'


import style from './style'

const SideMenuScreen= (props) => {
    return (
        <View style={style.container}>
              <MenuItem textName="Perfil" />
              <MenuItem textName="Minhas Receitas" />
              <MenuItem textName="Nova Receita" />
              <MenuItem textName="Receitas Salvas" />
              <MenuItem textName="Ajuda" />
              <MenuItem textName="Sobre" />
              <MenuItem textName="Conceitos Culinários" />
              <MenuItem textName="Login/Logout" />
        </View>
    )
}

export default SideMenuScreen
