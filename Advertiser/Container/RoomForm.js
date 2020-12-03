import React, { useEffect, useState } from 'react'
import { TextInput, ScrollView, View, Text, Button, StyleSheet, FlatList } from 'react-native'
import FormBox from '../../Components/FormBox'
import DescBox from '../../Components/DescBox'
import HeaderBox from '../../Components/HeaderBox'
import styles from '../../Styles/profile'
import useCardItems from '../../GlobalState/useCardItems'
import SettingsImage from '../../Components/SettingsImage'

const RoomForm = ({
    cardItem,
    update,
    dimensions
}) => {
    const [cardItems, cardItemsActions] = useCardItems()
    const [title, setTitle] = useState("")
    const [prize, setPrize] = useState("")
    const [attributes, setAttributes] = useState()
    const [desc, setDesc] = useState("")
    const [address, setAddress] = useState("")
    const [addressNum, setAddressNum] = useState("")
    const [addressPostCode, setAddressPostCode] = useState("")
    const [images, setImages] = useState([])
    //modifyMode 0: standardScreen 1: waitScreen 2: settingsscreen
    useEffect(() => {
        let card = cardItem.card
        card.title ? setTitle(card.title) : null
        card.prize ? setPrize(card.prize.$numberInt) : null
        card.description ? setDesc(card.description) : null
        card.images ? setImages(card.images) : null
        if (card.address && card.address.streetname) {
            setAddress(card.address.streetname)
            setAddressNum(card.address.streetnumber.$numberInt)
            setAddressPostCode(card.address.postalcode.$numberInt)
        }
    }, [])
    useEffect(() => {
        if (update) {

            let updateCard = { ...cardItem.card }
            updateCard.title = title
            updateCard.prize = parseInt(prize)
            updateCard.description = desc
            updateCard.address = {
                streetname: address,
                streetnumber: parseInt(addressNum),
                postalcode: parseInt(addressPostCode)
            }
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
                <HeaderBox text={"Room"} ></HeaderBox>
                <FormBox
                    title={"Title"}
                    placeholderText={"enter your a title for your free room please."}
                    value={title}
                    setValue={setTitle}></FormBox>
                <FormBox
                    title={"Prize"}
                    placeholderText={"enter the rooms monthly rent here please."}
                    value={prize}
                    setValue={setPrize}></FormBox>
                <HeaderBox text={"description"} ></HeaderBox>
                <DescBox
                    placeholderText={"enter a short description of the room here"}
                    value={desc}
                    setValue={setDesc}
                ></DescBox>
                <HeaderBox text={"address"} ></HeaderBox>
                <FormBox
                    title={"Streetname"}
                    placeholderText={"enter the streetname of your flat here please."}
                    value={address}
                    setValue={setAddress}></FormBox>
                <FormBox
                    title={"Streetnumber"}
                    placeholderText={"enter the streetnumber of your flat here please."}
                    value={addressNum}
                    setValue={setAddressNum}></FormBox>
                <FormBox
                    title={"Postalcode"}
                    placeholderText={"enter the postal code of your flat here please."}
                    value={addressPostCode}
                    setValue={setAddressPostCode}></FormBox>
            </View>
        </View>
    )
}
export default RoomForm 