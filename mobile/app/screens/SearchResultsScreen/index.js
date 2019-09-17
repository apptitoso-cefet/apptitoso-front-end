import React from 'react'
import { View, Text } from 'react-native'

import { Appbar } from 'react-native-paper'

import SearchField from '../../components/SearchField'
import SearchResult from '../../components/SearchResult'

import style from './style'

const SearchResultsScreen = props => {
    return (
        <View style={style.container}>
            <Appbar.Header>
                <Appbar.BackAction />
                <Appbar.Content title='Apptitoso' />
            </Appbar.Header>
            <SearchField style={style.searchField} />
            <SearchResult style={style.result} />
        </View>
    )
}

export default SearchResultsScreen
