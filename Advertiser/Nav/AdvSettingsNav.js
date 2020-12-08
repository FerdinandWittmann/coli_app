import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
const AdvSettingsNav = ({
    cardItems,
    children
}) => {

    const Tab = createMaterialTopTabNavigator()

    return (
        <View style={{ backgroundColor: 'white', flex: 1, transform: [{ rotateY: '180deg' }] }}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name.includes("room")) {
                            iconName = 'home'
                            return <MCIcon name={iconName} style={{ fontSize: STYLES.tabBarIconSize }} />
                        } else if (route.name == "flatmates") {
                            iconName = 'account-group'
                            return <MCIcon name={iconName} style={{ fontSize: STYLES.tabBarIconSize }} />
                        } else if (route.name == "profile") {
                            iconName = "account"
                            return <MCIcon name={iconName} style={{ fontSize: STYLES.tabBarIconSize }} />
                        }
                    }
                })}
                tabBarOptions={{
                    indicatorStyle: { backgroundColor: STYLES.backgroundColor },
                    showLabel: false,
                    showIcon: true,
                }}
                tabBarPosition={'top'}
            >
                {cardItems.map((cardItem, key) => {
                    return <Tab.Screen
                        key={key}
                        name={cardItem.name == "room" && cardItem.number.$numberInt != "1" ?
                            cardItem.name + cardItem.number.$numberInt :
                            cardItem.name}
                        initialParams={{ cardItem: cardItem }}
                        component={children} />
                })}
            </Tab.Navigator>
        </View>
    )
}
var styles = StyleSheet.create({


})
export default AdvSettingsNav 