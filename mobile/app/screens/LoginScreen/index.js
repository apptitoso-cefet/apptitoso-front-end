import React from 'react'
import { Image, View } from 'react-native'
import { Appbar, BottomNavigation, Button, TextInput } from 'react-native-paper'
import style from './style'

export default function() {
    return (
        <View style={style.container}>
            <Appbar.Header>
                <Appbar.BackAction />
                <Appbar.Content title='Apptitoso' subtitle='oi' />
            </Appbar.Header>
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
