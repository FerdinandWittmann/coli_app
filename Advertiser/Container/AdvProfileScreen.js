
import React, { useCallback, useEffect, useState } from 'react'
import { Button, View, Text, StyleSheet, ImageBackground } from 'react-native'
import AdvSettingsNav from '../Nav/AdvSettingsNav'
import MaterialNavigator from '../../Nav/Navigator/MaterialNavigator'
import AdvProfileNav from '../Nav/AdvProfileNav'
import Profile from '../../Container/Profile'
const AdvProfileScreen = ({
    route,
    navigation
}) => {

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, resizeMode: 'stretch' }} source={require('../../Resources/BackgroundImages/3.jpg')}>
                <Profile
                    user={route.params.user}
                    //settings={<AdvSettingsNav user={route.params.user}></AdvSettingsNav>}
                    profile={<View />}
                    settings={<MaterialNavigator
                        navButtons={[
                            { name: "settings" }, { name: "home" }, { name: "group" }, { name: "person" }
                        ]}
                    />
                    }
                    getProfile={<AdvProfileNav user={route.params.user}></AdvProfileNav>}
                />
            </ImageBackground>
        </View>

    )
}
var styles = StyleSheet.create({
})
export default AdvProfileScreen 