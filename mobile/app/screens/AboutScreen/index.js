import React from 'react'
import { View } from 'react-native'
import Header from '../../components/MaterialHeader'
import ImageAboutField from '../../components/ImageAboutField'
import TextScrollField from '../../components/TextScrollField'
import { style } from './style'

const LOREM_IPSUM = `Apptitoso é um aplicativo de receitas, feito por alunos do curso tecnico em informática, no ano de 2019. Desenvolver um aplicativo de fácil usabilidade que, ao executar uma receita, consiga informar os passos por meio de narração e apresente ao usuário conceitos importantes para a culinária.
O foco do aplicativo é auxiliar jovens a aprender a cozinhar.`

const AboutScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Header subtitle='Sobre' showBackAction />
            <ImageAboutField
                style={style.logoContainer}
                source={require('../../assets/placeholderPhoto.jpg')}
            />
            <TextScrollField
                style={style.textContainer}
                content={LOREM_IPSUM}
            />
        </View>
    )
}

AboutScreen.navigationOptions = {
    title: 'About',
    header: null,
}

export default AboutScreen
