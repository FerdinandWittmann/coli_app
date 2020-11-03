import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('...')
    const [pwd, setPwd] = useState('...')


    function createFirebaseUser() {
        auth()
            .createUserWithEmailAndPassword(email, pwd)
            .then(() => {
                console.log('Registration: successfull')
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert("Email address already in use");
                }

                if (error.code === 'auth/invalid-email') {
                    Alert.alert("That email address is invalid")
                }
                if (error.code === 'auth/weak-password') {
                    Alert.alert("That password needs to be at least 6 characters")
                }
                console.error(error)
            })
    }
    return (
        <View>
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
                onPress={createFirebaseUser}
                title="SUBMIT"
                color="#841584"
            ></Button>
        </View>
    )
}


export default LoginScreen