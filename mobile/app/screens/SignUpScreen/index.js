import React from 'react'
import { Image, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import Header from '../../components/MaterialHeader'
import style from './style'

const SignUpScreen = props => {
    return (
        <View style={style.container}>
            <Header showBackAction />
            <Image
                style={style.logo}
                source={require('../../assets/logo.png')}
            />
            <View style={style.inputsContainer}>
                <TextInput style={style.input} label={'Primeiro nome'} />
                <TextInput style={style.input} label={'Sobrenome'} />
                <TextInput style={style.input} label={'E-mail'} />
                <TextInput style={style.input} label={'Senha'} />
                <TextInput style={style.input} label={'Confirmar senha'} />
                <Button style={style.button}>Cadastrar</Button>
                <Button style={style.button}>Entrar</Button>
            </View>
        </View>
    )
}
export default SignUpScreen
