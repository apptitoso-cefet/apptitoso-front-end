import React from 'react'
import { TouchableHighlight, Image, Text, TextInput, View } from 'react-native'
import style from './style'
import Header from '../../components/Header/Header'
import CampoInformacao from '../../components/CampoInformacao/CampoInformacao'
import CampoSair from '../../components/CampoSair/CampoSair'
import PerfilPhotoContainer from '../../components/perfilPhotoContainer/perfilPhotoContainer'


export default function () {
    return (
        <View style={style.container}>
            <Header />
            <PerfilPhotoContainer />
            <View style={style.campoContainer}>
              <CampoInformacao textName="E-mail" />
              <CampoInformacao textName="Nome" />
              <CampoInformacao textName="Informações da conta" />
              <CampoInformacao textName="Excluir conta" />
              <CampoSair />
            </View>
        </View>
    )
}
