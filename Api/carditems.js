export function getCardItems(token) {
    return fetch(server + "carditems",
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

export function updateCardItems(token, json) {
    return fetch(server + "carditems",
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token

            },
            body: json
        })
}