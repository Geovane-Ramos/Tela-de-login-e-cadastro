import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function PageHome() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirPassword, setConfirPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.areaCadastro}>
        <Text style={styles.textTitulo}>Inscrever-se</Text>
        <TextInput
          autoCorrect={true}
          style={styles.areaInput}
          placeholder="Informe um E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />

        <TextInput
          autoCorrect={true}
          style={styles.areaInput}
          placeholder="Informe um usuário"
          value={name}
          onChangeText={(text) => setName(text)}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.areaInput}
          placeholder="Informe uma senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          keyboardType="numeric"
        />

        <TextInput
          autoCorrect={true}
          style={styles.areaInput}
          placeholder=" Confirme sua senha"
          value={confirPassword}
          onChangeText={(text) => setConfirPassword(text)}
          keyboardType="numeric"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.areBtn}>
          <Text style={styles.textBtn}>Inscrever-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#06CBDF",
  },
  areaCadastro: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 25,
  },
  textTitulo: {
    fontSize: 30,
    color: "#5A5A5A",
    marginBottom: 10,
  },
  areaInput: {
    borderColor: "#CCCCCC",
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    paddingHorizontal: "35%",
    paddingLeft: 10,
    height: 35,
  },
  areBtn: {
    width: 200,
    height: 35,
    borderRadius: 15,
    justifyContent: "center",
    backgroundColor: "#06CBDF",
    alignItems: "center",
  },
  textBtn: {
    textAlign: "center",
    fontSize: 20,
    color: "#FFFFFF",
  },
});
