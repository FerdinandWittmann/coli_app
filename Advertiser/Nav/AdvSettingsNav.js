import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
const AdvSettingsNav = ({
    cardItems,
    children
}) => {

    const Tab = createMaterialTopTabNavigator()

    return (
        <View style={{ backgroundColor: 'white', flex: 1, transform: [{ rotateY: '180deg' }] }}>
            <Tab.Navigator tabBarPosition={'top'}
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