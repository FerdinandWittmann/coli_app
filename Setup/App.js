
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
import { authUser } from '../Api/user'
import MIcon from 'react-native-vector-icons/MaterialIcons'

LogBox.ignoreLogs(['Warning: Remote Debugger'])
const App = () => {
    const tokenRef = useRef(null)
    const Tab = createMaterialTopTabNavigator()
    const [user, setUser] = useState()
    useEffect(() => {
        const subscriberToken = auth().onUserChanged(onUserChanged)
        return () => {
            subscriberToken
        } // unsubscribe on unmount
    }, [])

    function onUserChanged(fireUser) {
        if (fireUser != null && !user) {
            if (!tokenRef.current || tokenRef.current.exp - Date.now() < 1000)
                fireUser.getIdTokenResult()
                    .then((jwtToken) => {
                        authUser(jwtToken.token)
                            .then((response) => {
                                if (response.ok) {
                                    tokenRef.current = {
                                        token: jwtToken.token,
                                        exp: jwtToken.exp
                                    }
                                    return response.json()
                                }
                            })
                            .then((json) => {
                                setUser(json)
                            })
                            .catch((error) => {
                                console.log(error)
                            })
                    })
                    .catch((error) => {
                        console.log(error)
                    })
        } else if (fireUser == null) {
            tokenRef.current = null
            setUser(null)
        }
    }
    if (!user) {
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
        console.log(user)
        return (
            <TokenProvider token={tokenRef}>
                <ApiNav _user={user} />
            </TokenProvider >
        )
    }
};
export default App;