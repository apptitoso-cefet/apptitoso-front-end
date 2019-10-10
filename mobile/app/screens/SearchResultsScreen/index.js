import React from 'react'
import { View } from 'react-native'
import Header from '../../components/MaterialHeader'
import SearchField from '../../components/SearchField'
import SearchResult from '../../components/SearchResult'
import style from './style'

const SearchResultsScreen = props => {
    return (
        <View style={style.container}>
            <Header showBackAction />
            <SearchField style={style.searchField} />
            <SearchResult style={style.result} />
        </View>
    )
}

export default SearchResultsScreen
