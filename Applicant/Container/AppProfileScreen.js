import React, { useEffect, useState } from 'react'
import { View, Text, Button, ImageBackground } from 'react-native'
import Profile from '../../Container/Profile'
import SettingsCard from '../../Container/SettingsCard'
import AppForm from './AppForm'
const AppProfileScreen = ({
    navigation
}) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, resizeMode: 'stretch' }} source={require('../../Resources/BackgroundImages/3.jpg')}>
                <Profile
                    settings={<SettingsCard form={<AppForm></AppForm>}></SettingsCard>}
                    profile={<View></View>} />
            </ImageBackground>
        </View>
    )
}
export default AppProfileScreen