import React from 'react'
import { View } from 'react-native'

const ObjectsBox = ({
    objects
}) => {
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: STYLES.padding
        }}>
            {objects}
        </View>
    )
}
export default ObjectsBox