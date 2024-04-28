import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import CheckBoxModal from "../components/CheckBoxModal";
import Screen from "../components/Screen";
import ActiveButton from "../components/ActiveButton";
import SettingsContainer from "../components/SettingsContainer";
import SettingsItem from "../components/SettingsItem";
import Collapsible from 'react-native-collapsible';
import AppText from "../components/AppText";
import defaultStyles from "../config/styles";

export default function GradingSystemScreen() {

    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [gradeSystems, setGradeSystems] = useState([
        { id: 1, text: "Grades 1 to 6", checked: false },
        { id: 2, text: "Points 0 to 15", checked: false },
      ]);

    const [grade, setGrades] = useState("Grades 1 to 6")


    return (
        <Screen>
            <Text style={styles.title}>Rating System</Text>
            <View style={styles.selector}>
                <View>
                <Text style={[defaultStyles.text]}>Current grading system</Text>
                <AppText style={styles.grade}>{grade.text}</AppText>
                </View>
                <View>
                <ActiveButton icon="pencil" style={styles.button} size={20} onPress={() => setIsModalVisible(true)} />
                </View>
            </View>
           <CheckBoxModal 
           visible={isModalVisible}
           onPress={() => setIsModalVisible(false)}
           title="Grading system"
           data={gradeSystems}
           setData={setGradeSystems}
           onSelectItem={(grade) => setGrades(grade)}
           closeModal={() => setIsModalVisible(false)}
           />
           <View style={styles.container}>
            <SettingsContainer>
                <SettingsItem title="Exam weighting" />
                <SettingsItem title="Subject weighting" />
            </SettingsContainer>
            <SettingsContainer>
                <SettingsItem 
                title="Average calculation"
                onPress={() => 
                    setIsCollapsed(!isCollapsed)
                } 
                collapsibleActive={isCollapsed}
                    />
                <Collapsible collapsed={isCollapsed}>
                <View>
                    <View>
                    <Text style={[defaultStyles.text, styles.subTitle]}>Average per subject:</Text>
                    <Text style={[defaultStyles.text, styles]}>
                        </Text>
                    </View>
                    <View>
                    <Text style={[defaultStyles.text, styles.subTitle]}>Overall average:</Text>
                    <Text style={[defaultStyles.text]}>
                        </Text>
                    </View>
                </View>
            </Collapsible>
            </SettingsContainer>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    selector: {
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    container: {
        marginVertical: 30
    },
    title: {
        fontSize: 36,
        color: "#FFD700",
        fontWeight: "700",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
      },
      grade: {
        fontWeight: 700
      },
      subTitle: {
        marginVertical:10,
        fontWeight: 700
      }
});
