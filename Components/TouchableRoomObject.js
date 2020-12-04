import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import globalStyles from '../Styles/globalStyles'
import DropdownPicker from 'react-native-dropdown-picker'
import FormBox from '../Components/FormBox'
import { TextInput } from 'react-native-paper'
const TouchableRoomObject = ({
    onInput,
    attribute,
    value
}) => {
    const defHeight = 28
    const [height, setHeight] = useState(defHeight)
    const [_value, _setValue] = useState()
    return (
        <View style={[globalStyles.roomObjectContainer, { height: height }]}>
            <Text style={[globalStyles.roomObject]} >{attribute.name}: </Text>
            {attribute.labels ?
                <DropdownPicker
                    placeholder={"Select an Item"}
                    items={attribute.labels}
                    containerStyle={{ height: 33, width: 150, }}
                    style={globalStyles.roomObjectPicker}
                    defaultValue={value}
                    onChangeItem={(item) => onInput(attribute.name, item.value)}
                    onOpen={() => setHeight(200)}
                    onClose={() => setHeight(defHeight)}
                />
                : null}
            {attribute.text ?
                <TextInput
                    style={[globalStyles.roomObjectTextInput, { height: defHeight }]}
                    placeholder={value}
                    placeholderTextColor={'black'}
                    onChangeText={(text) => _setValue(text)}
                    onEndEditing={() => onInput(attribute.name, _value)}
                />
                : null}
        </View>

    )
}
export default TouchableRoomObject 