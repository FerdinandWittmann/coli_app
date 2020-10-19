import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import useFUser from '../GlobalState/useFUser';
import useFToken from '../GlobalState/useFToken';
import secFetchJson from '../secFetch';
function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('...')
    const [pwd, setPwd] = useState('...')
    const [initializing, setInitializing] = useState(true);
    const [fuser, setFUser] = useFUser();
    const [ftoken, setFToken] = useFToken()
    const [user, setUser] = useState()
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    useEffect(() => {
        if (ftoken.Init == false) {
            if (fuser != null) {
                fuser._auth._user.getIdTokenResult()
                    .then((jwtToken) => {
                        setFToken.postToken(jwtToken, fUser)
                    })
                    .catch((error) => {
                        Alert.alert("FirebaseUser: SessionToken could not be obtained")
                    })
            }
        } else if (fuser != null && ftoken.Init != false) {
            createApiUser()
        }
    }, [fuser, ftoken.Init])
    function onAuthStateChanged(user) {
        setFUser.postUser(user);
        if (initializing) setInitializing(false);
    }

    function createApiUser() {
        setUser("")
        /*setUser(secFetchJson(
            'POST',
            JSON.stringify({
                Email: fuser.email,
                FirebaseID: fuser.uid,
                FirebaseToken: ftoken.token
            }),
            "/user"
        ))*/
    }

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

    function logOut() {
        auth().signOut().then(() => Alert.alert("You are succesfully logged out"))
    }


    if (initializing) return null;

    if (!fuser) {
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
        );
    }

    return (
        <View>
            <Text>Welcome {fuser.email}</Text>
            <Button
                onPress={logOut}
                title="Log Out"
                color="#841584"
            ></Button>
            <Button
                onPress={createApiUser}
                title="APIUSER"
                color="#841584"
            ></Button>
        </View>
    );
}

export default LoginScreen