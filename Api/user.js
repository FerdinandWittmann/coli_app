
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
}

export function createCards(token, json, role) {
    return fetch(server + "user/" + role,
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
