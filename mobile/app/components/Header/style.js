import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    icon: {
        height: 25,
        width: 25,
        marginRight: 10,
    },
    text: {
        fontSize: 20,
        marginLeft: 10,
    },
    header: {
        flex: .4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f49678',
        // mais claro: #f5c7b3
        padding: 4,
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})


export default style