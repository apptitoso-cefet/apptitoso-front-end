import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        marginLeft: '1%',
        paddingTop: '1%',
    },
    photo: {
      width:'100%'
    },
    photoSmall: {
        minHeight:'8%',
    },
    photoBig: {
        minHeight:'35%',
    },
    buttonContainer: {
        flex: 1,
        minHeight: 75,
        maxHeight: 75,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        backgroundColor: '#6200ee',
        borderColor: '#6200ee',
        borderWidth: 15,
    },
    button: {
        backgroundColor: 'white',
        width: '47%',
        margin: 5,
    },
    text: {
        fontSize: 25,
        color: 'white',
        alignSelf: 'center',
    },
    detailContainer: {
      flex:1,
      minHeight: '8%'
    },
    scrollView: {
        flexGrow: 1,
    },
})

export default style
