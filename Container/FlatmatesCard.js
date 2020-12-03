import React, { useState } from 'react'
import { View, Text } from 'react-native'
import LoadingScreen from '../Components/LoadingScreen'
const FlatmatesCard = ({
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
        <View style={{ flex: 1, backgroundColor: 'green' }}></View>
    )
}
export default FlatmatesCard