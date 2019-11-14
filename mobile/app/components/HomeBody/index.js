import React from 'react'
import { View, SectionList, ViewPropTypes } from 'react-native'
import { List, Divider, Text, withTheme } from 'react-native-paper'
import HorizontalList from '../HorizontalList'

const HomeBody = props => {
    const { colors } = props.theme
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
                    console.table(data)
                    return <HorizontalList data={data[0]} />
                }}
                sections={[
                    {
                        title: 'aaaa',
                        data: [
                            [
                                { key: 5, name: 'bla ' },
                                { key: 9, name: 'ble ' },
                                { key: 7, name: 'bli ' },
                            ],
                        ],
                    },
                ]}
            />
        </View>
    )
}
HomeBody.propTypes = {
    style: ViewPropTypes,
}

export default withTheme(HomeBody)
