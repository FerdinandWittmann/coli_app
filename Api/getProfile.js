export default function getProfile(token) {
    fetch(server + "profile/" + token,
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
                return response.json
            }
        })
        .then((json) => {
            return json
        })
        .catch((error) => {
            return error
        })
}