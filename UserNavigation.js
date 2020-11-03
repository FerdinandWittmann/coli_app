
import React, { useState, useEffect } from 'react';
import { View, Button, Text, TextInput } from 'react-native'
import useFToken from './GlobalState/useFToken'
import { secFetch } from './secFetch'
import auth from '@react-native-firebase/auth'
UserNavigation = ({
}) => {
    /*const [fToken, setFtoken] = useFToken()
    const [apiLogin, setApiLogin] = useState(false)
    useEffect(() => {
        if (fToken) {
            let response = secFetch(fToken.token, "/user", 'GET', null)
        }
    }, [])
    */
    function logOut() {
        auth().signOut().then(() => Alert.alert("You are succesfully logged out"))
    }
    if (true) {
        return (
            <View style={{ flex: 1, backgroundColor: "red" }}>
                <Text>LOADING</Text>
                <Button
                    styl={{ flex: 1 }}
                    onPress={logOut}
                    title="LOGOUt"
                    color="#841584"
                ></Button>
                <UserNavigation />
            </View>
        )
    } else {
        return (
            <View style={{ flex: 1, backgroundColor: "green" }}></View>
        )
    }
}

export default UserNavigation