import React from 'react'
import { Image, Text, View } from 'react-native'

import style from './style'

const SearchResultItem = (props) => {
    const {name, imageSrc} = props

    return (
        <View style={{...style.container, ...props.style}}>
            <Image resizeMode='contain' style={style.image} source={imageSrc} />
            <Text style={style.text}>{name}</Text>
        </View>
    )
}

export default SearchResultItem