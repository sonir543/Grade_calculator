import React, { useState } from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";
import Screen from "../components/Screen";
import SubjectItem from "../components/SubjectItem";
import {
  calculateSubjectAverage,
  calculateTotalAverage,
} from "../hooks/calculateAverage";

function SubjectScreen({ navigation }) {
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
    { id: 14, name: "Music", color: "prurple", checked: false, grades: [{id: 1, type: "Exam", value: 2}, {id: 2, type: "Impromptu task", value: 4}, {id: 3, type: "query", value: 6}, {id: 4, type: "Exam", value: 2}] },
    { id: 15, name: "Art", color: "yellow", checked: false, grades: [{id: 1, type: "Exam", value: 2}, {id: 2, type: "Impromptu task", value: 4}, {id: 3, type: "query", value: 6}, {id: 4, type: "Exam", value: 2}] },
     ]);

  const TotalAverage = calculateTotalAverage(subjects);

  return (
    <Screen>
      <View style={styles.header}>
        <View>
          <Text style={styles.title_1}>Mine</Text>
          <Text style={styles.title_2}>subjects</Text>
        </View>
        <Text style={styles.title_2}>⌀ {TotalAverage}</Text>
      </View>
      <FlatList
        data={subjects}
        keyExtractor={(subject) => subject.name}
        renderItem={({ item }) => {
          const averageGrade = calculateSubjectAverage(item.grades);
          return (
            <SubjectItem
              title={item.name}
              grade={averageGrade}
              color={item.color}
              bgColor="#002395"
              onPress={() => navigation.navigate("Subject", item)}
            />
          );
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  title_1: {
    fontSize: 23,
    color: "#FFD700",
  },
  title_2: {
    fontSize: 36,
    color: "#FFD700",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SubjectScreen;
