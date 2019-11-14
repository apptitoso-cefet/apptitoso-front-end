import React from 'react'
import { Image, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import Header from '../../components/MaterialHeader'
<<<<<<< HEAD
import BottomTab from '../../routes/BottomTabAppNavigator'
=======
>>>>>>> babi/navigation
import style from './style'

const LoginScreen = ({ navigation }) => {
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
                <Button
                    style={style.button}
                    onPress={() => {
                        navigation.navigate('SignUp')
                    }}
                >
                    Cadastrar
                </Button>
            </View>
<<<<<<< HEAD
            <BottomTab />
=======
>>>>>>> babi/navigation
        </View>
    )
}

LoginScreen.navigationOptions = {
    title: 'Login',
    header: null,
}

export default LoginScreen
