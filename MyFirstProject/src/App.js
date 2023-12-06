import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_title}>Eddard Stark</Text>
          <Text style={styles.card_text}>Winter is coming.</Text>
        </View>
        <TouchableOpacity style={styles.card_button_container}>
          <Text style={styles.card_button_text}>I LIKED</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
  card_container: {
    backgroundColor: "white",
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
  },
  card_body: {
    padding: 10,
  },
  card_title: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 10,
    marginBottom: 3,
  },
  card_text: {
    fontSize: 15,
    margin: 10,
    marginTop: 3,
  },
  card_button_container: {
    backgroundColor: "#00C2FF",
    padding: 10,
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card_button_text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
