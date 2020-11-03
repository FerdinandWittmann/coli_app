import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import randomString from 'random-string'
import auth from '@react-native-firebase/auth'
import useAuthToken from "../GlobalState/useAuthToken"
import getProfile from "../Api/getProfile"
import useToken from '../GlobalState/useToken'
const AppProfileScreen = ({
    navigation
}) => {
    const [token, tokenActions] = useToken()
    const [authToken, authTokenActions] = useAuthToken()
    let col = "red"
    function logOut() {
        auth()
            .signOut()
            .then(() => authTokenActions.setNull())
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