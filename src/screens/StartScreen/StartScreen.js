import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ripple from "react-native-material-ripple";

import theme from "../../styles/theme";

import Logo from "../../../assets/logo.svg";

export default function StartScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Logo fill="#fff" width={200} height={55} />

      <Text style={styles.description}>
        Envie e receba dinheiro pelo smartphone
      </Text>

      <Ripple
        rippleContainerBorderRadius={50}
        style={styles.button}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Text style={styles.textButton}>Criar minha conta no Picpay!</Text>
      </Ripple>

      <TouchableOpacity>
        <Text style={styles.registerText}>Já sou cadastrado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  },
  description: {
    color: theme.primaryDarkColor,
    marginVertical: 25
  },
  button: {
    width: "70%",
    margin: 25,
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 50
  },
  textButton: {
    textAlign: "center",
    color: theme.primaryDarkColor
  },
  registerText: {
    color: "#fff",
    fontWeight: "600"
  }
});
