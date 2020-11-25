import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import { Keyboard, View, TextInput, Text, Button } from 'react-native'
import { TokenContext } from "./App"
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
import { getUser, updateUser } from '../Api/profile'
const ApiNav = ({
}) => {
    const tokenRef = useContext(TokenContext)
    const [user, setUser] = useState()
    const Tab = createMaterialTopTabNavigator()
    const [role, setRole] = useState()
    const [city, setCity] = useState()
    const [advForm, setAdvForm] = useState()
    const [keyboard, setKeyboard] = useState(false)
    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow)
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide)
        getUser(tokenRef.current.token)
            .then((u) => {
                console.log(u)
                setUser(u)
            })
            .catch((error) => {
                console.log(error)
            })
        /*fetch(server + "user",
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': tokenRef.current.token

                },
            })
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
            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow)
            Keyboard.removeListener('keyboardDidHide', _keyboardDidHide)
        }*/
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow)
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide)
        }

    }, [])
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
                ...user,
                role: role,
                advForm: advForm,
                city: city
            })
        } else {
            json = JSON.stringify({
                ...user,
                role: role,
                city: city
            })
        }
        console.log(
            json
        )
        updateUser(tokenRef.current.token, json)
            .then((u) => {
                setUser(u)
            })
            .catch((error) => {
                console.log(error)
            })
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
                <Text>Chose Advertisement Type</Text>
                <View style={{ flex: 1 }}>
                    <DropdownPicker
                        items={[
                            { label: 'Shared Living Space', value: 'shared' },
                            { label: 'Individual Home', value: 'individual' },
                        ]}
                        containerStyle={{ height: 40 }}
                        style={{ backgroundColor: '#fafafa' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        placeholder="Is the property shared or individual?"
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        onChangeItem={(item) => setAdvForm(item.value)
                        }
                    /></View>
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
                <Tab.Navigator style={keyboard ? { marginBottom: -60 } : { marginBottom: 0 }} tabBarPosition={'bottom'}>
                    <Tab.Screen name="AppCards" component={AppCards} />
                    {/*<Tab.Screen name="HouseCards" component={HouseCards} />*/}
                    <Tab.Screen name="Chat" component={AppChat} />
                    <Tab.Screen
                        name="Profile"
                        initialParams={{ user: user }}
                        component={AppProfile} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    } else if (user.role == "advertiser") {
        return (
            <NavigationContainer>
                <Tab.Navigator style={keyboard ? { marginBottom: -60 } : { marginBottom: 0 }} tabBarPosition={'bottom'}>
                    <Tab.Screen name="AppCards" component={AdvCards} />
                    <Tab.Screen name="Chat" component={AdvChat} />
                    <Tab.Screen
                        name="Profile"
                        initialParams={{ user: user }}
                        component={AdvProfile} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
};
export default ApiNav;