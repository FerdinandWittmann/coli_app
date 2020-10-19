import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from "./User/LoginScreen"
import TenantScreen from "./User/TenantScreen"
import RegistrationScreen from "./User/RegistrationScreen"
import './global'
const Stack = createStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="Registration" component={RegistrationScreen}></Stack.Screen>
        <Stack.Screen name="Tenant" component={TenantScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
