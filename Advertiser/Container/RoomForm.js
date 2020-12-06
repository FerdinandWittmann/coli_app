import React, { useEffect, useState } from 'react'
import { TextInput, ScrollView, View, Text, Button, StyleSheet, FlatList } from 'react-native'
import FormBox from '../../Components/FormBox'
import DescBox from '../../Components/DescBox'
import HeaderBox from '../../Components/HeaderBox'
import styles from '../../Styles/profile'
import useCardItems from '../../GlobalState/useCardItems'
import SettingsImage from '../../Components/SettingsImage'
import ObjectsBox from '../../Components/ObjectsBox'
import IconObject from '../../Components/IconObject'
import roomAttributes from '../../Resources/roomAttributes'
import TouchableRoomObject from '../../Components/TouchableRoomObject'
import roomEquipment from '../../Resources/roomEquipment'
import TextObject from '../../Components/TextObject'
import TouchableTextObject from '../../Container/TouchableObject'
const RoomForm = ({
    cardItem,
    update,
    dimensions
}) => {
    const [cardItems, cardItemsActions] = useCardItems()
    const [title, setTitle] = useState("")
    const [prize, setPrize] = useState("")
    const [attributes, setAttributes] = useState([])
    const [desc, setDesc] = useState("")
    const [address, setAddress] = useState("")
    const [addressNum, setAddressNum] = useState("")
    const [addressPostCode, setAddressPostCode] = useState("")
    const [images, setImages] = useState([])
    const [equipment, setEquipment] = useState([])
    //modifyMode 0: standardScreen 1: waitScreen 2: settingsscreen
    useEffect(() => {
        let card = cardItem.card
        card.title ? setTitle(card.title) : null
        card.prize ? setPrize(card.prize.$numberInt) : null
        card.description ? setDesc(card.description) : null
        card.images ? setImages(card.images) : null
        card.attributes ? setAttributes(card.attributes) : null
        card.equipment ? setEquipment(card.equipment) : null

        if (card.address) {
            card.address.streetname ? setAddress(card.address.streetname) : null
            card.address.streetnumber ? setAddressNum(card.address.streetnumber.$numberInt) : null
            card.address.postalcode ? setAddressPostCode(card.address.postalcode.$numberInt) : null
        }
    }, [])
    useEffect(() => {
        if (update) {

            let updateCard = { ...cardItem.card }
            updateCard.title = title
            updateCard.prize = parseInt(prize)
            updateCard.description = desc
            updateCard.address.streetname = address
            updateCard.address.streetnumber = parseInt(addressNum)
            updateCard.address.postalcode = parseInt(addressPostCode)
            updateCard.equipment = equipment
            updateCard.attributes = attributes
            updateCard.images = images
            let updateCardItem = { ...cardItem }
            updateCardItem.card = updateCard
            cardItemsActions.updateCard(updateCardItem)
        }
    }, [update])

    const onEquipmentPressed = (_name) => {
        setEquipment((_equipment) => {
            if (_equipment.includes(_name)) {
                return _equipment.filter((_equip) => _equip !== _name)
            } else {
                return [..._equipment, _name]
            }
        })
    }
    const onAttributeAdded = (_name, _value) => {
        setAttributes((_attributes) => {
            let attributeSet = false
            let newAttributes = attributes.map((_attribute) => {
                if (_attribute.name == _name) {
                    _attribute.value = _value
                    attributeSet = true
                }
                return _attribute
            })
            if (!attributeSet) {
                return [...newAttributes, { name: _name, value: _value }]
            } else {
                return newAttributes
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
        <View style={styles.container}>
            <View style={styles.containerBox}>
                <SettingsImage cardItem={cardItem} addImage={addImage} removeImage={removeImage} images={images} dimensions={dimensions}></SettingsImage>
                <Text style={styles.descTitle}>Advertise your free room... </Text>
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
                <Text style={styles.descTitle}>About your room...</Text>
                <View style={{ zIndex: 100, flexDirection: 'column-reverse' }}>
                    {roomAttributes.map((attribute, key) => {
                        let value = ""
                        attributes.map((_attribute) => {
                            if (_attribute.name == attribute.name) {
                                value = _attribute.value
                            }
                        })
                        let selected = false
                        if (attributes.includes(attribute)) {
                            selected = true
                        }
                        return (
                            <TouchableRoomObject attribute={attribute} value={value} key={key} onInput={onAttributeAdded} />
                        )
                    })}
                </View>
                <Text style={styles.descTitle}>Convice your future flatmate to choose this room! </Text>
                <DescBox
                    placeholderText={"The room gets so much sunlight, it doesn't just give enough sunlight for your houseplants to survive, but will enlighten your day each morning."}
                    value={desc}
                    setValue={setDesc}
                    height={250}
                ></DescBox>
                <Text style={styles.descTitle}>What can your flat offer? </Text>
                <ObjectsBox objects={roomEquipment.map((equip, key) => {
                    let selected = false
                    if (equipment.includes(equip)) {
                        selected = true
                    }
                    return (
                        <TouchableTextObject key={key} object={<TextObject selected={selected} text={equip} />} name={equip} onObjectPressed={onEquipmentPressed} />
                    )
                })} />

            </View>
        </View>
    )
}
export default RoomForm 