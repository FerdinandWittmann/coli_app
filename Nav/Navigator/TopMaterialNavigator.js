import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native'
import { Button } from 'react-native-paper'

const TopMaterialNavigator = ({
    children,
    navButtons,
}) => {
    const [index, setIndex] = useState(0)
    const handleClick = (i) => {
        setIndex(i)
    }

    const getNavButtons = () => {
        navButtons.map((button) => {
            return (
                <TouchableOpacity
                    style={[
                        styles.buttons,
                        button.index == index ? { backgroundColor: g.headerBackgroundColor } : null
                    ]}
                    onPress={() => handleClick(button.index)}>
                    <MIcon name='delete' style={s_profile.picIcon}></MIcon>
                </TouchableOpacity>
            )
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                {getNavButtons()}
            </View>
        </View>
    )
}
const g = global.styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonsContainer: {
        flex: 1,
        borderBottomLeftRadius: g.smallRadius,
        borderBottomRightRadius: g.smallRadius,
        flexDirection: 'row',
    },
    buttons: {
        flex: 1,
        backgroundColor: g.headerBackgroundColor
    }
})
export default TopMaterialNavigator