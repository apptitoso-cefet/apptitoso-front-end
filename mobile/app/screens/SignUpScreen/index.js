import React from 'react'
import { Image, View } from 'react-native'
import { Button, TextInput, Appbar } from 'react-native-paper'
import Header from '../../components/MaterialHeader'
import style from './style'

const SignUpScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Header showBackAction />
            <Image
                style={style.logo}
                source={require('../../assets/cooking.png')}
            />
            <View style={style.inputsContainer}>
                <TextInput style={style.input} label={'Primeiro nome'} />
                <TextInput style={style.input} label={'Sobrenome'} />
                <TextInput style={style.input} label={'Nome de usuário'} />
                <TextInput style={style.input} label={'E-mail'} />
                <TextInput style={style.input} label={'Senha'} />
                <TextInput style={style.input} label={'Confirmar senha'} />
                <Button style={style.button}>Cadastrar</Button>
                <Button
                    style={style.button}
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                >
                    Entrar
                </Button>
            </View>
        </View>
    )
}

SignUpScreen.navigationOptions = {
    title: 'SignUp',
    header: null,
}
export default SignUpScreen
