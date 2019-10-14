import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from 'react-native-paper'
import RecipeListItem from '../RecipeListItem'
import style from './style'

const listData = [
    {
        key: 'a',
        name: 'Bolo de Cenouras',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'b',
        name: 'Bom de Queijo',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'c',
        name: 'Frutas Cristalizadas',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'd',
        name: 'Gelo',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'e',
        name: 'Bolo Decorativo',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'f',
        name: 'Suco Funcional de Abacaxi',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'g',
        name: 'Água Gelada',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'h',
        name: 'Bolo Verde',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
]

const PostedRecipesList = props => {
    return (
        <View style={{ ...style.container, ...props.style }}>
            <FlatList
                data={listData}
                renderItem={({ item }) => (
                    <RecipeListItem name={item.name} imageSrc={item.imageSrc} />
                )}
                ListEmptyComponent={() => (
                    <Text>Desculpe, ainda não há receitas postadas</Text>
                )}
                ItemSeparatorComponent={() => (
                    <View style={style.separator}></View>
                )}
            />
        </View>
    )
}

export default PostedRecipesList
