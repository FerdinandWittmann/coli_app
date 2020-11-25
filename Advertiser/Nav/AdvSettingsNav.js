
import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SettingsCardWrapper from './SettingsCardWrapper'
const AdvSettingsNav = ({
    user
}) => {

    const Tab = createMaterialTopTabNavigator()
    return (
        <View style={{ flex: 1, transform: [{ rotateY: '180deg' }] }}>
            <Tab.Navigator tabBarPosition={'top'}>
                <Tab.Screen name="Room" initialParams={{ form: "RoomForm", user: user }} component={SettingsCardWrapper} />
                <Tab.Screen name="Flatmates" initialParams={{ form: "FlatmatesForm", user: user }} component={SettingsCardWrapper} />
                <Tab.Screen name="Profile" initialParams={{ form: "AdvForm", user: user }} component={SettingsCardWrapper} />
            </Tab.Navigator>
        </View>
    )
}
var styles = StyleSheet.create({


})
export default AdvSettingsNav 