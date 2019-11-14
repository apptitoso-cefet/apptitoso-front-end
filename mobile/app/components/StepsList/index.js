import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import DraggableFlatList from 'react-native-draggable-dynamic-flatlist'
import CheckboxItem from '../CheckboxItem'
import style from './style'

const state = {
    data: [...Array(5)].map((d, index) => ({
        key: index,
        label: `Passo ${index}`,
    })),
}

const renderItemConst = ({ item, move, moveEnd, isActive }) => {
    return (
        <View style={style.itemContainer}>
            <TouchableOpacity
                style={style.touchable}
                onLongPress={move}
                onPressOut={moveEnd}
            >
                <Text style={style.text}>{item.label}</Text>
            </TouchableOpacity>
            <View style={style.checkboxItem}>
                <CheckboxItem />
            </View>
        </View>
    )
}

const StepsList = ({ navigation }) => {
    return (
        <View style={{ ...style.container, ...props.style }}>
            <DraggableFlatList
                style={style.list}
                data={state.data}
                renderItem={renderItemConst}
                keyExtractor={(item, index) => `draggable-item-${item.key}`}
                ItemSeparatorComponent={() => (
                    <View style={style.separator}></View>
                )}
            />
        </View>
    )
}

export default StepsList
