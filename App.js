import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  // function sayHello() {
  //   console.log("Hello");
  // }

  const sayHi = (label) => {
    console.log("Hi " + label);
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Hello World!</Text>
      <Text style={{ color: "#fff" }}>Hello React Native!</Text>
      <Button
        title="Press Me!"
        // onPress={() => {
        //   console.log("Hello");
        //   alert("HELLO");
        // }}
        onPress={() => sayHi("Asuf")}
        disabled={false}
        color="darkred"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
