import React from 'react'
import { View, Image } from 'react-native'

const Avatar = ({
    card, _height
}) => {
    if (card.images && card.images.length > 0) {
        return (
            <Image style={{ height: _height, width: _height, borderRadius: 30 }} source={{ uri: imageServer + card.images[0] }} />
        )
    }
    return (
        <View style={{ height: _height, width: _height }} />
    )
}
export default Avatar