import React from 'react'
import { Image, View, ViewPropTypes } from 'react-native'

const ImageAboutField = props => {
    return (
        <View style={props.style}>
            <Image
                source={props.source}
                resizeMode='contain'
                style={{ height: '80%' }}
            />
        </View>
    )
}

ImageAboutField.propTypes = {
    source: Image.propTypes.source.isRequired,
    style: ViewPropTypes.style,
}

export default ImageAboutField
