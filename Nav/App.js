
import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef, createContext } from 'react';
import '../global'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import SplashScreen from '../SplashScreen'
import Registration from '../Auth/RegistrationScreen';
import Login from '../Auth/LoginScreen';
import useAuthToken from '../GlobalState/useAuthToken'
import ApiNav from './ApiNav'

export const TokenContext = createContext()

const App = () => {
    const toxenRef = useRef(null)
    const [authToken, authTokenActions] = useAuthToken()
    const Tab = createMaterialBottomTabNavigator()
    function logOut() {
        auth()
            .signOut()
            .then(() => authTokenActions.setNull())
            .catch((error) => console.log(error))
    }
    if (!authToken.set) {
        return (
            <TokenContext.Provider value={toxenRef}>
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
            <ApiNav authToken={authToken.token.token} logOut={logOut} />
        )
    }
};
export default App;