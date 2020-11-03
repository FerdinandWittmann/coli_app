import React from 'react'
import globalHook from 'use-global-hook'
import auth from '@react-native-firebase/auth'

const actions = {
    setState: (store, token) => {
        if (token != null) {
            store.setState({
                token: token,
                set: true
            })
        } else {
            store.setState({
                token: null,
                set: false
            })

        }
    }
}
const useFToken = globalHook(React, { token: null, set: false }, actions)
export default useFToken