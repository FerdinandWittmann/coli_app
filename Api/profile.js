export function updateProfile(token, json) {
    return fetch(server + "profile",
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