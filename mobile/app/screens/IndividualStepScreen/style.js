import { StyleSheet } from 'react-native'
export const style = StyleSheet.create({
    button: {
        height: 40,
        width: 200,
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
    },
    text: {
        alignSelf: 'center',
        flex: 5,
    },
    title: {
        flex: 3,
        alignSelf: 'center',
        textAlignVertical: 'center',
        fontSize: 50,
        padding: 5,
    },
})
