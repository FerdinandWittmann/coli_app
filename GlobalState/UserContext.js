import React, { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = ({
    children,
    _user

}) => {
    const [user, setUser] = useState(_user)
    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}