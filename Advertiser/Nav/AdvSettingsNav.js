import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SettingsCardWrapper from './SettingsCardWrapper'
import MyTapBar from '../../Components/MyTabBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
const AdvSettingsNav = ({
    user,
    carditems
}) => {

    const Tab = createMaterialTopTabNavigator()
    return (
        <View style={{ backgroundColor: 'white', flex: 1, transform: [{ rotateY: '180deg' }] }}>
            <Tab.Navigator tabBarPosition={'top'}
            >
                {carditems.map((carditem, key) => {
                    return <Tab.Screen
                        key={key}
                        name={carditem.name == "room" && carditem.number.$numberInt != "1" ?
                            carditem.name + carditem.number.$numberInt :
                            carditem.name}
                        initialParams={{ carditem: carditem }}
                        component={SettingsCardWrapper} />
                })}
            </Tab.Navigator>
        </View>
    )
}
var styles = StyleSheet.create({


})
export default AdvSettingsNav 