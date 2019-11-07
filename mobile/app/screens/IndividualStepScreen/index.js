import React from 'react'
import { Text, View } from 'react-native'
import { Button, Title } from 'react-native-paper'
import Header from '../../components/MaterialHeader'
import { style } from './style'

const DESCR_PASSO = `descrição do passo uhul Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Donec facilisis leo quam.`

const IndividualStepScreen = () => {
    return (
        <View style={style.container}>
            <Header showBackAction />
            <Title style={style.title}>Nome passo</Title>
            <Text style={style.text} content={DESCR_PASSO} />
            <View style={style.buttonsContainer}>
                <Button mode='contained' style={style.button}>
                    Anterior
                </Button>
                <Button mode='contained' style={style.button}>
                    Próximo
                </Button>
            </View>
        </View>
    )
}

export default IndividualStepScreen
