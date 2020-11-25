import React, { useEffect, useState } from 'react'
import { TextInput, ScrollView, View, Text, Button, StyleSheet, FlatList } from 'react-native'
import FormBox from '../../Components/FormBox'
import DescBox from '../../Components/DescBox'
import HeaderBox from '../../Components/HeaderBox'
import styles from '../../Styles/profile'
const RoomForm = ({
    update,
    user,
    data,
}) => {
    const [title, setTitle] = useState()
    const [prize, setPrize] = useState()
    const [attributes, setAttributes] = useState()
    const [desc, setDesc] = useState()
    const [address, setAddress] = useState()
    const [addressNum, setAddressNum] = useState()
    const [addressPostCode, setAddressPostCode] = useState()
    //modifyMode 0: standardScreen 1: waitScreen 2: settingsscreen
    return (
        <View style={styles.container}>
            <View style={styles.containerBox}>
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