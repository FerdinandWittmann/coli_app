import React, { useState } from 'react'
import RoomForm from '../Container/RoomForm'
import FlatmatesForm from '../Container/FlatmatesForm'
import AdvForm from '../Container/AdvForm'
import SettingsCard from '../../Container/SettingsCard'
import { View } from 'react-native'
import useCardItems from '../../GlobalState/useCardItems'
import ProfileCard from '../../Container/ProfileCard'
import RoomCard from '../../Container/RoomCard'
import FlatmatesCard from '../../Container/FlatmatesCard'
const ProfileCardWrapper = ({
    route,
}) => {
    let cardItem = route.params.cardItem
    if (cardItem.name == "profile") {
        return (
            <ProfileCard cardItem={cardItem} />
        )
    } else if (cardItem.name == "room") {
        return (
            <RoomCard cardItem={cardItem} />
        )
    }
    else {
        return (
            <FlatmatesCard cardItem={cardItem} />

        )
    }
}
export default ProfileCardWrapper 