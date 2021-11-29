import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import CommentScreen from "./app/screens/CommentScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CommentScreen" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="CommentScreen" component={CommentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

