import React from 'react'
import { StyleSheet } from 'react-native'

const g = global.styles
export default styles = StyleSheet.create({
    scrollView: {
        transform: [{
            rotateY: '180deg'
        }]
    },
    container: {
        transform: [{
            rotateY: '180deg'
        }]
    },
    containerHeader: {
        backgroundColor: g.backgroundColor,
        paddingVertical: g.smallGap,
        paddingLeft: g.largeGap * 3,
        alignItems: 'flex-start'
    },
    header: {
        textTransform: 'uppercase',
        color: g.headerTextColor,
        fontWeight: 'bold'
    },
    title: {
        textTransform: 'capitalize',
        marginVertical: g.smallGap / 2,
        marginHorizontal: g.largeGap,
        fontWeight: 'bold',
        color: g.textColor,
        borderColor: g.backgroundColor,
    },
    text: {
        textTransform: 'capitalize',
        marginVertical: g.smallGap / 2,
        marginHorizontal: g.largeGap,
        fontWeight: 'bold',
        color: g.textColor,
        borderColor: g.backgroundColor,
    }
})