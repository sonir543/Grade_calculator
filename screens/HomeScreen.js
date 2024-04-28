import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { useState } from "react";
import SubjectItem from "../components/SubjectItem";
import ActiveButton from "../components/ActiveButton";
import AppFormPicker from "../components/forms/AppFormPicker";
import { calculateSubjectAverage, calculateTotalAverage } from "../hooks/calculateAverage";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  grade: Yup.string().required().max(1).label("Grade"),
  subject: Yup.object().required().label("Subject"),
  examType: Yup.object().required().label("Exam type"),
  note: Yup.string().label("Note"),
});

function HomeScreen({ navigation }) {
  const [subjects, setSubjects] = useState([
    { id: 1, name: "Maths", color: "blue", checked: false, grades: [{id: 1, type: "Exam", value: 2}, {id: 2, type: "Impromptu task", value: 4}, {id: 3, type: "query", value: 6}, {id: 4, type: "Exam", value: 2}] },
    { id: 2, name: "German", color: "orange", checked: false, grades: [{id: 1, type: "Exam", value: 2}, {id: 2, type: "Impromptu task", value: 4}, {id: 3, type: "query", value: 6}, {id: 4, type: "Exam", value: 2}] },
    { id: 3, name: "English", color: "green", checked: false, grades: [{id: 1, type: "Exam", value: 2}, {id: 2, type: "Impromptu task", value: 4}, {id: 3, type: "query", value: 6}, {id: 4, type: "Exam", value: 2}] },
    { id: 4, name: "Franch", color: "blue", checked: false, grades: [{id: 1, type: "Exam", value: 2}, {id: 2, type: "Impromptu task", value: 4}, {id: 3, type: "query", value: 6}, {id: 4, type: "Exam", value: 2}] },
    { id: 5, name: "Latin", color: "orange", checked: false, grades: [{id: 1, type: "Exam", value: 2}, {id: 2, type: "Impromptu task", value: 4}, {id: 3, type: "query", value: 6}, {id: 4, type: "Exam", value: 2}] },
    { id: 6, name: "Spanish", color: "orange", checked: false, grades: [{id: 1, type: "Exam", value: 2}, {id: 2, type: "Impromptu task", value: 4}, {id: 3, type: "query", value: 6}, {id: 4, type: "Exam", value: 2}] },
    { id: 7, name: "Physics", color: "orange", checked: false, grades: [{id: 1, type: "Exam", value: 2}, {id: 2, type: "Impromptu task", value: 4}, {id: 3, type: "query", value: 6}, {id: 4, type: "Exam", value: 2}] },
    { id: 8, name: "Biology", color: "green", checked: false, grades: [{id: 1, type: "Exam", value: 2}, {id: 2, type: "Impromptu task", value: 4}, {id: 3, type: "query", value: 6}, {id: 4, type: "Exam", value: 2}] },
    { id: 9, name: "Chemistry", color: "blue", checked: false, grades: [{id: 1, type: "Exam", value: 2}, {id: 2, type: "Impromptu task", value: 4}, {id: 3, type: "query", value: 6}, {id: 4, type: "Exam", value: 2}] },
    { id: 10, name: "Geography", color: "brown", checked: false, grades: [{id: 1, type: "Exam", value: 2}, {id: 2, type: "Impromptu task", value: 4}, {id: 3, type: "query", value: 6}, {id: 4, type: "Exam", value: 2}] },
    { id: 12, name: "Story", color: "orange", checked: false, grades: [{id: 1, type: "Exam", value: 2}, {id: 2, type: "Impromptu task", value: 4}, {id: 3, type: "query", value: 6}, {id: 4, type: "Exam", value: 2}] },
    { id: 13, name: "Sports", color: "blue", checked: false, grades: [{id: 1, type: "Exam", value: 2}, {id: 2, type: "Impromptu task", value: 4}, {id: 3, type: "query", value: 6}, {id: 4, type: "Exam", value: 2}] },
    { id: 14, name: "Musics", color: "prurple", checked: false, grades: [{id: 1, type: "Exam", value: 2}, {id: 2, type: "Impromptu task", value: 4}, {id: 3, type: "query", value: 6}, {id: 4, type: "Exam", value: 2}] },
    { id: 15, name: "Art", color: "yellow", checked: false, grades: [{id: 1, type: "Exam", value: 2}, {id: 2, type: "Impromptu task", value: 4}, {id: 3, type: "query", value: 6}, {id: 4, type: "Exam", value: 2}] }
    ]);

  const [grades, setGrades] = useState([
    { id: 1, name: "Exam", checked: false },
    { id: 2, name: "Impromptu task", checked: false },
  ]);

  const [modalVisible, setModalVisible] = useState("false");

  const TotalAverage = calculateTotalAverage(subjects);

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.header}>
        <AppText style={styles.subTitle}>Your grade point average</AppText>
        <Text style={styles.gradeText}>{TotalAverage}</Text>
        <ActiveButton
          icon="plus"
          size={40}
          text="Add note"
          fontSize={18}
          onPress={() => {
            setModalVisible(true);
          }}
          style={styles.button_container}
        />
        </View>
        <Modal visible={modalVisible} animationType="slide">
          <Screen>
            <View style={styles.buttonModal}>
              <ActiveButton
                icon="close"
                size={40}
                onPress={() => {
                  setModalVisible(false);
                }}
              />
            </View>
            <AppForm
              initialValues={{
                grade: "",
                subject: null,
                examType: null,
                note: "",
              }}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}
            >
              <View style={styles.formfield_container}>
                <AppText>Enter your grade.</AppText>
                <AppFormField
                  placeholder="Note"
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="school"
                  name="grade"
                  fontSize={18}
                  width={120}
                />
              </View>
              <View style={styles.picker_container}>
                <AppText>Choose the subject.</AppText>
                <AppFormPicker
                  subject={true}
                  title="Select subject"
                  name="subject"
                  data={subjects}
                  setData={setSubjects}
                  selectOne={true}
                />
                <AppText>Choose the type of grade you want.</AppText>
                <AppFormPicker
                  title="Exam type"
                  name="examType"
                  data={grades}
                  setData={setGrades}
                />
              </View>
              <View>
                <AppFormField
                  placeholder="note"
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="note"
                  name="note"
                  placeholderTextColor="#c3cdca"
                  textColor="#FFD700"
                  fontSize={18}
                />
              </View>
              <View style={styles.button}>
                <SubmitButton
                  title="Save"
                  onPress={() => {
                    setModalVisible(false);
                  }}
                />
              </View>
            </AppForm>
          </Screen>
        </Modal>
        <View style={styles.list__container}>
          <AppText style={[styles.subTitle, styles.list__title]}>
          Your subjects
          </AppText>
          <FlatList
  style={styles.list}
  data={subjects}
  renderItem={({ item }) => {
    const averageGrade = calculateSubjectAverage(item.grades);
    return (
      <SubjectItem
        title={item.name}
        grade={averageGrade}
        color={item.color}
        bgColor="#002366"
        onPress={() => {
          navigation.navigate("Subject", item);
        }}
      />
    );
  }}
  keyExtractor={(item) => item.id}
  scrollEnabled={true}
/>

        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 70
  },
  button_container: {
    maxWidth: 250,
    marginBottom: 20,
  },
  gradeText: {
    fontSize: 55,
    color: "#FFD700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "700",
  },
  title: {
    fontSize: 45,
    color: "#FFD700",
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  subTitle: {
    fontWeight: "700",
  },
  icon: {
    backgroundColor: "#FFD700",
    borderRadius: 25,
    position: "relative",
    top: 50,
    left: 120,
  },
  list__container: {
    backgroundColor: "#002395",
    borderRadius: 25,
    maxHeight: 450,
    padding: 10,
  },
  list: {
    padding: 10,
  },
  list__title: {
    paddingBottom: 10,
  },
  buttonModal: {
    display: "flex",
    alignItems: "flex-end",
  },
  formfield_container: {
    marginTop: 20,
  },
  picker_container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 45,
    color: "#FFD700",
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  button: {
    marginVertical: 50,
  },
  header: {
    alignItems:"center"
  }
});

export default HomeScreen;
