import React from 'react'
import { Appbar } from 'react-native-paper'

import PropTypes from 'prop-types'

const MaterialHeader = props => (
    <Appbar.Header>
        {props.showBackAction && <Appbar.BackAction />}
        <Appbar.Content title='Apptitoso' />
    </Appbar.Header>
)

MaterialHeader.propTypes = {
    showBackAction: PropTypes.bool,
}

MaterialHeader.defaultProps = {
    showBackAction: false,
}

export default MaterialHeader
