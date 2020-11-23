import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
const AppSettingsNav = ({
}) => {
    const Tab = createMaterialTopTabNavigator()
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Text> AppProfileNav</Text>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Login" component={Login} />
                    <Tab.Screen name="Register" component={Registration} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    )
}
var styles = StyleSheet.create({


})
export default AppSettingsNav 