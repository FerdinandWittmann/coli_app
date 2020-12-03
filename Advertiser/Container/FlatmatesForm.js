
import React, { useEffect, useState } from 'react'
import { TextInput, ScrollView, View, Text, Button, StyleSheet, FlatList } from 'react-native'
import FormBox from '../../Components/FormBox'
import DescBox from '../../Components/DescBox'
import HeaderBox from '../../Components/HeaderBox'
import styles from '../../Styles/profile'
import useCardItems from '../../GlobalState/useCardItems'
import SettingsImage from '../../Components/SettingsImage'

const FlatmatesForm = ({
    cardItem,
    update,
    dimensions
}) => {
    const [cardItems, cardItemsActions] = useCardItems("")
    const [title, setTitle] = useState("")
    const [attributes, setAttributes] = useState("")
    const [desc, setDesc] = useState("")
    const [images, setImages] = useState([])

    useEffect(() => {
        let card = cardItem.card
        card.title ? setTitle(card.title) : null
        card.description ? setDesc(card.description) : null
        card.images ? setImages(card.images) : null
    }, [])
    useEffect(() => {
        if (update) {

            let updateCard = { ...cardItem.card }
            updateCard.title = title
            updateCard.description = desc
            updateCard.images = images
            let updateCardItem = { ...cardItem }
            updateCardItem.card = updateCard
            cardItemsActions.updateCard(updateCardItem)
        }
    }, [update])

    const removeImage = (image) => {
        setImages((_images) => {
            newImages = _images.map((_image) => {
                if (_image == image) {
                    return
                } else {
                    return image
                }
            })
            setImages(newImages)
        })
    }
    const addImage = (image) => {
        setImages((_images) => {
            return [..._images, image]
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerBox}>
                <SettingsImage cardItem={cardItem} addImage={addImage} removeImage={removeImage} images={images} dimensions={dimensions}></SettingsImage>
                <HeaderBox text={"Flat"} ></HeaderBox>
                <FormBox
                    title={"Flatname"}
                    placeholderText={"enter your flatname please."}
                    value={title}
                    setValue={setTitle}></FormBox>
                <HeaderBox text={"description"} ></HeaderBox>
                <DescBox
                    placeholderText={"enter a short description of yourself here"}
                    value={desc}
                    setValue={setDesc}
                ></DescBox>
            </View>
        </View>
    )
}
export default FlatmatesForm 