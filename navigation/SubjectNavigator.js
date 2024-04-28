import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import SubjectDetailScreen from "../screens/SubjectDetailScreen";
import SubjectScreen from "../screens/SubjectScreen";

const Stack = createStackNavigator();

const SubjectNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Subjects" component={SubjectScreen} options={{title: "subjects", headerShown: false}}/>
        <Stack.Screen name="Subject" component={SubjectDetailScreen} options={{ title: null }} />
    </Stack.Navigator>
)

export default SubjectNavigator;