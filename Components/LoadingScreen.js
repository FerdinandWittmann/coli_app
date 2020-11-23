import React, { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, Animated } from 'react-native'
const LoadingScreen = ({
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> CoLi</Text>
        </View>
    )
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ff9500",
        justifyContent: 'space-around',
    },
    text: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1459c7'
    }

})
export default LoadingScreen 