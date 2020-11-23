import React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import HeaderBox from './HeaderBox'
const ImageNotification = ({
    setImageMethod,
}) => {
    return (
        <View style={styles.container}>
            <HeaderBox text={"Select Image"} />
            <Button
                onPress={setImageMethod("camera")}
                title="Take Photo..."
                color="#841584"
            ></Button>
            <Button
                onPress={setImageMethod("gallery")}
                title="Choose from Library..."
                color="#841584"
            ></Button>
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        height: global.dimensions.height,
        width: global.dimensions.width,
        justifyContent: 'space-between'
    },
    button: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end'
    }
})
export default ImageNotification