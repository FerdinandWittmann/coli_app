
import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef, createContext } from 'react';
import '../global'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Registration from '../Auth/RegistrationScreen';
import Login from '../Auth/LoginScreen';
import ApiNav from './ApiNav'
import auth from '@react-native-firebase/auth'
import { TokenProvider } from '../GlobalState/TokenContext'
import { getUser } from '../Api/user'
const App = () => {
    const tokenRef = useRef(null)
    const Tab = createMaterialBottomTabNavigator()
    const [loggedIn, setLoggedIn] = useState(0)
    useEffect(() => {
        const subscriberToken = auth().onUserChanged(onUserChanged)
        return () => {
            subscriberToken
        } // unsubscribe on unmount
    }, [])

    function onUserChanged(user) {
        if (user != null && loggedIn != 1) {
            if (!tokenRef.current || tokenRef.current.exp - Date.now() < 1000)
                user.getIdTokenResult()
                    .then((jwtToken) => {
                        getUser(jwtToken.token)
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
            <TokenProvider token={tokenRef}>
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="Login" component={Login} />
                        <Tab.Screen name="Register" component={Registration} />
                    </Tab.Navigator>
                </NavigationContainer>
            </TokenProvider>
        )
    } else {
        return (
            <TokenProvider token={tokenRef}>
                <ApiNav />
            </TokenProvider >
        )
    }
};
export default App;