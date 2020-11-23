import randomString from 'random-string'
import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
const AdvCardsScreen = ({
    navigation
}) => {
    let col = "red"
    return (

        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, resizeMode: 'stretch' }} source={require('../../Resources/BackgroundImages/1.jpg')}>
                <View style={{ flex: 1 }}></View>
            </ImageBackground>
        </View>
    )
}
export default AdvCardsScreen