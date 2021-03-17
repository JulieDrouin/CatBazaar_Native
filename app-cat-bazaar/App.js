import React from "react";
import { View, SafeAreaView, StyleSheet} from "react-native";
import { Dimensions } from "react-native";
import Home from "./src/components/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeViewHeader}>
        <Home/>
      </SafeAreaView>
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  safeViewHeader: {
    flex: 1,
    backgroundColor: "#5F9EA0",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Chalkboard SE",
    fontSize: 35,
    color: "white",
  }
});
