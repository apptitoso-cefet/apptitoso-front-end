import React from 'react'
import { Image, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import Header from '../../components/MaterialHeader'
import style from './style'

const LoginScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Header />
            <Image
                style={style.logo}
                source={require('../../assets/cooking.png')}
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
                <Button
                    style={style.button}
                    onPress={() => {
                        navigation.navigate('SignUp')
                    }}
                >
                    Cadastrar
                </Button>
            </View>
        </View>
    )
}

LoginScreen.navigationOptions = {
    title: 'Login',
    header: null,
}

export default LoginScreen
