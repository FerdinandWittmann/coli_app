import React from 'react'
import { TextInput, ScrollView, View, Text, Button, StyleSheet, FlatList } from 'react-native'
import styles from '../Styles/profile'
const HeaderBox = ({
    text,
}) => {

    return (
        <View >
            <View style={styles.containerHeader}>
                <Text style={styles.header}>{text}</Text>
            </View>
        </View>
    )

}
export default HeaderBox