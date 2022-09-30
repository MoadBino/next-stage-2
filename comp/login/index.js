import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { isLogin } from "../../redux/reducer/users";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const Login = () => {
  const Dispatch = useDispatch();
  const navigation = useNavigation();
  const [username, setUsername] = useState("Bret");
  const [email, setEmail] = useState("Sincere@april.biz");
  const state = useSelector((state) => {
    return {
      users: state.users.users,
    };
  });
  const login = (username, email) => {
    state.users &&
      state.users.forEach((element) => {
        if (element.username === username && element.email === email) {
          Dispatch(isLogin(element.id));
          navigation.navigate("Post");
          //Bret Sincere@april.biz
        }
      });
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="username"
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
