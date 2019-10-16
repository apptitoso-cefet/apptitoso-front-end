import React from 'react'
import { View, FlatList, ViewPropTypes } from 'react-native'
import { Text, List, Divider } from 'react-native-paper'
import PropTypes from 'prop-types'
import { itemPropType } from '../../validators'

const DefaultList = props => {
    return (
        <View style={{ ...props.style }}>
            <FlatList
                horizontal={props.horizontal}
                data={props.items}
                renderItem={({ item }) => {
                    return (
                        <List.Item
                            title={item.name}
                            right={() => <List.Icon icon={props.icon} />}
                        />
                    )
                }}
                ListEmptyComponent={() => (
                    <Text>Desculpe, não há resultados</Text>
                )}
                ItemSeparatorComponent={() => <Divider />}
            />
        </View>
    )
}

DefaultList.propTypes = {
    style: ViewPropTypes,
    items: PropTypes.arrayOf(itemPropType),
    icon: PropTypes.string,
    horizontal: PropTypes.bool,
}

DefaultList.defaultProps = {
    horizontal: false,
}

export default DefaultList
