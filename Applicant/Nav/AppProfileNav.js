import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ProfileCard from '../../Container/ProfileCard'
const AppProfileNav = ({
    cardItems,
}) => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <ProfileCard cardItem={cardItems[0]} />
        </View>
    )
}
var styles = StyleSheet.create({


})
export default AppProfileNav