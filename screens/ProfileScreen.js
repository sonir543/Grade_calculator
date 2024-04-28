import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import ActiveButton from "../components/ActiveButton";
import { useFormikContext } from "formik";

import * as Yup from "yup";

import { AppForm, AppFormField } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function ProfileScreen() {

  const [editing, setEditing] = useState(false); 

  return (
    <Screen>
      <AppForm
        initialValues={{
          name: "Stud1",
          email: "stud1@gmail.com",
          password: "060506mK",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.inputContainer}>
          <AppFormField
            placeholder="Name"
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            name="name"
            editable={editing}
            placeholderTextColor="#c3cdca"
            textColor="#FFD700"
            fontSize={18}
          />
          <AppFormField
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            name="email"
            textContentType="emailAddress"
            keyBoardType="email-address"
            editable={editing}
            placeholderTextColor="#c3cdca"
            textColor="#FFD700"
            fontSize={18}
          />
          <AppFormField
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            secureTextEntry
            textContentType="password"
            editable={editing}
            placeholderTextColor="#c3cdca"
            textColor="#FFD700"
            fontSize={18}
          />
        </View>
        {editing ? ( 
          <ActiveButton text="Änderungen speichern" style={styles.button} onPress={() => setEditing(false)} />
        ) : (
          <ActiveButton
            text="Bearbeiten"
            style={styles.button}
            onPress={() => setEditing(true)}
          />
        )}
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    marginVertical: 80,
  },
  title: {
    fontSize: 45,
    color: "#FFD700",
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  text: {
    fontSize: 21,
    fontWeight: "600",
  },
  image: {
    backgroundColor: "white",
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    marginVertical: 50,
    padding: 10
  },
});

export default ProfileScreen;
