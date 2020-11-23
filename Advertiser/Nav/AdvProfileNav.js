
import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'

const AdvProfileNav = ({
}) => {

    const Tab = createMaterialTopTabNavigator()
    return (
        <View></View>
        /*<NavigationContainer>
            <Tab.Navigator tabBarPosition={'top'}>
                <Tab.Screen name="Room" component={RoomForm} />
                <Tab.Screen name="Flatmates" component={FlatmatesForm} />
                <Tab.Screen name="Profile" component={AdvForm} />
            </Tab.Navigator>
        </NavigationContainer>
        */
    )
}
var styles = StyleSheet.create({


})
export default AdvProfileNav 