import React from 'react'
import { TouchableOpacity } from 'react-native'

const TouchableTextObject = ({
    onObjectPressed,
    name,
    object,
}) => {
    return (
        <TouchableOpacity
            onPress={() => {
                onObjectPressed(name)
            }}
        >
            {object}
        </TouchableOpacity>
    )
}
export default TouchableTextObject