import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import auth from '@react-native-firebase/auth'
import { Button, View, Alert, Text, TextInput } from 'react-native'
import useAuthToken from "../GlobalState/useAuthToken"
import { TokenContext } from "../Nav/App"
const App = ({
    navigation
}) => {
    const tokenRef = useContext(TokenContext)
    const [initializing, setInitializing] = useState(true);
    const [authToken, authTokenActions] = useAuthToken()
    const [email, setEmail] = useState("g@g.de")
    const [pwd, setPwd] = useState("11111111")
    const server = global.server
    useEffect(() => {
        const subscriberAuth = auth().onUserChanged(onUserChanged)
        return subscriberAuth // unsubscribe on unmount
    }, [])

    // If User or Token Changes this gets called
    function onUserChanged(user) {
        if (user != null) {
            if (!authToken.set || authToken.token.exp - Date.now() < 1000)
                user.getIdTokenResult()
                    .then((jwtToken) => {
                        fetch(server + "user",
                            {
                                method: 'GET',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                    'Authorization': jwtToken.token
                                },
                            })
                            .then((response) => {
                                if (response.ok) {
                                    authTokenActions.setToken(jwtToken)
                                    tokenRef.current = jwtToken.token
                                }
                            })
                            .catch((error) => {
                                console.log(error)
                            })
                    })
                    .catch((error) => {
                        console.log(error)
                    })
        }
        if (initializing) setInitializing(false)
    }

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

    if (initializing) return null
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