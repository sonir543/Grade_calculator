import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import Screen from "../components/Screen";
import ActiveButton from "../components/ActiveButton";
import SubjectDetails from "../components/SubjectDetails";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppText from "../components/AppText";
import AppFormPicker from "../components/forms/AppFormPicker";

import * as Yup from "yup";
import { calculateSubjectAverage } from "../hooks/calculateAverage";

const validationSchema = Yup.object().shape({
  grade: Yup.string().required().max(1).label("Grade"),
  subject: Yup.object().required().label("Subject"),
  examType: Yup.object().required().label("Exam type"),
  note: Yup.string().label("Note"),
});

function SubjectDetailScreen({ route }) {
  const [subjects, setSubjects] = useState([
     { id: 1, text: "maths", color: "blue", checked: false,grade:1.3 },
    { id: 2, text: "German", color: "orange", checked: false ,grade:1.3},
    { id: 3, text: "English", color: "green", checked: false,grade:1.3 },
    { id: 4, text: "French", color: "blue", checked: false ,grade:1.3},
    { id: 5, text: "Latin", color: "orange", checked: false ,grade:1.3},
    { id: 6, text: "Spanish", color: "orange", checked: false ,grade:1.3},
    { id: 7, text: "physics", color: "orange", checked: false ,grade:1.3},
    { id: 8, text: "biology", color: "green", checked: false ,grade:1.3},
    { id: 9, text: "Chemistry", color: "blue", checked: false ,grade:1.3},
    { id: 10, text: "geography", color: "brown", checked: false ,grade:1.3},
    { id: 12, text: "Story", color: "orange", checked: false ,grade:1.3},
    { id: 13, text: "Sports", color: "blue", checked: false ,grade:1.3},
    { id: 14, text: "Music", color: "prurple", checked: false ,grade:1.3},
    { id: 15, text: "Art", color: "yellow", checked: false ,grade:1.3}
  ]);

  const [grades, setGrades] = useState([
    { id: 1, name: "Class", checked: false },
    { id: 2, name: "Impromptu task", checked: false },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [subject, setSubject] = useState(route.params);
  const [averageGrade, setAverageGrade] = useState(calculateSubjectAverage(subject.grades))

  const handleSubmit = (values) => {
    const newId = subject.grades.length + 1;


    const gradeValue = parseFloat(values.grade);

    const updatedGrades = [
      ...subject.grades,
      { id: newId, value: gradeValue, type: values.examType.name }
    ];

    const newAverage = calculateSubjectAverage(updatedGrades);

    const updatedSubject = { ...subject, grades: updatedGrades };
    setSubject(updatedSubject);
    setAverageGrade(newAverage);

    setModalVisible(false);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            const updatedSubjects = subjects.map((subj) =>
      subj.id === subject.id ? { ...subj, checked: true } : subj
    );
    setSubjects(updatedSubjects);

            setModalVisible(true)}}
        >
          <MaterialCommunityIcons name="plus" size={40} />
        </TouchableOpacity>
      </View>
      <SubjectDetails subject={subject.name} grade={averageGrade} grades={subject.grades} />
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <View style={styles.header}>
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
            onSubmit={handleSubmit}
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
                selectedSubject={subject} 
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
                placeholder="Notiz"
                autoCapitalize="none"
                autoCorrect={false}
                icon="note"
                name="note"
                placeholderTextColor="#c3cdca"
                textColor="#FFD700"
                fontSize={18}
              />
            </View>
            <View style={styles.button_form}>
              <SubmitButton
                title="Save"
              />
            </View>
          </AppForm>
        </Screen>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#FFD700",
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    padding: 5,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#FFD700",
    borderRadius: 25,
  },
  header: {
    display: "flex",
    alignItems: "flex-end",
  },
  formfield_container: {
    marginTop: 20,
  },
  button_form: {
    marginVertical: 50,
  },
  picker_container: {
    marginVertical: 20,
  },
});

export default SubjectDetailScreen;
