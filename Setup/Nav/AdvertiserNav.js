import React from 'react'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AdvCards from '../../Advertiser/Container/AdvCardsScreen'
import AdvChat from '../../Advertiser/Container/AdvChatScreen'
import AdvProfile from '../../Advertiser/Container/AdvProfileScreen'

const AdvertiserNav = ({
    keyboard,
}) => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name == "AppCards") {
                            iconName = 'cards'
                            return <MCIcon name={iconName} style={{ fontSize: STYLES.tabBarIconSize }} />
                        } else if (route.name == "Chat") {
                            iconName = 'chat'
                            return <MCIcon name={iconName} style={{ fontSize: STYLES.tabBarIconSize }} />
                        } else if (route.name == "Profile") {
                            iconName = "account-settings"
                            return <MCIcon name={iconName} style={{ fontSize: STYLES.tabBarIconSize }} />
                        }
                    }
                })}
                tabBarOptions={{
                    indicatorStyle: { backgroundColor: STYLES.backgroundColor },
                    showLabel: false,
                    showIcon: true,
                }}
                style={keyboard ? { marginBottom: -60 } : { marginBottom: 0 }}
                tabBarPosition={'bottom'}>
                <Tab.Screen name="AppCards" component={AdvCards} />
                <Tab.Screen name="Chat" component={AdvChat} />
                <Tab.Screen
                    name="Profile"
                    //initialParams={{ carditems: user.carditems }}
                    component={AdvProfile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default AdvertiserNav