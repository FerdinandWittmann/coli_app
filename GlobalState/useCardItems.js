import React from 'react'
import globalHook from 'use-global-hook'

const actions = {
    setState: (store, cardItems) => {
        store.setState(cardItems)
    },
    stageUpdate: (store) => {
        stagedCardItems = store.state.carditems.map((cardItem) => { return { ...cardItem, staged: true } })
        store.setState({ cardItems: stagedCardItems })
    },
    updateCard: (store, card) => {

    }
}
const useCardItems = globalHook(React, null, actions)
export default useCardItems