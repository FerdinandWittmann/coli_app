import React, { useContext, useEffect, useState } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'
import ProfileFrame from './ProfileFrame'
import LoadingScreen from '../Components/LoadingScreen'
import useProfile from '../GlobalState/useProfile'
import { TokenContext } from '../GlobalState/TokenContext'
const Profile = ({
    updateState,
    settingsScreen,
    profileScreen,
}) => {
    const token = useContext(TokenContext)
    const [mode, setMode] = useState(0)
    const [update, setUpdate] = useState(false)
    const [profile, profileActions] = useProfile()
    function logOut() {
        auth()
            .signOut()
            .then(() => console.log("successfull logged out"))
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        if (profile.state.length != 0) {
            if (profile.state.every((obj) => { return (obj.state != null) })) {

            }
        }
    }, [profile])
    function updateProfile() {
        profileActions.setState(updateState)
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
                settings={settingsScreen}
                loadingScreen={<LoadingScreen></LoadingScreen>}
                profile={profileScreen}
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