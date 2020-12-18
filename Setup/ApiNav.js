import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import { Keyboard, View, TextInput, Text, Button } from 'react-native'
import { TokenContext } from "../GlobalState/TokenContext"
import '../global'
import SplashScreen from '../Components/LoadingScreen'
import { setupUser } from '../Api/user'
import auth from '@react-native-firebase/auth'
import RolePicker from './Components/RolePicker';
import ApplicantNav from './Nav/ApplicantNav';
import AdvertiserNav from './Nav/AdvertiserNav';

const ApiNav = ({
    _user
}) => {
    const tokenRef = useContext(TokenContext)
    const [roleObj, setRoleObj] = useState()
    const [user, setUser] = useState()
    const [role, setRole] = useState()
    const [city, setCity] = useState()
    const [flatsize, setFlatsize] = useState()
    const [freeRooms, setFreeRooms] = useState()
    const [keyboard, setKeyboard] = useState()
    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow)
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide)
        const subscriberToken = auth().onIdTokenChanged(onIdTokenChanged)
        setUser(_user)
        return () => {
            subscriberToken
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow)
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide)
        }

    }, [])

    //onIdTokenChanged update the Token for the whole application on Change
    function onIdTokenChanged(fireUser) {
        if (fireUser != null) {
            fireUser.getIdTokenResult()
                .then((jwtToken) => {
                    tokenRef.current = {
                        token: jwtToken.token,
                        exp: jwtToken.exp
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    function _keyboardDidShow() {
        setKeyboard(true)
    }
    function _keyboardDidHide() {
        setKeyboard(false)
    }
    function _setupUser() {
        let json = null
        if (role && role == "advertiser") {
            json = JSON.stringify({
                roomcount: freeRooms,
                role: role,
                flatsize: flatsize,
                city: city
            })
        } else {
            json = JSON.stringify({
                role: role,
                city: city
            })
        }
        setupUser(tokenRef.current.token, json, role)
            .then((roleObj) => {
                setRoleObj(roleObj)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    if (!user) {
        return (<SplashScreen />)
    }
    if (!roleObj) {
        return (
            <RolePicker
                role={role}
                setFlatsize={(value) => setFlatsize(value)}
                setFreeRooms={(value) => setFreeRooms(value)}
                _setupUser={() => _setupUser()}
                setCity={(value) => setCity(value)}
                setRole={(value) => setRole(value)}
                city={city} />
        )
    }
    else if (roleObj.role == "applicant") {
        return (
            <ApplicantNav keyboard={keyboard} />
        )
    } else if (roleObj.role == "advertiser") {
        <AdvertiserNav keyboard={keyboard} />
    }
};
export default ApiNav;