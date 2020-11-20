import React from 'react'
import { View, Text } from 'react-native'
import ImagePicker from '../components/ImagePicker'

const AdvProfileScreen = ({
    navigation
}) => {
    let col = "yellow"
    return (
        <View style={{ flex: 1, backgroundColor: col }}>
            <ImagePicker height={200} width={200}></ImagePicker>
        </View>
    )
}
export default AdvProfileScreen