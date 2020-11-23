
import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import SettingsCardWrapper from './SettingsCardWrapper'
const AdvSettingsNav = ({
}) => {

    const Tab = createMaterialTopTabNavigator()
    return (
        <View style={{ flex: 1, transform: [{ rotateY: '180deg' }] }}>
            <Tab.Navigator tabBarPosition={'top'}>
                <Tab.Screen name="Room" initialParams={{ form: "RoomForm" }} component={SettingsCardWrapper} />
                <Tab.Screen name="Flatmates" initialParams={{ form: "FlatmatesForm" }} component={SettingsCardWrapper} />
                <Tab.Screen name="Profile" initialParams={{ form: "AdvForm" }} component={SettingsCardWrapper} />
            </Tab.Navigator>
        </View>
    )
}
var styles = StyleSheet.create({


})
export default AdvSettingsNav 