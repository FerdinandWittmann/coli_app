
import React, { cloneElement, useEffect, useState } from 'react'
import { ScrollView, View, Text, Button, StyleSheet, FlatList, Alert } from 'react-native'
import SettingsImage from '../Components/SettingsImage'
import LoadingScreen from '../Components/LoadingScreen'
import useCardItems from '../GlobalState/useCardItems'
const SettingsCard = ({
    data,
    form,
    cardItem
}) => {
    const [dimensions, setDimensions] = useState()
    const [currCardItem, setCurrCardItem] = useState()
    const [cardItems, cardItemsActions] = useCardItems()
    const [updateCard, setUpdateCard] = useState(false)
    useEffect(() => {
        cardItems.carditems.map((_cardItem) => {
            if (_cardItem.name == cardItem.name && _cardItem.number == cardItem.number) {
                setCurrCardItem(_cardItem)
            }
        })
    }, [])
    useEffect(() => {
        cardItems.carditems.map((_cardItem) => {
            if (_cardItem.name == cardItem.name && _cardItem.number == cardItem.number && _cardItem.staged == "staged") {
                if (!updateCard) {
                    setUpdateCard(true)
                }
            }
        })
    }, [cardItems])

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
            {cloneElement(form, { cardItem: currCardItem, update: updateCard, dimensions: dimensions })}
        </ScrollView >
    )
}
var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    }

})
export default SettingsCard 