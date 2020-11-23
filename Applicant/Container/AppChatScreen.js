import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

const AppChatScreen = ({
    navigation
}) => {
    let col = "brown"
    return (

        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, resizeMode: 'stretch' }} source={require('../../Resources/BackgroundImages/2.jpg')}>
                <View style={{ flex: 1 }}></View>
            </ImageBackground>
        </View>
    )
}
export default AppChatScreen