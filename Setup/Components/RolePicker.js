import React from 'react'
import { View, Button, Text, TextInput } from 'react-native'
import DropdownPicker from 'react-native-dropdown-picker'
import AdvertiserPicker from './AdvertiserPicker'
const RolePicker = ({
    setRole,
    setCity,
    _setupUser,
    city,
    role,
    setFlatsize,
    setFreeRooms
}) => {
    return (
        <View style={{ flex: 1 }}>
            <Text>Chose your Role</Text>
            <View style={{ width: '100%', height: 150 }}>
                <DropdownPicker
                    items={[
                        { label: 'Searching', value: 'applicant' },
                        { label: 'Offering', value: 'advertiser' },
                    ]}
                    containerStyle={{ height: 40 }}
                    style={{ backgroundColor: '#fafafa' }}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    placeholder="Are you offering or searching a room?"
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={(item) => setRole(item.value)
                    }
                /></View>
            {role == "advertiser" ? <AdvertiserPicker setFreeRooms={setFreeRooms} setFlatsize={setFlatsize} /> : null}
            <Text>City</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setCity(text)}
                value={city}
            />
            <Button
                onPress={() => _setupUser()}
                title="Setup"
                color="#841584"
            ></Button>
        </View >
    )
}
export default RolePicker