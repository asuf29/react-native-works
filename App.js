import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box_1}></View>
      <View style={styles.box_2}></View>
      <View style={styles.box_3}></View>
      <View style={styles.box_4}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "navy",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box_1: {
    width: 75,
    height: 75,
    backgroundColor: "gray",
  },
  box_2: {
    width: 75,
    height: 75,
    backgroundColor: "pink",
  },
  box_3: {
    width: 75,
    height: 75,
    backgroundColor: "purple",
  },
  box_4: {
    width: 75,
    height: 75,
    backgroundColor: "yellow",
  },
});
