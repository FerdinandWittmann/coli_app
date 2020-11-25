import React from 'react'
import globalHook from 'use-global-hook'

const actions = {
    setUser: (store, user) => {
        store.setState({
            ...user
        })
    }
}

const useProfile = globalHook(React, {}, actions)
export default useProfile