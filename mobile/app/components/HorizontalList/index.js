import React from 'react'
import { View, FlatList } from 'react-native'
import { Text } from 'react-native-paper'
import PropTypes from 'prop-types'
import { itemPropType } from '../../validators'
import HorizontalListCardItem from '../HorizontalListCardItem'

const HorizontalList = props => {
    return (
        <View>
            <FlatList
                horizontal
                ListEmptyComponent={() => (
                    <Text>Desculpe, não há nada o que exibir aqui</Text>
                )}
                renderItem={({ item }) => {
                    return <HorizontalListCardItem item={item} />
                }}
                ItemSeparatorComponent={() => {
                    return <View></View>
                }}
                data={props.data}
            />
        </View>
    )
}

HorizontalList.propTypes = {
    data: PropTypes.arrayOf(itemPropType),
}

export default HorizontalList
