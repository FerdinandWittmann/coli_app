
import React from 'react'
import globalHook from 'use-global-hook'
import auth from '@react-native-firebase/auth'
const actions = {
    postUser: (store, user) => {
        store.setState(user)
    }
}

const useFUser = globalHook(React, null, actions)
export default useFUser