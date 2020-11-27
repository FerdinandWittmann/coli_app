
import React, { createContext, useRef } from 'react'

export const TokenContext = createContext()

export const TokenProvider = ({
    children,
    token

}) => {
    return (
        <TokenContext.Provider value={token}>
            {children}
        </TokenContext.Provider>
    )
}