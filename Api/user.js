//authUser gets the User coresponding to firebaseID encoded in firebase Id returns user
export function authUser(token) {
    return fetch(server + "user",
        {
            method: 'POST',
            headers: {
                Accept: 'appplication/json',
                'Content-Type': 'application/json',
                'Authorization': token

            },
        })
}
//setUpUser sets the users role up and creates his card objects
export function setupUser(token, json, role) {
    return fetch(server + "user/setup",
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
