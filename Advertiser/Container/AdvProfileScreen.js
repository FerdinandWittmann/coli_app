
import React, { useEffect, useState } from 'react'
import { Button, View, Text, StyleSheet, ImageBackground } from 'react-native'
import AdvSettingsNav from '../Nav/AdvSettingsNav'
import AdvProfileNav from '../Nav/AdvProfileNav'
import Profile from '../../Container/Profile'
import SettingsCard from '../../Container/SettingsCard'
const AdvProfileScreen = ({
    navigation
}) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, resizeMode: 'stretch' }} source={require('../../Resources/BackgroundImages/3.jpg')}>
                <Profile
                    settings={<AdvSettingsNav></AdvSettingsNav>}
                    profile={<AdvProfileNav></AdvProfileNav>}
                />
            </ImageBackground>
        </View>

    )
}
var styles = StyleSheet.create({
})
export default AdvProfileScreen 