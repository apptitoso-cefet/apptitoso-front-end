import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    checkboxItem: {
        alignItems: 'flex-end',
        position: 'absolute',
        right: 0,
    },
    container: {
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 40,
        padding: 5,
        margin: 5,
    },
    text: {
        fontSize: 24,
    },
    touchable: {},
})

export default style
