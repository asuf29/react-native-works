import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Hello world</Text>
      </View>
      <View style={styles.container}>
        <Text>Hii</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    margin: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
