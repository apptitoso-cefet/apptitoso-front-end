import React from 'react'
import { View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import style from './style'

const SEARCH_PLACEHOLDER = 'Pesquisar...'

const SearchField = props => {
    return (
        <View style={{ ...style.container, ...props.style }}>
            <Searchbar
                style={{ ...style.searchbar }}
                placeholder={SEARCH_PLACEHOLDER}
            />
        </View>
    )
}

export default SearchField
