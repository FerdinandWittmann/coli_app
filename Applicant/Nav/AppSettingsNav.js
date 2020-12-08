import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SettingsCard from '../../Container/SettingsCard'
import AppForm from '../Container/AppForm'
const AppSettingsNav = ({
    cardItems,
    children
}) => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <SettingsCard cardItem={cardItems[0]} form={<AppForm />} />
        </View>
    )
}
var styles = StyleSheet.create({


})
export default AppSettingsNav
/*
            <Tab.Navigator tabBarPosition={'top'}
            >
                {cardItems.map((cardItem, key) => {
                    return <Tab.Screen
                        key={key}
                        name={cardItem.name == "room" && cardItem.number.$numberInt != "1" ?
                            cardItem.name + cardItem.number.$numberInt :
                            cardItem.name}
                        initialParams={{ cardItem: cardItem }}
                        component={React.cloneElement(children, { cardItem: { cardItem } })} />
                })}
            </Tab.Navigator>
           */