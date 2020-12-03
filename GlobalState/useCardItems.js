import React from 'react'
import globalHook from 'use-global-hook'

const actions = {
    setState: (store, cardItems) => {
        store.setState(cardItems)
    },
    stageUpdate: (store) => {
        stagedCardItems = store.state.carditems.map((cardItem) => { return { ...cardItem, staged: "staged" } })
        store.setState({ carditems: stagedCardItems })
    },
    updateCard: (store, updateCard) => {
        let updatedCardItems = store.state.carditems.map((cardItem) => {
            if (cardItem.name == updateCard.name && cardItem.number.$numberInt == updateCard.number.$numberInt) {
                return {
                    ...updateCard, staged: "finished"
                }
            } else {
                return cardItem
            }
        })
        store.setState({ carditems: updatedCardItems })
    }
}
const useCardItems = globalHook(React, null, actions)
export default useCardItems