import React from 'react'
import { FlatList, View, Text } from 'react-native'

import SearchResultItem from '../SearchResultItem'

import style from './styles'

const SearchResult = props => {
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

    return (
        <View style={{ ...style.container, ...props.style }}>
            <FlatList
                style={style.list}
                data={listData}
                renderItem={({ item }) => (
                    <SearchResultItem
                        name={item.name}
                        imageSrc={item.imageSrc}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text>Desculpe, não há resultados</Text>
                )}
                ItemSeparatorComponent={() => (
                    <View style={style.separator}></View>
                )}
            />
        </View>
    )
}

export default SearchResult
