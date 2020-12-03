
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import LoadingScreen from '../Components/LoadingScreen'
const RoomCard = ({
    cardItem
}) => {

    const [dimensions, setDimensions] = useState(false)
    if (!dimensions) {
        return (
            <View
                onLayout={(dim) => {
                    setDimensions(dim.nativeEvent.layout)
                }}
                style={{ flex: 1 }}>
                <LoadingScreen></LoadingScreen>
            </View>)
    }
    return (
        <View style={{ flex: 1, backgroundColor: STYLES.smallBackgroundColor }}></View>
    )
}
export default RoomCard 