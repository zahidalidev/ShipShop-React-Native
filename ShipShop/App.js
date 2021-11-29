import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import SelectPaymentScreen from './app/screens/SelectPaymentScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="SelectPaymentScreen" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="SelectPaymentScreen" component={SelectPaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
