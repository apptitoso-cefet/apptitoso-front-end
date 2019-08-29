import React from 'react'
import { TouchableHighlight, Image, Text, TextInput, View } from 'react-native'
import style from './style'
import Header from '../../components/Header'

export default function () {
    return ( 
        <View style={style.container}>
            <Header />
            <Image 
                style={style.logo}
                source={require('../../assets/logo.png')} />
            <View style={style.inputsContainer}>
                <TextInput 
                    style={style.input}
                    placeholder={"E-mail"}
                    keyboardType={"email-address"}/>
                <TextInput 
                    style={style.input}
                    placeholder={"Senha"}/>
                <TouchableHighlight style={style.button}>
                    <Text style={style.text}>Entrar</Text>
                </TouchableHighlight>
                <TouchableHighlight style={style.button}>
                    <Text style={style.text}>Cadastrar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}
