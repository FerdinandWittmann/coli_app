import React from 'react'
import { StyleSheet } from 'react-native'

const g = global.STYLES
export default styles = StyleSheet.create({
    formBox: {
        height: 25
    },
    scrollView: {
        transform: [{
            rotateY: '180deg'
        }],
        backgroundColor: g.smallBackgroundColor
    },
    container: {

        transform: [{
            rotateY: '180deg'
        }],
        backgroundColor: g.smallBackgroundColor,
    },
    containerHeader: {
        backgroundColor: g.backgroundColor,
        paddingVertical: g.smallGap,
        paddingLeft: g.largeGap * 3,
        alignItems: 'flex-start'
    },
    header: {
        textTransform: 'uppercase',
        color: g.regularFontColor,
        fontWeight: 'bold'
    },
    title: {
        textTransform: 'capitalize',
        marginVertical: g.smallGap / 2,
        marginHorizontal: g.largeGap,
        fontWeight: 'bold',
        color: g.textColor,
    },
    descTitle: {
        textTransform: 'capitalize',
        marginBottom: 25,
        marginTop: 25,
        marginHorizontal: g.largeGap,
        fontWeight: 'bold',
        fontSize: 20,
        color: g.textColor,
    },
    text: {
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        marginVertical: g.smallGap / 2,
        marginHorizontal: g.largeGap,
        fontWeight: 'bold',
        color: g.textColor,
        borderColor: g.backgroundColor,
    },
    descText: {
        textAlignVertical: 'top',
        backgroundColor: 'white',
        borderRadius: 5,
        marginVertical: g.smallGap / 2,
        marginHorizontal: g.largeGap,
        fontWeight: 'bold',
        color: g.textColor,
        borderBottomWidth: 2,
        borderColor: g.backgroundColor,
    }
})