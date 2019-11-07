import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper'

const CheckboxItem = props => {
    const [checked, setChecked] = useState(false)
    return (
        <Checkbox
            style={{ color: 'rgb(98, 0, 237)' }}
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
                setChecked(!checked)
            }}
        />
    )
}

export default CheckboxItem
