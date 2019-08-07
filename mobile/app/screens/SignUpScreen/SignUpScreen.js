import React from 'react'
import { TouchableHighlight, Image, Text, TextInput, View } from 'react-native'
import style from './style'
import Header from '../../components/Header/Header'

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
                    placeholder={"Primeiro nome"}/>
                <TextInput 
                    style={style.input}
                    placeholder={"Sobrenome"}/>
                <TextInput 
                    style={style.input}
                    placeholder={"E-mail"}/>
                <TextInput 
                    style={style.input}
                    placeholder={"Senha"}/>
                <TextInput 
                    style={style.input}
                    placeholder={"Confirmar senha"}/>
                <TouchableHighlight style={style.button}>
                    <Text style={style.text}>Cadastrar</Text>
                </TouchableHighlight>
                <TouchableHighlight style={style.button}>
                    <Text style={style.text}>Entrar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}
