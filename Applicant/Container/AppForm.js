
import React, { useEffect, useState } from 'react'
import { TextInput, ScrollView, View, Text, Button, StyleSheet, FlatList } from 'react-native'
import FormBox from '../../Components/FormBox'
import DescBox from '../../Components/DescBox'
import HeaderBox from '../../Components/HeaderBox'
import styles from '../../Styles/profile'
const AppForm = ({
    data,
}) => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [profession, setProfession] = useState()
    const [desc, setDesc] = useState()
    const [address, setAddress] = useState()
    const [addressNum, setAddressNum] = useState()
    const [addressPostCode, setAddressPostCode] = useState()
    //modifyMode 0: standardScreen 1: waitScreen 2: settingsscreen
    return (
        <View style={styles.container}>
            <View style={styles.containerBox}>
                <HeaderBox text={"profile"} ></HeaderBox>
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
                <HeaderBox text={"description"} ></HeaderBox>
                <DescBox
                    placeholderText={"enter a short description of yourself here"}
                    value={desc}
                    setValue={setDesc}
                ></DescBox>
                <HeaderBox text={"address"} ></HeaderBox>
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
            </View>
        </View>
    )
}
export default AppForm 