
import React from 'react'
import globalHook from '../use-global-hook'

const actions = {
    setToken: (store, token) => {
        store.setState({ token: token, set: true })
    },
    setNull: (store, token) => {
        store.setState({ set: false })
    },
}

const useAuthToken = globalHook(React, { set: false }, actions)
export default useAuthToken