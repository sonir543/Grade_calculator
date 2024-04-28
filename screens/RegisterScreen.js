import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Screen from "../components/Screen";

import * as Yup from "yup";

import AppText from "../components/AppText";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  name: Yup.string().required().label("Name"),
});

function RegisterScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/infinity.png")}
          style={styles.image}
        />
        <AppText style={styles.subTitle}>
          Register by entering your name, email and password
          indicate.
        </AppText>
      </View>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.inputContainer}>
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
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
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            secureTextEntry
            textContentType="password"
          />
        </View>
        <SubmitButton title="Register" onPress={() => navigation.navigate("SetUp")} />
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

export default RegisterScreen;
