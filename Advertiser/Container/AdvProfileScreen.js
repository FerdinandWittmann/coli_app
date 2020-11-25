
import React, { useCallback, useEffect, useState } from 'react'
import { Button, View, Text, StyleSheet, ImageBackground } from 'react-native'
import AdvSettingsNav from '../Nav/AdvSettingsNav'
import AdvProfileNav from '../Nav/AdvProfileNav'
import Profile from '../../Container/Profile'
const AdvProfileScreen = ({
    route,
    navigation
}) => {
    const getProfile = useCallback((user) => {
        return (<AdvProfileNav user={user}></AdvProfileNav>)
    }, [])

    const getSettings = useCallback((user) => {
        return (<AdvSettingsNav user={user}></AdvSettingsNav>)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, resizeMode: 'stretch' }} source={require('../../Resources/BackgroundImages/3.jpg')}>
                <Profile
                    user={route.params.user}
                    getSettings={getSettings}
                    getProfile={getProfile}
                />
            </ImageBackground>
        </View>

    )
}
var styles = StyleSheet.create({
})
export default AdvProfileScreen 