import React from 'react'
import { View, Text } from 'react-native'
import globalStyles from '../Styles/globalStyles.js'
const TextObject = ({
    text,
    selected
}) => {
    const g = global.STYLES
    return (
        <View style={[globalStyles.object, selected ? { borderWidth: 2 } : {}]}>
            <Text style={globalStyles.objectText}> {text}</Text>
        </View>
    )
}
export default TextObject