import React from 'react';
import { Button, Text, View } from 'react-native'
function TenantScreen({ navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <Text>Are you looking forward to rent out or search for a room ?</Text>
            <Button
                onPress={chooseTenant("rtenant")}
                title="Renting"
                color="#841584"
            >
            </Button>
            <Button
                onPress={chooseTenant("stenant")}
                title="Searching"
                color="#841584"
            >
            </Button>
        </View>
    )
}

export default TenantScreen