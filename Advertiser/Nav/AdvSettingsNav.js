
import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import SettingsCardWrapper from './SettingsCardWrapper'
import MaterialNavigator from '../../Nav/Navigator/MaterialNavigator'
import AdvForm from '../Container/AdvForm'
import FlatmatesForm from '../Container/FlatmatesForm'
import RoomForm from '../Container/RoomForm'
const AdvSettingsNav = ({
    user
}) => {
    const [update, setUpdate] = useState(false)
    const Tab = createMaterialTopTabNavigator()

    const onSaveClicked = () => {
        setUpdate(true)
    }
    return (

        <View style={{ flex: 1, backgroundColor: "red", transform: [{ rotateY: '180deg' }] }}>
            <MaterialNavigator
                navButtons={[
                    { name: "settings", }, { name: "home" }, { name: "group" }, { name: "person" }
                ]}
                components={[<View></View>, <RoomForm update={update} />, <FlatmatesForm update={update} />, <AdvForm update={update} />]}
            />
        </View>
        /*
        <View style={{ flex: 1, transform: [{ rotateY: '180deg' }] }}>
            <Tab.Navigator tabBarPosition={'top'}>
                <Tab.Screen name="Room" initialParams={{ form: "RoomForm", user: user }} component={SettingsCardWrapper} />
                <Tab.Screen name="Flatmates" initialParams={{ form: "FlatmatesForm", user: user }} component={SettingsCardWrapper} />
                <Tab.Screen name="Profile" initialParams={{ form: "AdvForm", user: user }} component={SettingsCardWrapper} />
            </Tab.Navigator>
        </View>
        */
    )
}
var styles = StyleSheet.create({


})
export default AdvSettingsNav 