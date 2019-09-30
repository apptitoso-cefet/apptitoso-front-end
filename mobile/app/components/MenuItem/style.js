import { StyleSheet } from 'react-native'
import {colors} from '../../styles'

const style = StyleSheet.create({
    arrow: {
        height: 25,
        width: 25,
        marginRight: 10,
        alignSelf: 'center',
        marginLeft: 'auto'
    },
    
    photo:{
      height: 40,
      width: 40,
      marginLeft: 10,
      alignSelf: 'center',
      marginRight: 'auto',
      borderRadius: 50,
    },

    text: {
        fontSize: 20,
        marginLeft: 10,
        color: '#fff',
        alignSelf: 'center',
    },
    field: {
        flex: .6,
        flexDirection: 'row',
        backgroundColor: colors.color2,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 4,
    },
})


export default style
