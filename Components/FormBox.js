import React from 'react'
import { TextInput, ScrollView, View, Text, Button, StyleSheet, FlatList } from 'react-native'
import styles from '../Styles/profile'
const g = global.styles
const FormBox = ({
    title,
    placeholderText,
    value,
    setValue
}) => {
    return (
        <View >
            {title ? <Text style={styles.title}>{title.toUpperCase()}</Text> : null}
            <TextInput
                style={[styles.text, { borderBottomWidth: 2 }]}
                placeholder={placeholderText}
                placeholderTextColor={g.textColor}
                onChangeText={text => setValue(text)}
                value={value}
            ></TextInput>
        </View >
    )
}
export default FormBox