import React from 'react'
import { FlatList, View } from 'react-native'
import StepListItem from '../StepListItem'
import style from './style'

const listData = [
    {
        key: 'a',
        name: 'Passo 1',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'b',
        name: 'Passo 2',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'c',
        name: 'Passo 3',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'd',
        name: 'Passo 4',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
    {
        key: 'e',
        name: 'Passo 5',
        imageSrc: require('../../assets/placeholderPhoto.jpg'),
    },
]

const SearchResult = props => {
    return (
        <View style={{ ...style.container, ...props.style }}>
            <FlatList
                style={style.list}
                data={listData}
                renderItem={({ item }) => (
                    <StepListItem name={item.name} imageSrc={item.imageSrc} />
                )}
                ItemSeparatorComponent={() => (
                    <View style={style.separator}></View>
                )}
            />
        </View>
    )
}

export default SearchResult
