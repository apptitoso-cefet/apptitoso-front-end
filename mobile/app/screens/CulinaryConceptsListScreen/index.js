import React from 'react'
import { View } from 'react-native'
import Header from '../../components/MaterialHeader'
import { style } from './style'
import DefaultList from '../../components/DefaultList'
import BottomTab from '../../routes/BottomTabAppNavigator'

const CulinaryConceptsListScreen = ({ navigation }) => {
    const listData = [
        {
            key: 'a',
            name: 'Al dente',
            imageSrc: require('../../assets/placeholderPhoto.jpg'),
            onPress: () => navigation.navigate('CulinaryConcept'),
        },
        {
            key: 'b',
            name: 'Banho Maria',
            imageSrc: require('../../assets/placeholderPhoto.jpg'),
        },
        {
            key: 'c',
            name: 'Clarificar',
            imageSrc: require('../../assets/placeholderPhoto.jpg'),
        },
        {
            key: 'd',
            name: 'Gratinar',
            imageSrc: require('../../assets/placeholderPhoto.jpg'),
        },
        {
            key: 'e',
            name: 'Confit',
            imageSrc: require('../../assets/placeholderPhoto.jpg'),
        },
        {
            key: 'f',
            name: 'Marinar',
            imageSrc: require('../../assets/placeholderPhoto.jpg'),
        },
        {
            key: 'g',
            name: 'Emulsificar',
            imageSrc: require('../../assets/placeholderPhoto.jpg'),
        },
        {
            key: 'h',
            name: 'Dourar',
            imageSrc: require('../../assets/placeholderPhoto.jpg'),
        },
    ]

    return (
        <View style={style.container}>
            <Header onPress={navigation.goBack} />
            <DefaultList
                style={{ flex: 1 }}
                items={listData}
                icon='chevron-right'
            />
        </View>
    )
}

CulinaryConceptsListScreen.navigationOptions = {
    title: 'CulinaryConceptsList',
    header: null,
    headerShown: false,
}

export default CulinaryConceptsListScreen
