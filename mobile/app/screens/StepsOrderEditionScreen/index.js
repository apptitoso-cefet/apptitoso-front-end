import React from 'react'
import { View } from 'react-native'
import MaterialHeader from '../../components/MaterialHeader'
import StepsList from '../../components/StepsList'
import BottomTab from '../../routes/BottomTabAppNavigator'
import style from './style'

const StepsOrderEditionScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <MaterialHeader style={style.header} />
            <StepsList style={style.result} />
            <BottomTab />
        </View>
    )
}

StepsOrderEditionScreen.navigationOptions = {
    title: 'StepsOrderEdition',
    header: null,
}

export default StepsOrderEditionScreen
