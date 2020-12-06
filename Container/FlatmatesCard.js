

import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import CardImageBox from '../Components/CardImageBox'
import LoadingScreen from '../Components/LoadingScreen'
import ObjectsBox from '../Components/ObjectsBox'
import TextObject from '../Components/TextObject'
import globalStyles from '../Styles/globalStyles'
import OverlayBox from './OverlayBox'
const FlatmatesCard = ({
    cardItem
}) => {
    const [dimensions, setDimensions] = useState(false)
    const [index, setIndex] = useState(0)
    const _setIndex = (_index) => {
        setIndex(_index)
    }
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
        <ScrollView style={{ flex: 1, backgroundColor: STYLES.smallBackgroundColor }}>
            <View style={{ width: dimensions.width, height: dimensions.height * 7 / 12 }}>
                <CardImageBox _setIndex={_setIndex} images={cardItem.card.images ? cardItem.card.images : []} width={dimensions.width} height={dimensions.height * 7 / 12} />
                <OverlayBox index={0}>
                    {cardItem.card.title ?
                        <Text style={globalStyles.text}>{cardItem.card.title}</Text>
                        : null}
                    {cardItem.card.flatsize ?

                        <TextObject text={"#Flatmates: " + cardItem.card.flatsize.$numberInt} />
                        : null}
                </OverlayBox>
            </View>
            {cardItem.card.description ?
                <View style={[globalStyles.textBoxes, { height: dimensions.height * 3 / 12, justifyContent: 'center' }]}>
                    <Text style={globalStyles.textHeader}>Our flat is awesome, because ...</Text>
                    <Text style={globalStyles.descText}>{cardItem.card.description}</Text>
                </View> : null}
            {cardItem.card.attributes ?
                <View style={{ height: dimensions.height * 2 / 12, flexDirection: 'column-reverse' }}>
                    <ObjectsBox objects={cardItem.card.attributes.map((attribute, key) => {
                        return (
                            <TextObject text={attribute} key={key} />
                        )
                    })} />
                </View> : null}
        </ScrollView>
    )
}
export default FlatmatesCard 