import React, { useEffect, useState } from 'react'
import { View, Text, Button, ImageBackground } from 'react-native'
import Profile from '../../Container/Profile'
import ProfileCard from '../../Container/ProfileCard'
import SettingsCard from '../../Container/SettingsCard'
import AppForm from './AppForm'
import auth from '@react-native-firebase/auth'
import AppSettingsNav from '../Nav/AppSettingsNav'
import AppProfileNav from '../Nav/AppProfileNav'
const AppProfileScreen = ({
    route
}) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, resizeMode: 'stretch' }} source={require('../../Resources/BackgroundImages/3.jpg')}>
                <Profile
                    profileScreen={<AppProfileNav />}
                    settingsScreen={<AppSettingsNav />}
                />
            </ImageBackground>
        </View>
    )
}
export default AppProfileScreen
/*
                <Profile
                    profileScreen={<ProfileCard cardItem={route.params.carditems[0]} />}
                    settingsScreen={<SettingsCard cardItem={route.params.carditems[0]} form={<AppForm />} />}
                />
                */