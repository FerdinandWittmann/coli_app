import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import { Keyboard, View, TextInput, Text, Button } from 'react-native'
import { TokenContext } from "../GlobalState/TokenContext"
import '../global'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from '../Components/LoadingScreen'
import AppCards from '../Applicant/Container/AppCardsScreen'
import AppChat from '../Applicant/Container/AppChatScreen'
import AppProfile from '../Applicant/Container/AppProfileScreen'
import HouseCards from '../Container/HouseCardsScreen'
import AdvCards from '../Advertiser/Container/AdvCardsScreen'
import AdvChat from '../Advertiser/Container/AdvChatScreen'
import AdvProfile from '../Advertiser/Container/AdvProfileScreen'
import DropdownPicker from 'react-native-dropdown-picker'
import { getUser, createCards } from '../Api/user'
import auth from '@react-native-firebase/auth'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
const ApiNav = ({
}) => {
    const tokenRef = useContext(TokenContext)
    const [user, setUser] = useState()
    const Tab = createMaterialTopTabNavigator()
    const [role, setRole] = useState()
    const [city, setCity] = useState()
    const [flatsize, setFlatsize] = useState()
    const [freeRooms, setFreeRooms] = useState()
    const [keyboard, setKeyboard] = useState()
    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow)
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide)
        const subscriberToken = auth().onIdTokenChanged(onIdTokenChanged)
        getUser(tokenRef.current.token)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then((u) => {
                console.log(u)
                setUser(u)
            })
            .catch((error) => {
                console.log(error)
            })
        return () => {
            subscriberToken
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow)
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide)
        }

    }, [])

    function onIdTokenChanged(user) {
        if (user != null) {
            user.getIdTokenResult()
                .then((jwtToken) => {
                    tokenRef.current = {
                        token: jwtToken.token,
                        exp: jwtToken.exp
                    }
                    setLoggedIn(1)
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
    function setupUser() {
        let json = null
        if (role && role == "advertiser") {
            json = JSON.stringify({
                freerooms: freeRooms,
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
        console.log(
            json
        )
        createCards(tokenRef.current.token, json, role)
            .then((u) => {
                setUser(u)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    function advertPicker() {
        if (role == "advertiser") {
            return (
                <View style={{ flex: 1 }}>
                    <DropdownPicker
                        items={[
                            { label: '1', value: 1 },
                            { label: '2', value: 2 },
                            { label: '3', value: 3 },
                            { label: '4', value: 4 },
                            { label: '5', value: 5 },
                            { label: '6', value: 6 },
                            { label: '7', value: 7 },
                            { label: '8', value: 8 },
                            { label: '9', value: 9 },
                            { label: '10', value: 10 },
                        ]}
                        containerStyle={{ height: 40 }}
                        style={{ backgroundColor: '#fafafa' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        placeholder="For how many people is your shared-flat?"
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        onChangeItem={(item) => setFlatsize(item.value)
                        }
                    />
                    <DropdownPicker
                        items={[
                            { label: '1', value: 1 },
                            { label: '2', value: 2 },
                            { label: '3', value: 3 },
                            { label: '4', value: 4 },
                            { label: '5', value: 5 },
                            { label: '6', value: 6 },
                            { label: '7', value: 7 },
                            { label: '8', value: 8 },
                            { label: '9', value: 9 },
                            { label: '10', value: 10 },
                        ]}
                        containerStyle={{ height: 40 }}
                        style={{ backgroundColor: '#fafafa' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        placeholder="How many rooms are free in your flat?"
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        onChangeItem={(item) => setFreeRooms(item.value)
                        }
                    />
                </View>
            )
        } else {
            return (
                <View style={{ flex: 1 }} ></ View>
            )
        }
    }
    if (!user) {
        return (
            <SplashScreen />
        )
    }
    if (!user.role) {
        return (
            <View style={{ flex: 1 }}>
                <Text>Chose your Role</Text>
                <View style={{ flex: 1 }}>
                    <DropdownPicker
                        items={[
                            { label: 'Searching', value: 'applicant' },
                            { label: 'Offering', value: 'advertiser' },
                        ]}
                        containerStyle={{ height: 40 }}
                        style={{ backgroundColor: '#fafafa' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        placeholder="Are you offering or searching a room?"
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        onChangeItem={(item) => setRole(item.value)
                        }
                    /></View>
                {advertPicker()}
                <View style={{ flex: 1 }}>
                    <Text>City</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => setCity(text)}
                        value={city}
                    />
                    <Button
                        onPress={setupUser}
                        title="Setup"
                        color="#841584"
                    ></Button>
                </View>
            </View >
        )
    }
    else if (user.role == "applicant") {
        return (
            <NavigationContainer>
                <Tab.Navigator

                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            if (route.name == "AppCards") {
                                iconName = 'cards'
                                return <MCIcon name={iconName} style={{ fontSize: STYLES.tabBarIconSize }} />
                            } else if (route.name == "Chat") {
                                iconName = 'chat'
                                return <MCIcon name={iconName} style={{ fontSize: STYLES.tabBarIconSize }} />
                            } else if (route.name == "Profile") {
                                iconName = "account-settings"
                                return <MCIcon name={iconName} style={{ fontSize: STYLES.tabBarIconSize }} />
                            }
                        }
                    })}
                    tabBarOptions={{
                        indicatorStyle: { backgroundColor: STYLES.backgroundColor },
                        showLabel: false,
                        showIcon: true,
                    }}

                    style={keyboard ? { marginBottom: -60 } : { marginBottom: 0 }}
                    tabBarPosition={'bottom'}>
                    <Tab.Screen name="AppCards" component={AppCards} />
                    {/*<Tab.Screen name="HouseCards" component={HouseCards} />*/}
                    <Tab.Screen name="Chat" component={AppChat} />
                    <Tab.Screen
                        name="Profile"
                        initialParams={{ carditems: user.carditems }}
                        component={AppProfile} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    } else if (user.role == "advertiser") {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            if (route.name == "AppCards") {
                                iconName = 'cards'
                                return <MCIcon name={iconName} style={{ fontSize: STYLES.tabBarIconSize }} />
                            } else if (route.name == "Chat") {
                                iconName = 'chat'
                                return <MCIcon name={iconName} style={{ fontSize: STYLES.tabBarIconSize }} />
                            } else if (route.name == "Profile") {
                                iconName = "account-settings"
                                return <MCIcon name={iconName} style={{ fontSize: STYLES.tabBarIconSize }} />
                            }
                        }
                    })}
                    tabBarOptions={{
                        indicatorStyle: { backgroundColor: STYLES.backgroundColor },
                        showLabel: false,
                        showIcon: true,
                    }}

                    style={keyboard ? { marginBottom: -60 } : { marginBottom: 0 }}
                    tabBarPosition={'bottom'}>
                    <Tab.Screen name="AppCards" component={AdvCards} />
                    <Tab.Screen name="Chat" component={AdvChat} />
                    <Tab.Screen
                        name="Profile"
                        initialParams={{ carditems: user.carditems }}
                        component={AdvProfile} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
};
export default ApiNav;