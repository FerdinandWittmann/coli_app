export async function uploadImage(token, image) {
    const imagePayload = new FormData()
    imagePayload.append('image', image)
    return fetch(server + "image",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': token

            },
            body: imagePayload
        })
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
        })
}