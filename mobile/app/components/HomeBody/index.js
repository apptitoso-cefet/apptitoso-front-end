import React from 'react'
import { View, SectionList, ViewPropTypes } from 'react-native'
import { List, Divider, Text, withTheme } from 'react-native-paper'
import HorizontalList from '../HorizontalList'
import PropTypes from 'prop-types'

const HomeBody = props => {
    return (
        <View>
            <SectionList
                style={{ flex: 1 }}
                keyExtractor={(item, index) => item + index}
                ItemSeparatorComponent={() => <Divider />}
                ListEmptyComponent={() => (
                    <Text style={{ textAlign: 'center' }}>
                        Desculte, não há o que exibir aqui
                    </Text>
                )}
                renderSectionHeader={({ section: { title } }) => {
                    return <List.Section title={title} />
                }}
                SectionSeparatorComponent={() => <Divider />}
                renderItem={({ section: { data } }) => {
                    return <HorizontalList data={data[0]} />
                }}
                sections={props.data}
            />
        </View>
    )
}
HomeBody.propTypes = {
    style: ViewPropTypes,
}

export default HomeBody
