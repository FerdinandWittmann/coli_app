import React, { useEffect, useState } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'
import ProfileFrame from './ProfileFrame'
import LoadingScreen from '../Components/LoadingScreen'
const Profile = ({
    settings,
    profile,
}) => {
    let col = "yellow"
    const [mode, setMode] = useState(0)
    function logOut() {
        auth()
            .signOut()
            .then(() => console.log("successfull logged out"))
            .catch((error) => console.log(error))
    }
    useEffect(() => {
    }, [])

    function exitPressed() {
        if (mode == 1) {
            setMode(0)
        } else {
            setMode(1)
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.containerButtons}>
                <Button
                    onPress={exitPressed}
                    title={mode == 0 ? "settings" : "exit"}
                    color="#841584"
                />
                <Button
                    onPress={logOut}
                    title="LogOut"
                    color="#841584"
                />
            </View>
            <ProfileFrame
                mode={mode}
                settings={settings}
                loadingScreen={<LoadingScreen></LoadingScreen>}
                profile={profile}
            >
            </ProfileFrame >
        </View >
    )
}
var styles = StyleSheet.create({
    containerButtons: {
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})
export default Profile 