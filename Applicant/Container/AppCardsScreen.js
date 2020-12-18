import React from 'react'
import { View, Text, ImageBackground, Button } from 'react-native'
import auth from '@react-native-firebase/auth'
const AppCardsScreen = ({
    navigation
}) => {
    let col = "yellow"

    function logOut() {
        auth()
            .signOut()
            .then(() => console.log("successfull logged out"))
            .catch((error) => console.log(error))
    }
    return (

        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, resizeMode: 'stretch' }} source={require('../../Resources/BackgroundImages/1.jpg')}>
                <View style={{ flex: 1 }}></View>
                <Button onPress={() => logOut()} title="LOGOUT" />
            </ImageBackground>
        </View>
    )
}
export default AppCardsScreen