import randomString from 'random-string'
import React from 'react'
import { View, Text } from 'react-native'
const AdvCardsScreen = ({
    navigation
}) => {
    let col = "#" + randomString({ length: 6 })
    return (
        <View style={{ flex: 1, backgroundColor: col }}></View>
    )
}
export default AdvCardsScreen