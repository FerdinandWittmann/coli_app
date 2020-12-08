import React from 'react'
import { StyleSheet } from 'react-native'

const g = global.STYLES
export default globalStyles = StyleSheet.create({
    overlayGradientBox: {

        width: '100%',
        padding: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 35
    },
    overlayBox: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 2,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    roomObjectTextInput: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: STYLES.backgroundColor,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 0
    },
    roomObjectPicker: {
        backgroundColor: 'white',
        borderColor: STYLES.backgroundColor,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    },
    roomObjectContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 10,
        marginVertical: 5
    },
    roomObject: {
        backgroundColor: g.mediumBackgroundColor,
        borderTopLeftRadius: g.middleRadius,
        borderBottomLeftRadius: g.middleRadius,
        borderColor: g.backgroundColor,
        paddingLeft: 2,
        paddingRight: 7,
        paddingTop: 6,
        paddingBottom: 7,
    },
    object: {
        backgroundColor: g.mediumBackgroundColor,
        borderRadius: g.middleRadius,
        borderColor: g.backgroundColor,
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
    },
    descText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    formTitle: {
        marginVertical: g.smallGap / 2,
        marginHorizontal: g.largeGap,
        fontWeight: 'bold',
        color: g.textColor,
        borderBottomWidth: 2,
        borderColor: STYLES.backgroundColor,
        backgroundColor: 'white',
        borderRadius: STYLES.smallRadius

    }
}) 