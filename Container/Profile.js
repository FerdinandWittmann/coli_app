import React, { useContext, useEffect, useState } from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'
import ProfileFrame from './ProfileFrame'
import LoadingScreen from '../Components/LoadingScreen'
import useCardItems from '../GlobalState/useCardItems'
import { TokenContext } from '../GlobalState/TokenContext'
import { getCardItems } from "../Api/carditems"
const Profile = ({
    cards,
    updateState,
    settingsScreen,
    profileScreen,
}) => {
    const tokenRef = useContext(TokenContext)
    const [mode, setMode] = useState(0)
    const [update, setUpdate] = useState(false)
    const [cardItems, cardItemsActions] = useCardItems()
    const [apiLoading, setApiLoading] = useState(true)
    function logOut() {
        auth()
            .signOut()
            .then(() => console.log("successfull logged out"))
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        getCardItems(tokenRef.current.token)
            .then((cardItems) => {
                cardItemsActions.setState(cardItems)
                setApiLoading(false)
            })
    }, [])

    useEffect(() => {
        console.log(cardItems)
    }, [cardItems])

    function updateProfile() {
        console.log("updatePressed")
        cardItemsActions.stageUpdate()
        //profileActions.setState(updateState)
    }
    function exitPressed() {
        if (mode == 1) {
            setMode(0)
        } else {
            setMode(1)
        }
    }
    if (apiLoading == true) {
        return (
            <LoadingScreen />
        )
    } else {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.containerButtons}>
                    <Button
                        onPress={exitPressed}
                        title={mode == 0 ? "settings" : "exit"}
                        color="#841584"
                    />
                    {mode == 1 ? <Button
                        onPress={updateProfile}
                        title="Save Changes"
                        color="#841584"
                    /> : null}
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
}
var styles = StyleSheet.create({
    containerButtons: {
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})
export default Profile 