import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import useFToken from './GlobalState/useFToken'
import { secFetch } from './secFetch'
import auth from '@react-native-firebase/auth'
import useFUser from './GlobalState/useFUser'
ApiLogin = () => {
    const [fToken, setFToken] = useFToken()
    const [user, User] = useState()
    useEffect(() => {
        if (fToken.set) {
            fetch(global.ip + global.port + "/" + fToken.token + "/user", {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
                .then(((response) => response.json()))
                .then((json) => {
                    console.log(json)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [fToken])
    function logOut() {
        auth().signOut().then(() => Alert.alert("You are succesfully logged out"))
    }
    return (
        <View style={{ flex: 1, backgroundColor: "yellow" }}>

            <Button
                styl={{ flex: 1 }}
                onPress={logOut}
                title="LOGOUt"
                color="#841584"
            ></Button>
        </View>
    )
}

export default ApiLogin