import React from 'react'
import { View, } from 'react-native'
import DropdownPicker from 'react-native-dropdown-picker'

const AdvertiserPicker = ({
    setFreeRooms,
    setFlatsize,
}) => {
    return (
        <View style={{ flex: 1 }}>
            <DropdownPicker
                items={[
                    { label: '1', value: 1 },
                    { label: '2', value: 2 },
                    { label: '3', value: 3 },
                    { label: '4', value: 4 },
                    { label: '5', value: 5 },
                    { label: '6', value: 6 },
                    { label: '7', value: 7 },
                    { label: '8', value: 8 },
                    { label: '9', value: 9 },
                    { label: '10', value: 10 },
                ]}
                containerStyle={{ height: 40 }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                placeholder="For how many people is your shared-flat?"
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={(item) => setFlatsize(item.value)
                }
            />
            <DropdownPicker
                items={[
                    { label: '1', value: 1 },
                    { label: '2', value: 2 },
                    { label: '3', value: 3 },
                    { label: '4', value: 4 },
                    { label: '5', value: 5 },
                    { label: '6', value: 6 },
                    { label: '7', value: 7 },
                    { label: '8', value: 8 },
                    { label: '9', value: 9 },
                    { label: '10', value: 10 },
                ]}
                containerStyle={{ height: 40 }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                placeholder="How many rooms are free in your flat?"
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={(item) => setFreeRooms(item.value)
                }
            />
        </View>
    )
}
export default AdvertiserPicker