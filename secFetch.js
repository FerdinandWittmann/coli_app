import React from 'react'
import useFToken from './GlobalState/useFToken'
import useFUser from './GlobalState/useFUser'

secFetchJson = (method, body, url) => {
    const [ftoken, setFToken] = useFToken()
    const [fUser, setFUser] = useFUser()

    if ((ftoken == null && fUser != null || ftoken.claims.exp - Date.now() <= 10000)) {
        fUser.getIdTokenResult()
            .then((jwtToken) => {
                setFToken.postToken(jwtToken, fUser)
                body.FToken = jwtToken
                return extfetch(method, body, url)
            })
            .catch((error) => {
                return JSON.stringify({ Error: error })
            })
    } else if (ftoken.claims.exp - Date.now > 10000) {
        return extfetch(method, body, url)
    } else {
        return JSON.stringify({ Error: "FirebaseUser: Not Logged In" })
    }
}

function extfetch(method, body, url) {
    fetch(global.ip + global.port + url, {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: body
    })
        .then(((response) => response.json()))
        .then((json) => {
            return json
        })
        .catch((error) => {
            return JSON.stringify({ Error: error })
        })
}
export default secFetchJson