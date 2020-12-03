import React from 'react'
import { StyleSheet } from 'react-native'

const g = global.STYLES
export default globalStyles = StyleSheet.create({
    object: {
        backgroundColor: g.mediumBackgroundColor,
        borderRadius: g.middleRadius,
        paddingLeft: 2,
        paddingRight: 7,
        paddingTop: 2,
        paddingBottom: 5,
        marginLeft: 5,
        marginBottom: 5,
    },
    objectText: {
        fontSize: g.regularFontSize,
        color: g.regularFontColor,
    },

    seperator: {
        height: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#828282',
    },
    textBoxes: {
        paddingTop: 15,
        paddingHorizontal: 15,
    },
    textHeader: {
        fontSize: 15,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
    }
}) 