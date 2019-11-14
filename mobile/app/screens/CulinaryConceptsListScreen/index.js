import React from 'react'
import { View } from 'react-native'
import Header from '../../components/MaterialHeader'
import { style } from './style'
import DefaultList from '../../components/DefaultList'

const listData = [
    {
        key: 'a',
        name: 'Al dente',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
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

const CulinaryConceptsListScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Header subtitle='Conceitos Culinários' showBackAction />
            <DefaultList
                style={{ flex: 1 }}
                items={listData}
                icon='chevron-right'
            />
            <BottomTab />
        </View>
    )
}

CulinaryConceptListScreen.navigationOptions = {
    title: 'CulinaryConceptsList',
    header: null,
}

export default CulinaryConceptsListScreen
