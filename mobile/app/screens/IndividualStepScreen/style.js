import { StyleSheet } from 'react-native'
export const style = StyleSheet.create({
    button: {
        height: 40,
        width: 170,
        marginLeft: 25,
        marginTop: 20,
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    container: {
        flex: 1,
    },
    text: {
        alignSelf: 'center',
        padding: 10,
        fontSize: 18,
        flex: 4,
    },
    title: {
        flex: 2.5,
        alignSelf: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
        lineHeight: 50,
        fontSize: 45,
        padding: 5,
    },
})
