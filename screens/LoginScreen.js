import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import * as Yup from "yup";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/infinity.png")}
          style={styles.image}
        />
        <AppText style={styles.slogan}>
        Log in with your email and password.
        </AppText>
      </View>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.inputContainer}>
          <AppFormField
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            name="email"
            textContentType="emailAddress"
            keyBoardType="email-address"
          />
          <AppFormField
            placeholder="Passwort"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            secureTextEntry
            textContentType="password"
          />
        </View>
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    height: 112,
    width: 112,
  },
  inputContainer: {
    marginVertical: 50,
  },
  header: {
    alignItems: "center",
  },
  subTitle: {
    textAlign: "center",
  },
});

export default LoginScreen;
