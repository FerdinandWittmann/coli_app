
import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef, createContext } from 'react';
import '../global'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import SplashScreen from '../SplashScreen'
import Registration from '../Auth/RegistrationScreen';
import Login from '../Auth/LoginScreen';
import ApiNav from './ApiNav'
import auth from '@react-native-firebase/auth'

export const TokenContext = createContext()

const App = () => {
    const tokenRef = useRef(null)
    const Tab = createMaterialBottomTabNavigator()
    const [loggedIn, setLoggedIn] = useState(0)

    useEffect(() => {
        const subscriberAuth = auth().onAuthStateChanged(onAuthStateChanged)
        return subscriberAuth // unsubscribe on unmount
    }, [])
    useEffect(() => {
        const subscriberToken = auth().onIdTokenChanged(onIdTokenChanged)
        return subscriberToken // unsubscribe on unmount
    }, [])
    function onIdTokenChanged(user) {
        if (user != null && loggedIn != 1) {
            if (!tokenRef.current || tokenRef.current.exp - Date.now() < 1000)
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
                                    tokenRef.current = {
                                        token: jwtToken.token,
                                        exp: jwtToken.exp
                                    }
                                    setLoggedIn(1)
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
    }

    function onAuthStateChanged(user) {
        if (user != null && loggedIn != 1) {
            if (!tokenRef.current || tokenRef.current.exp - Date.now() < 1000)
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
                                    tokenRef.current = {
                                        token: jwtToken.token,
                                        exp: jwtToken.exp
                                    }
                                    setLoggedIn(1)
                                }
                            })
                            .catch((error) => {
                                console.log(error)
                            })
                    })
                    .catch((error) => {
                        console.log(error)
                    })
        } else if (user == null) {
            tokenRef.current = null
            setLoggedIn(false)
        }
    }
    if (loggedIn == 0) {
        return (
            <TokenContext.Provider value={tokenRef}>
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="Login" component={Login} />
                        <Tab.Screen name="Register" component={Registration} />
                    </Tab.Navigator>
                </NavigationContainer>
            </TokenContext.Provider>
        )
    } else {
        return (

            <TokenContext.Provider value={tokenRef}>
                <ApiNav />
            </TokenContext.Provider>
        )
    }
};
export default App;