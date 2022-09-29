import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useSelector } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const state = useSelector((state) => {
    return {
      users: state.users.users,
    };
  });
  const login = (username, email) => {
    console.log(false);
    state.users &&
      state.users.forEach((element) => {
        if (element.username === username && element.email === email) {
          console.log(true);
        }
      });
  };
  return (
    <View style={styles.container}>
      <TextInput placeholder="username"
              onChangeText={(newText) => setUsername(newText)}
      ></TextInput>
      <TextInput
        placeholder="email"
        onChangeText={(newText) => setEmail(newText)}
      ></TextInput>
      <Button
        title="login"
        onPress={() => {
          login(username, email);
        }}
      />
      
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default Login;
