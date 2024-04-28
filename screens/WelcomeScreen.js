import React from "react";
import { Image, Platform } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import AppButton from "../components/AppButton";
import defaultStyles from "../config/styles";
import Screen from "../components/Screen";

function WelcomeScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.title}>Welcome to MyGrades</Text>
          <Image source={require("../assets/infinity.png")} />
          <Text style={[styles.text, defaultStyles.text]}>
            The limits are endless.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton buttonText="Login" onPress={() => navigation.navigate("Login")} />
          <AppButton buttonText="Register" onPress={() => navigation.navigate("Register")} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    marginVertical: 70,
  },
  welcomeContainer: {
    position: "absolute",
    top: 70,
  },
  title: {
    fontSize: 45,
    color: "#FFD700",
    fontWeight: "700",
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  text: {
    fontSize: 21,
    textAlign: "center",
    fontWeight: "600",
  },
  button: {
    marginBottom: 20,
  },
});

export default WelcomeScreen;
