import React from 'react'
import globalHook from 'use-global-hook'
import auth from '@react-native-firebase/auth'

const actions = {
    checkToken: (store, token, user) => {
        if (store.Token == null || token.claims.exp - Date.now() < 10000) {
            user.getIdTokenResult()
                .then((jwtToken) => {
                    store.setState({ Token: jwtToken, Init: true })
                })
                .catch((error) => {
                    console.log("Error")
                })
        }
    }
}
const useFToken = globalHook(React, { Token: "empty", Init: false }, actions)
export default useFToken