import React from 'react'
import globalHook from 'use-global-hook'

const actions = {
    setState: (store, state) => {
        store.setState({ state: state })
    },
    GET: (store, token) => {
        apiState = store.state.map((obj) => {

        })
    }
}
const initialState = {
}
const useProfile = globalHook(React, { state: [], profile: {} }, actions)
export default useProfile