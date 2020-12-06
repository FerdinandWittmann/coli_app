import React from 'react'
import { View, Text } from 'react-native'
import globalStyles from '../Styles/globalStyles'
import LinearGradient from 'react-native-linear-gradient'
const OverlayBox = ({
    children,
    index
}) => {

    return (
        <View pointerEvents='none' style={globalStyles.overlayBox}>
            {index == 0 ?
                <LinearGradient style={globalStyles.overlayGradientBox} colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}>
                    {children}
                </LinearGradient> : null}
        </View>
    )
}
export default OverlayBox