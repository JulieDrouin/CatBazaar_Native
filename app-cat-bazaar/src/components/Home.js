import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Cat Bazaar</Text>
        <TouchableOpacity style={styles.touchButtonContainer}>
          <Text style={styles.touchButton}>Go !</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Chalkboard SE",
    fontSize: 35,
    color: "white",
    marginBottom: 100,
  },
  touchButtonContainer: {
    elevation: 8,
    backgroundColor: "#FF8C00",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#FF8C00",
  },
  touchButton: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#FF8C00",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginHorizontal: 45,
    marginVertical: 8,
    paddingVertical: 8,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Chalkboard SE",
    fontSize: 15,
  },
});
