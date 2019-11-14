import React from 'react'
import { View } from 'react-native'
import Header from '../../components/MaterialHeader'
import ImageAboutField from '../../components/ImageAboutField'
import TextScrollField from '../../components/TextScrollField'
import { style } from './style'

const LOREM_IPSUM = `Olá, seja bem-vindo ao campo de ajuda do Apptitoso!!
Você gosta de cozinhar? Independentemente da resposta esse é o aplicativo certo pra você!

Nossa proposta é fazer um aplicativo de receitas totalmente diferente do que já existe nesse mercado: 
1- Somos um aplicativo de receita muito mais explicativo que os outros do mercado, ou seja, estamos aqui para te ajudar a aprender a cozinhar!
2- Nós somos um aplicativo que preza pela acessibilidade e facilidade de uso. Queremos que você tenha uma experiência totalmente diferente no nosso App!
3- Nosso app está aqui para que seu momento chefe seja perfeito! Para isso contamos também com narração de receitas por comandos de voz. Assim, a higiene na sua cozinha será número 1!
Gostou? Vem com a gente!! 😉

Você precisa apenas:
1- Pesquisar uma receita na página inicial do site
2- Clicar na receita que deseja fazer
3- Observar quais são os ingredientes 
4- Organizar os passos do seu jeitinho
5- Executar a receita: Nosso app vai te dizer quais são todos os passos necessários para que seu prato seja digno de ganhar a aprovação de Érick Jacquin
6- Aproveite seu prato!

Esperamos ter ajudado. Caso queira, você também pode criar suas receitas aqui! Qualquer dúvida ou sugestão, entre em contato conosco por meio do número 0800 123 456.`

const HelpScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Header subtitle='Ajuda' showBackAction />
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

HelpScreen.navigationOptions = {
    title: 'Help',
    header: null,
}

export default HelpScreen
