import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AppCards from '../../Applicant/Container/AppCardsScreen'
import AppChat from '../../Applicant/Container/AppChatScreen'
import AppProfile from '../../Applicant/Container/AppProfileScreen'
const ApplicantNav = ({
    keyboard
}) => {
    const Tab = createMaterialTopTabNavigator()
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
                <Tab.Screen name="AppCards" component={AppCards} />
                <Tab.Screen name="Chat" component={AppChat} />
                <Tab.Screen
                    name="Profile"
                    //initialParams={{ carditems: user.carditems }}
                    component={AppProfile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default ApplicantNav