import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import randomString from 'random-string'
import auth from '@react-native-firebase/auth'
import getProfile from "../Api/getProfile"
const AppProfileScreen = ({
    navigation
}) => {
    let col = "red"
    function logOut() {
        auth()
            .signOut()
            .then(() => console.log("successfull logged out"))
            .catch((error) => console.log(error))
    }
    return (
        <View style={{ flex: 1, backgroundColor: col }}>
            <Button
                onPress={logOut}
                title="LogOut"
                color="#841584"
            />
        </View>
    )
}
export default AppProfileScreen