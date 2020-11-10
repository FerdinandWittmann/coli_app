import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import auth from '@react-native-firebase/auth'
import { Button, View, Alert, Text, TextInput } from 'react-native'
import useAuthToken from "../GlobalState/useAuthToken"
import { TokenContext } from "../Nav/App"
const App = ({
}) => {
    const [initializing, setInitializing] = useState(true);
    const [email, setEmail] = useState("g@g.de")
    const [pwd, setPwd] = useState("111111")

    function signInFirebaseUser() {
        auth()
            .signInWithEmailAndPassword(email, pwd)
            .then(() => {
                console.log("Auth succesfull")
            })
            .catch((error) => {
                Alert.alert(error.message)
            })

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
                onPress={signInFirebaseUser}
                title="Sign In"
                color="#841584"
            ></Button>
        </View>
    );
};
export default App;