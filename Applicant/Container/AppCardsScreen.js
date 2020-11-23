import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
const AppCardsScreen = ({
    navigation
}) => {
    let col = "yellow"
    return (

        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, resizeMode: 'stretch' }} source={require('../../Resources/BackgroundImages/1.jpg')}>
                <View style={{ flex: 1 }}></View>
            </ImageBackground>
        </View>
    )
}
export default AppCardsScreen