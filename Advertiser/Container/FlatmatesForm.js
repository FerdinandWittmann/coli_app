
import React, { useEffect, useState } from 'react'
import { TextInput, ScrollView, View, Text, Button, StyleSheet, FlatList } from 'react-native'
import FormBox from '../../Components/FormBox'
import DescBox from '../../Components/DescBox'
import HeaderBox from '../../Components/HeaderBox'
import styles from '../../Styles/profile'
import useCardItems from '../../GlobalState/useCardItems'
import SettingsImage from '../../Components/SettingsImage'
import flatmatesAttributes from '../../Resources/flatmatesAttributes'
import ObjectsBox from '../../Components/ObjectsBox'
import TextObject from '../../Components/TextObject'
import TouchableTextObject from '../../Container/TouchableObject'

const FlatmatesForm = ({
    cardItem,
    update,
    dimensions
}) => {
    const [cardItems, cardItemsActions] = useCardItems("")
    const [title, setTitle] = useState("Turtle Lair")
    const [attributes, setAttributes] = useState([])
    const [desc, setDesc] = useState("")
    const [images, setImages] = useState([])

    useEffect(() => {
        let card = cardItem.card
        card.title ? setTitle(card.title) : null
        card.description ? setDesc(card.description) : null
        card.images ? setImages(card.images) : null
        card.attributes ? setAttributes(card.attributes) : null
    }, [])
    useEffect(() => {
        if (update) {
            let updateCard = { ...cardItem.card }
            updateCard.title = title
            updateCard.description = desc
            updateCard.images = images
            updateCard.attributes = attributes
            let updateCardItem = { ...cardItem }
            updateCardItem.card = updateCard
            cardItemsActions.updateCard(updateCardItem)
        }
    }, [update])
    const onAttributePressed = (_name) => {
        setAttributes((_attributes) => {
            if (_attributes.includes(_name)) {
                return _attributes.filter((_attribute) => _attribute !== _name)
            } else if (_attributes.length < 5) {
                return [..._attributes, _name]
            } else {
                return [..._attributes]
            }
        })
    }
    const removeImage = (image) => {
        setImages((_images) => {
            let newImages = _images.filter((_image) => _image !== image)
            return [...newImages]
        })
    }
    const addImage = (image) => {
        setImages((_images) => {
            return [..._images, image]
        })
    }
    return (
        <ScrollView style={styles.container}>
            <SettingsImage cardItem={cardItem} addImage={addImage} removeImage={removeImage} images={images} dimensions={dimensions}></SettingsImage>
            <Text style={styles.descTitle}>Come up with a group name for your flat... </Text>
            <DescBox
                value={title}
                setValue={setTitle}
                height={38}
            ></DescBox>
            <Text style={styles.descTitle}>Tell us about what living in {title} is all about? </Text>
            <DescBox
                placeholderText={"Leonardo is the Fearless Leader. Michelangelo is the Wild One. Donatello is the Brains. Raphael is the Muscle. We regullary do exiting activities and have pizza thereafter."}
                value={desc}
                setValue={setDesc}
                height={250}
            ></DescBox>
            <Text style={styles.descTitle}>Choose up to 6 attributes to describe your flat...</Text>
            <ObjectsBox objects={flatmatesAttributes.map((attribute, key) => {
                let selected = false
                if (attributes.includes(attribute)) {
                    selected = true
                }
                return (
                    <TouchableTextObject key={key} object={<TextObject selected={selected} text={attribute} />} name={attribute} onObjectPressed={onAttributePressed} />
                )
            })} />
        </ScrollView>
    )
}
export default FlatmatesForm 