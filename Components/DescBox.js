import React from 'react'
import { TextInput, ScrollView, View, Text, Button, StyleSheet, FlatList } from 'react-native'
import styles from '../Styles/profile'
const g = global.styles
const DescBox = ({
    placeholderText,
    value,
    setValue,
    height
}) => {
    return (
        <TextInput
            style={[styles.text, { borderBottomWidth: 2, height: height }]}
            placeholder={placeholderText}
            placeholderTextColor={g.textColor}
            onChangeText={text => setValue(text)}
            value={value}
            multiline={true}
        ></TextInput>
    )
}
export default DescBox