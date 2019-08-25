import React from 'react'
import { View, Text } from 'react-native'

import Header from '../../components/Header/Header'
import SearchField from '../../components/SearchField'
import SearchResult from '../../components/SearchResult'

import style from './style'

const SearchResultsScreen = (props) => {
    return (
        <View style={style.container}>
            <Header style={style.header} />
            <SearchField style={style.searchField} />
            <SearchResult style={style.result} />
        </View>
    )
}

export default SearchResultsScreen