
import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import CardImageBox from '../Components/CardImageBox'
import LoadingScreen from '../Components/LoadingScreen'
import ObjectsBox from '../Components/ObjectsBox'
import TextObject from '../Components/TextObject'
import globalStyles from '../Styles/globalStyles'
const ProfileCard = ({
    cardItem
}) => {
    const [dimensions, setDimensions] = useState(false)
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
            <CardImageBox images={cardItem.card.images ? cardItem.card.images : []} width={dimensions.width} height={dimensions.height * 7 / 12} />
            {cardItem.card.shortdescription ? <View style={[globalStyles.textBoxes, { height: dimensions.height * 3 / 12, justifyContent: 'center' }]}>
                <Text style={globalStyles.textHeader}>I am a great flatmate because, ...</Text>
                <Text style={globalStyles.text}>{cardItem.card.shortdescription}</Text>
            </View> : null}
            {cardItem.card.attributes ?
                <View style={{ height: dimensions.height * 2 / 12, flexDirection: 'column-reverse' }}>
                    <ObjectsBox objects={cardItem.card.attributes.map((attribute, key) => {
                        return (
                            <TextObject text={attribute} key={key} />
                        )
                    })} />
                </View> : null}
            {cardItem.card.description ? <View style={[globalStyles.textBoxes, { paddingBottom: 15 }]}>
                <Text style={globalStyles.textHeader}>All about Me: </Text>
                <Text style={globalStyles.text}>{cardItem.card.description}</Text>
            </View> : null}
        </ScrollView>
    )
}
export default ProfileCard 