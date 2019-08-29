import React from 'react'
import { View } from 'react-native'
import style from './style'
import Header from '../../components/Header'
import InfoField from '../../components/InfoField'
import LogoutField from '../../components/LogoutField'
import PerfilPhotoContainer from '../../components/PerfilPhotoContainer'


export default function () {
    return (
        <View style={style.container}>
            <Header />
            <PerfilPhotoContainer />
            <View style={style.containerField}>
              <InfoField textName="E-mail" />
              <InfoField textName="Nome" />
              <InfoField textName="Informações da conta" />
              <InfoField textName="Excluir conta" />
              <LogoutField />
            </View>
        </View>
    )
}
