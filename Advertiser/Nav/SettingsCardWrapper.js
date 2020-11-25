import React from 'react'
import RoomForm from '../Container/RoomForm'
import FlatmatesForm from '../Container/FlatmatesForm'
import AdvForm from '../Container/AdvForm'
import SettingsCard from '../../Container/SettingsCard'
import { View } from 'react-native'
const SettingsCardWrapper = ({
    route,
    navigation
}) => {
    if (route.params.form == "AdvForm") {
        return (
            <View style={{ flex: 1, transform: [{ rotateY: '180deg' }] }}>
                <SettingsCard form={<AdvForm user={route.params.user} />}></SettingsCard>
            </View>
        )
    } else if (route.params.form == "RoomForm") {
        return (
            <View style={{ flex: 1, transform: [{ rotateY: '180deg' }] }}>
                <SettingsCard form={<RoomForm user={route.params.user} />}></SettingsCard>
            </View>
        )
    }
    else {
        return (

            <View style={{ flex: 1, transform: [{ rotateY: '180deg' }] }}>
                <SettingsCard form={<FlatmatesForm user={route.params.user} />}></SettingsCard>
            </View>

        )
    }
}
export default SettingsCardWrapper