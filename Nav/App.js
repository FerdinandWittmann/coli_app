
import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef, createContext } from 'react';
import { LogBox } from 'react-native'
import '../global'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Registration from '../Auth/RegistrationScreen';
import Login from '../Auth/LoginScreen';
import ApiNav from './ApiNav'
import auth from '@react-native-firebase/auth'
import { TokenProvider } from '../GlobalState/TokenContext'
import { getUser } from '../Api/user'
import MIcon from 'react-native-vector-icons/MaterialIcons'

LogBox.ignoreLogs(['Warning: Remote Debugger'])
const App = () => {
    const tokenRef = useRef(null)
    const Tab = createMaterialTopTabNavigator()
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
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;
                                if (route.name == "Login") {
                                    iconName = 'login'
                                } else {
                                    iconName = 'assignment'
                                }
                                return <MIcon name={iconName} style={{ fontSize: STYLES.tabBarIconSize }} />
                            }
                        })}
                        tabBarOptions={{
                            indicatorStyle: { backgroundColor: STYLES.backgroundColor },
                            showLabel: false,
                            showIcon: true,
                        }}
                        tabBarPosition="bottom">
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