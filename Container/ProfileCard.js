
import React, { useState } from 'react'
import { View, Text } from 'react-native'
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
        <View style={{ flex: 1, backgroundColor: STYLES.smallBackgroundColor }}>
            <CardImageBox images={cardItem.card.images ? cardItem.card.images : []} width={dimensions.width} height={dimensions.height * 7 / 12} />
            {cardItem.card.attributes ? <ObjectsBox objects={cardItem.card.attributes.map((attribute, key) => {
                return (
                    <TextObject text={attribute} key={key} />
                )
            })} /> : null}
            <View style={globalStyles.seperator} />
            <Text>{cardItem.card.description}</Text>
        </View>
    )
}
export default ProfileCard 