
import React, { useEffect, useState } from 'react'
import { TextInput, ScrollView, View, Text, Button, StyleSheet, FlatList } from 'react-native'
import FormBox from '../../Components/FormBox'
import DescBox from '../../Components/DescBox'
import HeaderBox from '../../Components/HeaderBox'
import styles from '../../Styles/profile'
const FlatmatesForm = ({
    data,
}) => {
    const [name, setName] = useState()
    const [flatmates, setFlatmates] = useState()
    const [attributes, setAttributes] = useState()
    const [desc, setDesc] = useState()
    //modifyMode 0: standardScreen 1: waitScreen 2: settingsscreen
    return (
        <View style={styles.container}>
            <View style={styles.containerBox}>
                <HeaderBox text={"Flat"} ></HeaderBox>
                <FormBox
                    title={"Flatname"}
                    placeholderText={"enter your flatname please."}
                    value={name}
                    setValue={setName}></FormBox>
                <FormBox
                    title={"Number of Flatmates"}
                    placeholderText={"Enter the number of flatmates here."}
                    value={flatmates}
                    setValue={setFlatmates}></FormBox>
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