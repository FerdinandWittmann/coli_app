
import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Button, StyleSheet, FlatList } from 'react-native'
import SettingsImage from '../Components/SettingsImage'
import LoadingScreen from '../Components/LoadingScreen'
const SettingsCard = ({
    data,
    form,
    carditem
}) => {
    const [dimensions, setDimensions] = useState()
    if (!dimensions) {
        return (
            <View
                onLayout={(dim) => {
                    setDimensions(dim.nativeEvent.layout)
                }}
                style={{ flex: 1 }}>
                <LoadingScreen></LoadingScreen>
            </View>)
    }
    return (
        <ScrollView style={styles.container} >
            <SettingsImage carditem={carditem} dimensions={dimensions}></SettingsImage>
            {form}
        </ScrollView >
    )
}
var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    }

})
export default SettingsCard 