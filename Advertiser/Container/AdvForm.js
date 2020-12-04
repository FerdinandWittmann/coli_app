

import React, { useEffect, useState } from 'react'
import { TextInput, ScrollView, View, Text, Button, StyleSheet, FlatList, Alert } from 'react-native'
import FormBox from '../../Components/FormBox'
import DescBox from '../../Components/DescBox'
import styles from '../../Styles/profile'
import useCardItems from '../../GlobalState/useCardItems'
import SettingsImage from '../../Components/SettingsImage'
import ObjectsBox from '../../Components/ObjectsBox'
import profileAttributes from '../../Resources/profileAttributes'
import TextObject from '../../Components/TextObject'
import TouchableTextObject from '../../Container/TouchableObject'
const AdvForm = ({
    cardItem,
    update,
    dimensions
}) => {
    const [cardItems, cardItemsActions] = useCardItems()
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [profession, setProfession] = useState("")
    const [desc, setDesc] = useState("")
    const [address, setAddress] = useState("")
    const [addressNum, setAddressNum] = useState("")
    const [addressPostCode, setAddressPostCode] = useState("")
    const [images, setImages] = useState([])
    const [attributes, setAttributes] = useState([])
    const [shortDesc, setShortDesc] = useState("")
    useEffect(() => {
        let card = cardItem.card
        card.name ? setName(card.name) : null
        card.age ? setAge(card.age.$numberInt) : null
        card.images ? setImages(card.images) : null
        card.profession ? setProfession(card.profession) : null
        card.description ? setDesc(card.description) : null
        card.attributes ? setAttributes(card.attributes) : null
        card.shortdescription ? setShortDesc(card.shortdescription) : null
        if (card.address && card.address.streetname) {
            setAddress(card.address.streetname)
            setAddressNum(card.address.streetnumber.$numberInt)
            setAddressPostCode(card.address.postalcode.$numberInt)
        }
    }, [])
    useEffect(() => {
        if (update) {
            let updateCard = { ...cardItem.card }
            updateCard.name = name
            updateCard.age = parseInt(age)
            updateCard.profession = profession
            updateCard.description = desc
            updateCard.address = {
                streetname: address,
                streetnumber: parseInt(addressNum),
                postalcode: parseInt(addressPostCode)
            }
            updateCard.shortdescription = shortDesc
            updateCard.attributes = attributes
            updateCard.images = images
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
        <ScrollView style={[styles.scrollView]}>
            <SettingsImage cardItem={cardItem} addImage={addImage} removeImage={removeImage} images={images} dimensions={dimensions}></SettingsImage>
            <Text style={styles.descTitle}>Who are you?</Text>
            <FormBox
                title={"Name"}
                placeholderText={"enter your name please."}
                value={name}
                setValue={setName}></FormBox>
            <FormBox
                title={"Age"}
                placeholderText={"enter your age please."}
                value={age}
                setValue={setAge}></FormBox>
            <FormBox
                title={"Stuides/Job"}
                placeholderText={"enter your profession/studies here please."}
                value={profession}
                setValue={setProfession}></FormBox>
            <Text style={styles.descTitle}>Where will you work or study in your future city?</Text>
            <FormBox
                title={"Streetname"}
                placeholderText={"enter your streetname of your workplace or university here please."}
                value={address}
                setValue={setAddress}></FormBox>
            <FormBox
                title={"Streetnumber"}
                placeholderText={"enter your streetnumber here please."}
                value={addressNum}
                setValue={setAddressNum}></FormBox>
            <FormBox
                title={"Postalcode"}
                placeholderText={"enter your postalcode here please."}
                value={addressPostCode}
                setValue={setAddressPostCode}></FormBox>
            <Text style={styles.descTitle}>Flats should choose you, because...</Text>
            <DescBox
                placeholderText={"quickly express yourself (500 Characters)"}
                value={shortDesc}
                setValue={setShortDesc}
                height={100}
            ></DescBox>
            <Text style={styles.descTitle}>Tell them a some more about who you are and how you imagine living together...</Text>
            <DescBox
                placeholderText={"tell your future flatmates all they need to know about you"}
                value={desc}
                setValue={setDesc}
                height={250}
            ></DescBox>
            <Text style={styles.descTitle}>Choose up to 6 interests of yours...</Text>
            <ObjectsBox objects={profileAttributes.map((attribute, key) => {
                let selected = false
                if (attributes.includes(attribute)) {
                    selected = true
                }
                return (
                    <TouchableTextObject key={key} object={<TextObject selected={selected} text={attribute} />} name={attribute} onObjectPressed={onAttributePressed} />
                )
            })} />
        </ScrollView >
    )
}
export default AdvForm 
