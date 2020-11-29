import React from 'react'
import RoomForm from '../Container/RoomForm'
import FlatmatesForm from '../Container/FlatmatesForm'
import AdvForm from '../Container/AdvForm'
import SettingsCard from '../../Container/SettingsCard'
import { View } from 'react-native'
import useCardItems from '../../GlobalState/useCardItems'
const SettingsCardWrapper = ({
    route,
}) => {
    let carditem = route.params.carditem

    if (carditem.name == "profile") {
        return (
            <View style={{ flex: 1, transform: [{ rotateY: '180deg' }] }}>
                <AdvForm carditem={carditem} />
            </View>
        )
    } else if (carditem.name == "room") {
        return (
            <View style={{ flex: 1, transform: [{ rotateY: '180deg' }] }}>
                <RoomForm carditem={carditem} />
            </View>
        )
    }
    else {
        return (
            <View style={{ flex: 1, transform: [{ rotateY: '180deg' }] }}>
                <FlatmatesForm carditem={carditem} />
            </View>

        )
    }
}
export default SettingsCardWrapper