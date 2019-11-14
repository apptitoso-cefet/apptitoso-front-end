import React from 'react'
import { View } from 'react-native'
import Header from '../../components/MaterialHeader'
import ImageAboutField from '../../components/ImageAboutField'
import TextScrollField from '../../components/TextScrollField'
import { style } from './style'

const LOREM_IPSUM = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Donec facilisis leo quam.
Phasellus eget nisi pretium, tincidunt magna gravida, ultrices est.
Morbi nec massa odio. Integer posuere purus et dictum euismod.
Integer pulvinar purus nec commodo accumsan.
Sed sit amet semper risus. Aenean a dui ac mauris ultricies interdum.
Integer scelerisque ipsum id laoreet tempus.
Ut lacus diam, vehicula vitae eros ut, feugiat finibus nunc
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Donec facilisis leo quam.
Phasellus eget nisi pretium, tincidunt magna gravida, ultrices est.
Morbi nec massa odio. Integer posuere purus et dictum euismod.
Integer pulvinar purus nec commodo accumsan.
Sed sit amet semper risus. Aenean a dui ac mauris ultricies interdum.
Integer scelerisque ipsum id laoreet tempus.
Ut lacus diam, vehicula vitae eros ut, feugiat finibus nunc`

const HelpScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Header
                subtitle='Ajuda'
                showBackAction
                onPress={navigation.goBack}
            />
            <ImageAboutField
                style={style.logoContainer}
                source={require('../../assets/cooking.png')}
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
