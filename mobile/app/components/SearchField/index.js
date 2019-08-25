import React from 'react'
import { View, TextInput, Text } from 'react-native'
import style from './style'

const SearchField = (props) => {
    const SEARCH_PLACEHOLDER = 'Pesquisar...'

    return (
        <View style={{...style.container, ...props.style}}>
            <TextInput style={style.input} placeholder={SEARCH_PLACEHOLDER} />
        </View>
    )
}

export default SearchField