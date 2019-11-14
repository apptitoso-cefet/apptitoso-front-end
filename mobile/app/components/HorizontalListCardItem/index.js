import React from 'react'
import { Dimensions } from 'react-native'
import { Card } from 'react-native-paper'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { itemPropType } from '../../validators'

const { width } = Dimensions.get('window')

export const HorizontalListCardItem = props => {
    return (
        <TouchableHighlight>
            <Card
                key={() => props.item.key.toString()}
                style={{ width: width / 2, margin: 5 }}
            >
                <Card.Cover source={props.item.image} />
                <Card.Title title={props.item.name} />
            </Card>
        </TouchableHighlight>
    )
}

HorizontalListCardItem.propTypes = {
    item: itemPropType,
}

export default HorizontalListCardItem
