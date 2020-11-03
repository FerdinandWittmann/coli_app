import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, Text, Button } from 'react-native'
import '../global'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import SplashScreen from '../SplashScreen'
import AppCards from '../Screens/AppCardsScreen'
import AppChat from '../Screens/AppChatScreen'
import AppProfile from '../Screens/AppProfileScreen'
import HouseCards from '../Screens/HouseCardsScreen'
import AdvCards from '../Screens/AdvCardsScreen'
import AdvChat from '../Screens/AdvChatScreen'
import AdvProfile from '../Screens/AdvProfileScreen'
import DropdownPicker from 'react-native-dropdown-picker'

const ApiNav = ({
    authToken,
}) => {
    const [user, setUser] = useState()
    const Tab = createMaterialBottomTabNavigator()
    const [role, setRole] = useState()
    const [city, setCity] = useState()
    useEffect(() => {
        fetch(server + "user",
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': authToken

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
        return () => setUser(null)
    }, [])

    function setupUser() {
        console.log(
            JSON.stringify({
                ...user,
                role: role,
                city: city
            })
        )
        fetch(server + "user/" + authToken,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': authToken

                },
                body: JSON.stringify({
                    ...user,
                    role: role,
                    city: city
                })
            })
            .then((response) => {
                if (repsonse.ok) {
                    return response.json()
                }
            })
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
                <View style={{ flex: 1 }}>
                    <Text>City</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => setCity(city)}
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
                <Tab.Navigator>
                    <Tab.Screen name="AppCards" component={AppCards} />
                    <Tab.Screen name="HouseCards" component={HouseCards} />
                    <Tab.Screen name="Chat" component={AppChat} />
                    <Tab.Screen name="Profile" component={AppProfile} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    } else if (user.role == "advertiser") {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="AppCards" component={AdvCards} />
                    <Tab.Screen name="Chat" component={AdvChat} />
                    <Tab.Screen name="Profile" component={AdvProfile} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
};
export default ApiNav;