import React from 'react'
import { Image, View } from 'react-native'
import { Button, TextInput, Appbar } from 'react-native-paper'
import Header from '../../components/MaterialHeader'
import BottomTab from '../../routes/BottomTabAppNavigator'
import style from './style'

const SignUpScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Header showBackAction onPress={navigation.goBack} />
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
                <Button
                    style={style.button}
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                >
                    Entrar
                </Button>
            </View>
            <BottomTab style={{ flex: 1 }} />
        </View>
    )
}

SignUpScreen.navigationOptions = {
    title: 'SignUp',
    header: null,
}
export default SignUpScreen
