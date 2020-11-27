
import React, { useCallback, useEffect, useState } from 'react'
import { Button, View, Text, StyleSheet, ImageBackground } from 'react-native'
import AdvSettingsNav from '../Nav/AdvSettingsNav'
import AdvProfileNav from '../Nav/AdvProfileNav'
import Profile from '../../Container/Profile'
const AdvProfileScreen = ({
}) => {

    const updateState = [{
        name: "room",
        state: null,
    }, {
        name: "flatmates",
        state: null,
    }, {
        name: "adv",
        state: null
    }]
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, resizeMode: 'stretch' }} source={require('../../Resources/BackgroundImages/3.jpg')}>
                <Profile
                    updateState={updateState}
                    profileScreen={<AdvProfileNav ></AdvProfileNav>}
                    settingsScreen={<AdvSettingsNav ></AdvSettingsNav>}
                />
            </ImageBackground>
        </View>

    )
}
var styles = StyleSheet.create({
})
export default AdvProfileScreen 