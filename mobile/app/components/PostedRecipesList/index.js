import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from 'react-native-paper'
import RecipeListItem from '../RecipeListItem'
import style from './style'
import PropTypes from 'prop-types'

const PostedRecipesList = props => {
    return (
        <View style={{ ...style.container, ...props.style }}>
            <FlatList
                data={props.data}
                renderItem={({ item }) => (
                    <RecipeListItem name={item.name} imageSrc={item.imageSrc} />
                )}
                ListEmptyComponent={() => (
                    <Text>Desculpe, ainda não há receitas postadas</Text>
                )}
                ItemSeparatorComponent={() => (
                    <View style={style.separator}></View>
                )}
            />
        </View>
    )
}

PostedRecipesList.propTypes = {
    data: PropTypes.object,
}

export default PostedRecipesList
