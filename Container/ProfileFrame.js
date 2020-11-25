import React, { useEffect, useRef, useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native'
const ProfileFrame = ({
    profile,
    loadingScreen,
    settings,
    mode,
}) => {
    const [currentMode, setCurrentMode] = useState(mode)
    const fadeAnim = useRef(
        new Animated.Value(0)
    ).current
    const rotation = fadeAnim.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    })
    useEffect(() => {
        if (mode != currentMode && currentMode == 0) {
            Animated.timing(fadeAnim, {
                toValue: 180,
                duration: 1000,
                useNativeDriver: true
            }).start(() => setCurrentMode(mode))

        } else if (mode != currentMode && currentMode == 1) {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }).start(() => setCurrentMode(mode))
        }

    }, [mode])

    function getChildComponent() {
        if (mode != currentMode) {
            return (
                loadingScreen
            )
        }
        if (mode == 0) {
            return (
                profile
            )
        } else if (mode == 1) {
            return (
                settings
            )
        }
    }
    return (
        <Animated.View style={[{
            transform: [{
                rotateY: rotation
            }]
        }, styles.frame]}>
            {getChildComponent()}

        </Animated.View>
    )

}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: "orange",
        overflow: 'hidden',
        margin: 10
    },
})
export default ProfileFrame 
