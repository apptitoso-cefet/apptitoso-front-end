import React from 'react'
import { View } from 'react-native'
import Header from '../../components/MaterialHeader'
import ImageAboutField from '../../components/ImageAboutField'
import TextScrollField from '../../components/TextScrollField'
import { style } from './style'

const LOREM_IPSUM = `Em gastronomia denomina-se al dente ao estado de cozimento da massa (e ocasionalmente do arroz) que, estando cozida, oferece alguma resistência (firmeza) ao ser mordida.[1] A massa fica firme mas não dura. A denominação prove/provem do italiano, no que a expressão significa precisamente ao dente. Pode aplicar-se por extensão às verduras cozidas, que devem ficar algo "estaladiças" - ou ao menos oferecer alguma resistência quando são mordidas. É com frequência considerada a forma ideal de cozimento da massa; em qualquer caso faz que a massa se mantenha firme, sendo isto especialmente importante nos pratos de massa "ao forno" (ao forno).`

const CulinaryConceptScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Header showBackAction onPress={navigation.goBack} />
            <ImageAboutField
                style={style.logoContainer}
                source={require('../../assets/alDente.jpeg')}
            />
            <TextScrollField
                style={style.textContainer}
                content={LOREM_IPSUM}
            />
        </View>
    )
}

CulinaryConceptScreen.navigationOptions = {
    title: 'CulinaryConcept',
    header: null,
    showHeader: false,
}

export default CulinaryConceptScreen
