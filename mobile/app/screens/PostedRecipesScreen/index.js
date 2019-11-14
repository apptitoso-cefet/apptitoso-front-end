import React from 'react'
import { View } from 'react-native'
import MaterialHeader from '../../components/MaterialHeader'
import PostedRecipesList from '../../components/PostedRecipesList'
import BottomTab from '../../routes/BottomTabAppNavigator'
import style from './style'

const listData = [
    {
        key: 'a',
        name: 'Frango Assado',
        imageSrc: require('../../assets/confit.jpg'),
    },
    {
        key: 'b',
        name: 'Bom de Queijo',
        imageSrc: require('../../assets/queijo.jpg'),
    },
    {
        key: 'c',
        name: 'Frutas Cristalizadas',
        imageSrc: require('../../assets/frutinha.jpg'),
    },
    {
        key: 'd',
        name: 'Sopa',
        imageSrc: require('../../assets/aleatoria1.jpg'),
    },
    {
        key: 'e',
        name: 'Bolo Decorativo',
        imageSrc: require('../../assets/bolin.jpg'),
    },
    {
        key: 'f',
        name: 'Suco Funcional de Abacaxi',
        imageSrc: require('../../assets/suco.jpg'),
    },
    {
        key: 'g',
        name: 'Caldo',
        imageSrc: require('../../assets/aleatoria2.jpg'),
    },
    {
        key: 'h',
        name: 'Bolo Verde',
        imageSrc: require('../../assets/boloverde.jpg'),
    },
]

const PostedRecipesScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <MaterialHeader
                style={style.header}
                showBackAction
                onPress={() => navigation.goBack()}
            />
            <PostedRecipesList style={style.result} data={listData} />
        </View>
    )
}

PostedRecipesScreen.navigationOptions = {
    title: 'PostedRecipes',
    header: null,
}

export default PostedRecipesScreen
