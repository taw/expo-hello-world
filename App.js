import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default function App() {
  let [counter, setCounter] = useState(20);
  let changeCounter = (x) => {
    setCounter((oldValue) => oldValue + x);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Magic Life Counter</Text>
      <View style={styles.hbox}>
        <AppButton
          title="-5"
          onPress={() => {
            changeCounter(-5);
          }}
        />
        <AppButton
          title="-1"
          onPress={() => {
            changeCounter(-1);
          }}
        />
        <AppButton
          title="+1"
          onPress={() => {
            changeCounter(1);
          }}
        />
        <AppButton
          title="+5"
          onPress={() => {
            changeCounter(5);
          }}
        />
        <AppButton
          title="RESET"
          onPress={() => {
            setCounter(20);
          }}
        />
      </View>
      <Text style={styles.value}>Your Life: {counter}</Text>
      {counter <= 0 ? <Text style={styles.dead}>You died!</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  appButtonContainer: {
    elevation: 8,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: "#2196f3",
    padding: 4,
    height: 30,
  },
  hbox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  header: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  value: {
    margin: 36,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  dead: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
  },
});
