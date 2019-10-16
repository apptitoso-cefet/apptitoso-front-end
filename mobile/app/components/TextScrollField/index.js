import React from 'react'
import { Paragraph as Text, Title } from 'react-native-paper'
import { ScrollView, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

export const TextScrollField = props => {
    return (
        <ScrollView style={props.style}>
            {props.title && <Title>{props.title}</Title>}
            <Text>{props.content}</Text>
        </ScrollView>
    )
}
TextScrollField.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    style: ViewPropTypes.style,
}

export default TextScrollField
