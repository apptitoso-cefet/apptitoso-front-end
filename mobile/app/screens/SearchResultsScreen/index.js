import React from 'react'
import { View } from 'react-native'
import Header from '../../components/MaterialHeader'
import SearchField from '../../components/SearchField'
import SearchResult from '../../components/SearchResult'
import BottomTab from '../../routes/BottomTabAppNavigator'
import style from './style'

const SearchResultsScreen = ({ navigation }) => {
    const [text, setText] = useState("")
    return (
        <View style={style.container}>
            <Header showBackAction />
            <SearchField style={style.searchField} onChangeText={(value)=>setText(value)} />
            <SearchResult style={style.result searchText=text} />
        </View>
    )
}

SearchResultsScreen.navigationOptions = {
    title: 'SearchResults',
    header: null,
}



export default SearchResultsScreen
