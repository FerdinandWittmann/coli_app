import React from 'react'
import { View, Text } from 'react-native'

const AdvProfileScreen = ({
    navigation
}) => {
    let col = "#" + randomString({ length: 6 })
    return (
        <View style={{ flex: 1, backgroundColor: col }}></View>
    )
}
export default AdvProfileScreen