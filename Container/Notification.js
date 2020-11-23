import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

const Notification = ({
    children,
    setShow
}) => {
    return (
        <View style={styles.container}>
            {children}
            <View style={styles.button}>
                <Button
                    onPress={() => setShow(false)}
                    title="cancel"
                    color="#841584"
                ></Button>
            </View>
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        height: global.dimensions.height,
        width: global.dimensions.width,
        position: 'absolute',
        justifyContent: "center",
        alignItems: 'center'
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    }
})
export default Notification