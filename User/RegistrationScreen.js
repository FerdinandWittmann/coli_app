
import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native'

function RegistrationScreen({ navigation }) {
    const [email, setEmail] = React.useState('...')
    const [pwd, setPwd] = React.useState('...')
    const [userID, setUserID] = React.useState()

    fetch(global.ip + global.port + "/user", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Email: email,
            Pwd: pwd
        })
    })
        .then(((response) => response.json()))
        .then((json) => {
            setUserId(json._id.$oid)
            navigation.navigate('Tenant', {
                userID: userID,
                email: email,
            })
        })
        .catch((error) => {
            Alert.alert("Login Failed")
        })


    return (

        <View style={{ flex: 1 }}>
            <Text>EMAIL</Text>

            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <Text>PASSWORD</Text>

            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setPwd(text)}
                value={pwd}
            />
            <Button
                onPress={submitForm}
                title="SUBMIT"
                color="#841584"
            ></Button>
        </View>
    )
}

export default RegistrationScreen