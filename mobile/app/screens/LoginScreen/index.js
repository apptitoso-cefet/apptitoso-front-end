import React from 'react'
import { Image, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import Header from '../../components/MaterialHeader'
import style from './style'

const LoginScreen = props => {
    return (
        <View style={style.container}>
            <Header />
            <Image
                style={style.logo}
                source={require('../../assets/logo.png')}
            />
            <View style={style.inputsContainer}>
                <TextInput
                    style={style.input}
                    label={'E-mail'}
                    keyboardType={'email-address'}
                />
                <TextInput
                    style={style.input}
                    label={'Senha'}
                    keyboardType={'default'}
                />
                <Button style={style.button}>Entrar</Button>
                <Button style={style.button}>Cadastrar</Button>
            </View>
        </View>
    )
}

export default LoginScreen
