import React from 'react'
import { View } from 'react-native'

import Header from '../../components/Header'
import SearchResult from '../../components/SearchResult'

import style from './style'

const SearchResultsScreen = (props) => {
    return (
        <View style={style.container}>
            <Header style={style.header} />
            <SearchResult style={style.result} />
        </View>
    )
}

export default SearchResultsScreen