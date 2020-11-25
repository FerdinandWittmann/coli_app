import React, { useEffect, useState } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'
import ProfileFrame from './ProfileFrame'
import LoadingScreen from '../Components/LoadingScreen'
import useProfile from '../GlobalState/useProfile'
const Profile = ({
    getSettings,
    getProfile,
    user,
}) => {
    const [mode, setMode] = useState(0)
    const [profile, profileActions] = useProfile()
    function logOut() {
        auth()
            .signOut()
            .then(() => console.log("successfull logged out"))
            .catch((error) => console.log(error))
    }

    function updateProfile() {

        exitPressed()
    }
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
                    onPress={updateProfile}
                    title="Save Changes"
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
                settings={getSettings(user)}
                loadingScreen={<LoadingScreen></LoadingScreen>}
                profile={getProfile(user)}
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