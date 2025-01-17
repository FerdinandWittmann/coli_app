export function getMatchesApplicant(token) {
    return fetch(server + "matches/applicant",
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
export function getMatchesAdvertiser(token) {
    return fetch(server + "matches/advertiser",
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