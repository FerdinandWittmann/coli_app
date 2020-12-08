import React, { cloneElement, useContext, useEffect, useState } from 'react'
import { Button, View, Text, StyleSheet, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import ProfileFrame from './ProfileFrame'
import LoadingScreen from '../Components/LoadingScreen'
import useCardItems from '../GlobalState/useCardItems'
import { TokenContext } from '../GlobalState/TokenContext'
import { getCardItems, updateCardItems } from "../Api/carditems"
import { uploadImages } from '../Api/images'
const Profile = ({
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
            .then((_cardItems) => {
                cardItemsActions.setState(_cardItems)
            })
    }, [])
    useEffect(() => {
        let finished = true
        if (cardItems && cardItems.carditems) {
            setApiLoading(false)
            cardItems.carditems.map((_cardItem) => {
                if (!_cardItem.staged || _cardItem.staged != "finished") {
                    finished = false
                }
            })
            if (finished) {
                let json = JSON.stringify({ carditems: cardItems.carditems })
                updateCardItems(tokenRef.current.token, json)
                    .then((response) => {
                        if (response.ok) {
                            return response.json()
                        }
                        if (response.status == 491) {
                            Alert.alert("Address could not be decoded")
                            return response.json()
                        }
                    })
                    .then((_cardItems) => {
                        cardItemsActions.setState(_cardItems)
                        setMode(0)
                    })
            }
        }
    }, [cardItems])


    function updateProfile() {
        cardItemsActions.stageUpdate()
        /*console.log("updatePressed")
        cardItemsActions.stageUpdate()
        if (update == false) {
            setUpdate(true)
        } else {
            setUpdate(false)
        }*/
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
                    settings={cloneElement(settingsScreen, { cardItems: cardItems.carditems, update: update })}
                    loadingScreen={<LoadingScreen></LoadingScreen>}
                    profile={cloneElement(profileScreen, { cardItems: cardItems.carditems, update: update })}
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