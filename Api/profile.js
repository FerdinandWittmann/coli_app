export function getUser(token) {
    return fetch(server + "user",
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token

            },
        })
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
        })
}

export function updateUser(token, json) {
    return fetch(server + "user",
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token

            },
            body: json
        })
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
        })
}