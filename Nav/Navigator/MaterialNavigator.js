import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Animated, Button } from 'react-native'
import MIcon from 'react-native-vector-icons/MaterialIcons'

const g = global.styles
const MaterialNavigator = ({
    navButtons,
    components,
    onSaveClicked
}) => {
    const [currIndex, setCurrIndex] = useState(0)
    useEffect(() => {
        console.log("")
    }, [currIndex])
    const onButtonClick = (index) => {
        setCurrIndex(index)
    }
    const createButton = (button, index) => {
        //let color = index == currIndex ? g.headerBackgroundColor : g.backgroundColor
        return (
            <TouchableOpacity
                key={index}
                style={[
                    styles.buttons,
                ]}
                onPress={() => onButtonClick(index)}>
                <MIcon name={button.name} style={styles.button}></MIcon>
            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                {navButtons.map((button, index) => {
                    return createButton(button, index)

                })}
            </View>
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                {components.map((component) => {
                    return component
                })}
            </View>
            <TouchableOpacity
                style={[
                    styles.save,
                ]}
                onPress={() => onSaveClicked()}>
                <Text>SAVE CHANGES</Text>
            </TouchableOpacity>
        </View>
    )
}
let styles = StyleSheet.create({
    container: {
        flex: 1,
        transform: [{
            rotateY: '180deg'
        }]
    },
    buttonsContainer: {
        height: 40,
        width: "100%",
        borderBottomLeftRadius: g.smallRadius,
        borderBottomRightRadius: g.smallRadius,
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: g.backgroundColor,
    },
    buttons: {
        flex: 1,
        backgroundColor: "white",
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        fontSize: 20
    },
    save: {
        backgroundColor: g.backgroundColor,
        height: 40,
    }
})
export default MaterialNavigator