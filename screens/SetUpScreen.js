import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import { AppForm, AppFormField } from "../components/forms";
import AppCheckBox from "../components/AppCheckBox";
import SubjectFormPicker from "../components/forms/SubjectFormPicker";
import SubjectPicker from "../components/SubjectPicker";
import AppFormPicker from "../components/forms/AppFormPicker";
import Button from "../components/AppButton";
import AppText from "../components/AppText";
import AppPicker from "../components/AppPicker";

const validationSchema = Yup.object().shape({
  class: Yup.number().required().min(1).max(10000).label("Class"),
  gradeSystem: Yup.object().required().nullable().label("Grade System"),
  subjects: Yup.object().required().nullable().label("Subjects"),
});

function SetUpScreen(props) {
  const [grades, setGrades] = useState([
    { id: 1, text: "Grades 1 to 6", checked: false },
    { id: 2, text: "Points 0 to 15", checked: false },
  ]);

  const [subjects, setSubjects] = useState([
    { id: 1, text: "maths", color: "blue", checked: false },
    { id: 2, text: "German", color: "orange", checked: false },
    { id: 3, text: "English", color: "green", checked: false },
    { id: 4, text: "French", color: "blue", checked: false },
    { id: 5, text: "Latin", color: "orange", checked: false },
    { id: 6, text: "Spanish", color: "orange", checked: false },
    { id: 7, text: "physics", color: "orange", checked: false },
    { id: 8, text: "biology", color: "green", checked: false },
    { id: 9, text: "Chemistry", color: "blue", checked: false },
    { id: 10, text: "geography", color: "brown", checked: false },
    { id: 12, text: "Story", color: "orange", checked: false },
    { id: 13, text: "Sports", color: "blue", checked: false },
    { id: 14, text: "Music", color: "prurple", checked: false },
    { id: 15, text: "Art", color: "yellow", checked: false }
  ]);

  const selectedItems = subjects.filter((item) => item.checked);

  return (
    <Screen>
      <View style={styles.form}>
        <AppForm
          initialValues={{ class: "", gradeSystem: null, subjects: null }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppText>Enter your class.</AppText>
          <AppFormField
            placeholder="Class"
            keyBoardType="numeric"
            name="class"
            width={125}
            autoCorrect={false}
          />
          <AppText>Set your grading system.</AppText>
          <AppFormPicker
            title="Grading system"
            name="gradeSystem"
            data={grades}
            setData={setGrades}
          />
          <AppText>Choose your subjects.</AppText>
          <SubjectFormPicker
            title="subjects"
            name="subjects"
            data={subjects}
            setData={setSubjects}
            selectedItems={selectedItems}
          />
        </AppForm>
      </View>
      <View style={styles.button}>
        <Button buttonText="Further" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    color: "#FFD700",
  },
  button: {
    marginVertical: 70,
  },
  form: {
    marginTop: 50,
  },
});

export default SetUpScreen;
