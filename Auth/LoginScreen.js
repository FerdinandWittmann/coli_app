import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import auth from '@react-native-firebase/auth'
import { Button, View, Alert, Text, TextInput } from 'react-native'
import globalStyles from '../Styles/globalStyles'
import formStyles from '../Styles/profile'

const App = ({
}) => {
    const [email, setEmail] = useState("a@a.de")
    const [pwd, setPwd] = useState("111111")

    function signInFirebaseUser() {
        auth()
            .signInWithEmailAndPassword(email, pwd)
            .then(() => {
                console.log("Auth succesfull")
            })
            .catch((error) => {
                Alert.alert("SignUp: " + error.message)
            })

    }
    return (
        <View style={{ flex: 1, padding: 25 }}>
            <Text style={[formStyles.title, { fontSize: 30, paddingBottom: 15 }]} >Sign Up</Text>
            <View style={{ width: '100%', height: 250, backgroundColor: STYLES.mediumBackgroundColor, padding: 15, borderRadius: STYLES.largeRadius, justifyContent: 'center' }}>
                <Text style={formStyles.title}>EMAIL</Text>

                <TextInput
                    style={globalStyles.formTitle}
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <Text style={formStyles.title}>PASSWORD</Text>

                <TextInput
                    style={globalStyles.formTitle}
                    onChangeText={text => setPwd(text)}
                    value={pwd}
                />
                <Button
                    onPress={signInFirebaseUser}
                    title="Sign In"
                    color={STYLES.backgroundColor}
                ></Button>
            </View>
        </View>
    );
};
export default App;