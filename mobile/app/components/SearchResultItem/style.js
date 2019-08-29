import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 2,
        backgroundColor: 'whitesmoke'
    },
    image: {
        flex: 1,
        maxHeight: 60,
        maxWidth: '25%',
        borderRadius: 100,
    },
    text: {
        flex: 4,
        alignSelf: 'center',
        paddingStart: 10
    },
    icon: {
        alignSelf: 'center',
        fontSize: 50 
    }
})

export default style