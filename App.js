import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper_view_container}>
        <Text style={{ color: "white" }}>Hello world</Text>
      </View>
      <View style={styles.center_view_container}>
        <Text style={{ color: "white" }}>Hello React Native</Text>
      </View>
      <View style={styles.bottom_view_container}>
        <Text>Hii</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  upper_view_container: {
    flex: 1,
    backgroundColor: "blue",
  },
  center_view_container: {
    flex: 2,
    backgroundColor: "black",
  },
  bottom_view_container: {
    flex: 2,
    backgroundColor: "yellow",
  },
});
