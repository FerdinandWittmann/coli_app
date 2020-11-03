import React from 'react'

export function secFetch(token, url, method, body) {
    fetch(global.ip + global.port + "/" + token + url, {
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