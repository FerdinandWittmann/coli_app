
import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import LoadingScreen from '../Components/LoadingScreen'
import CardImageBox from '../Components/CardImageBox'
import ObjectsBox from '../Components/ObjectsBox'
import TextObject from '../Components/TextObject'
import globalStyles from '../Styles/globalStyles'
import MapView, { Marker } from 'react-native-maps'
import LinearGradient from 'react-native-linear-gradient'
import OverlayBox from './OverlayBox'
const RoomCard = ({
    cardItem
}) => {
    //console.log(cardItem)
    const [dimensions, setDimensions] = useState(false)
    const [index, setIndex] = useState(0)
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

    const _setIndex = (_index) => {
        setIndex(_index)
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: STYLES.smallBackgroundColor }}>
            <View style={{ width: dimensions.width, height: dimensions.height * 7 / 12 }}>
                <CardImageBox _setIndex={_setIndex} images={cardItem.card.images ? cardItem.card.images : []} width={dimensions.width} height={dimensions.height * 7 / 12} />
                <OverlayBox index={index}>
                    {cardItem.card.title ? <Text style={globalStyles.text}>{cardItem.card.title}</Text> : null}
                    {cardItem.card.prize ? <TextObject text={"Prize: " + cardItem.card.prize.$numberInt} /> : null}
                </OverlayBox>
            </View>
            {cardItem.card.address && cardItem.card.address.long ?
                <MapView
                    //zoomEnabled={true}
                    style={{ height: dimensions.height * 3 / 12, width: '100%' }}
                    maxZoomLevel={15}
                    scrollEnabled={false}
                    initialRegion={{
                        latitude: Number(cardItem.card.address.lat.$numberDouble),
                        longitude: Number(cardItem.card.address.long.$numberDouble),
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.02
                    }}
                //zoomTapEnabled={true}
                >
                    <Marker description={'room'} coordinate={{
                        longitude: Number(cardItem.card.address.long.$numberDouble),
                        latitude: Number(cardItem.card.address.lat.$numberDouble),
                    }} />
                </MapView> : null}
            <Text style={globalStyles.textHeader}> </Text>
            {cardItem.card.attributes ?
                <View style={{ flexDirection: 'column-reverse' }}>
                    <ObjectsBox objects={cardItem.card.attributes.map((attribute, key) => {
                        return (
                            <TextObject text={attribute.name + ": " + attribute.value} key={key} />
                        )
                    })} />
                </View> : null}
            <View style={[globalStyles.textBoxes,]}>
                <Text style={globalStyles.textHeader}>Flat Utilities,...  </Text>
            </View>
            {cardItem.card.equipment ?
                <View style={{ height: dimensions.height * 2 / 12, flexDirection: 'column-reverse' }}>
                    <ObjectsBox objects={cardItem.card.equipment.map((equip, key) => {
                        return (
                            <TextObject text={equip} key={key} />
                        )
                    })} />
                </View> : null}
            {cardItem.card.description ? <View style={[globalStyles.textBoxes, { paddingBottom: 15 }]}>
                <Text style={globalStyles.textHeader}>Room Description,... </Text>
                <Text style={globalStyles.text}>{cardItem.card.description}</Text>
            </View> : null}
        </ScrollView>
    )
}
export default RoomCard 