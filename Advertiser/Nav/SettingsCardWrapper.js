import React, { useState } from 'react'
import RoomForm from '../Container/RoomForm'
import FlatmatesForm from '../Container/FlatmatesForm'
import AdvForm from '../Container/AdvForm'
import SettingsCard from '../../Container/SettingsCard'
import { View } from 'react-native'
import useCardItems from '../../GlobalState/useCardItems'
const SettingsCardWrapper = ({
    route,
}) => {
    let cardItem = route.params.cardItem
    if (cardItem.name == "profile") {
        return (
            <View style={{ flex: 1, transform: [{ rotateY: '180deg' }] }}>
                <SettingsCard cardItem={cardItem} form={<AdvForm />} />
            </View>
        )
    } else if (cardItem.name == "room") {
        return (
            <View style={{ flex: 1, transform: [{ rotateY: '180deg' }] }}>
                <SettingsCard cardItem={cardItem} form={<RoomForm />} />
            </View>
        )
    }
    else {
        return (
            <View style={{ flex: 1, transform: [{ rotateY: '180deg' }] }}>
                <SettingsCard cardItem={cardItem} form={<FlatmatesForm />} />
            </View>

        )
    }
}
export default SettingsCardWrapper