import { ImageSourcePropType } from 'react-native'
import PropTypes from 'prop-types'

export const itemPropType = PropTypes.shape({
    key: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    imgSrc: ImageSourcePropType,
    onPress: PropTypes.func,
})

export const recipePropType = PropTypes.shape({
    key: PropTypes.any.isRequired,
    recipeName: PropTypes.string.isRequired,
    recipeAuthor: PropTypes.string.isRequired,
    prepareTime: PropTypes.string.isRequired,
    portionNumber: PropTypes.number.isRequired,
    photo: ImageSourcePropType,
})
