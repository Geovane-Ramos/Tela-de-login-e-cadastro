import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PageLogin from "../pages/PageLogin";
import PageHome from "../pages/PageHome/";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="PageLogin"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="PageLogin" component={PageLogin} />

      <Stack.Screen name="PageHome" component={PageHome} />
    </Stack.Navigator>
  );
}
