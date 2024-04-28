import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import Loginscreen from "../screens/LoginScreen";
import Registerscreen from "../screens/RegisterScreen";
import SetUpScreen from "../screens/SetUpScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Loginscreen} />
        <Stack.Screen name="Register" component={Registerscreen} />
        <Stack.Screen name="SetUp" component={SetUpScreen} />
    </Stack.Navigator>
)

export default AuthNavigator;
