
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import randomString from 'random-string'
function RegistrationScreen({ navigation }) {
    const [email, setEmail] = useState(randomString() + "@" + randomString() + ".de")
    const [pwd, setPwd] = useState(randomString())

    function registerWithEmail() {
        auth()
            .createUserWithEmailAndPassword(email, pwd)
            .then(() => console.log("Register: Success"))
            .catch((error) => console.log("Register: " + error))
    }
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
                onPress={registerWithEmail}
                title="Register"
                color="#841584"
            ></Button>
        </View>
    )
}

export default RegistrationScreen