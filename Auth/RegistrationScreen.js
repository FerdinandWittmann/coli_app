
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import randomString from 'random-string'
import globalStyles from '../Styles/globalStyles'
import formStyles from '../Styles/profile'
function RegistrationScreen({ navigation }) {
    const [email, setEmail] = useState(randomString() + "@" + randomString() + ".de")
    const [pwd, setPwd] = useState(randomString())

    function registerWithEmail() {
        auth()
            .createUserWithEmailAndPassword(email, pwd)
            .then(() => console.log("Register: Success"))
            .catch((error) => Alert.alert("Register: " + error.message))
    }
    return (

        <View style={{ flex: 1, padding: 25 }}>

            <Text style={[formStyles.title, { fontSize: 30, paddingBottom: 15 }]} >Register</Text>
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
                    onPress={registerWithEmail}
                    title="Register"
                    color={STYLES.backgroundColor}
                ></Button>
            </View>
        </View>
    )
}

export default RegistrationScreen