import React, { useState,useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { isLogin } from "../../redux/reducer/users";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getPost } from "../../redux/reducer/posts";
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
      <View>
        <Text>username</Text>
        <TextInput
          style={{
            borderWidth: 1,
            width: 200,
            textAlign: "center",
            marginBottom: 20,
          }}
          placeholder="username"
          onChangeText={(newText) => setUsername(newText)}
        ></TextInput>
        <Text>email</Text>
        <TextInput
          style={{
            borderWidth: 1,
            width: 200,
            textAlign: "center",
            marginBottom: 20,
          }}
          placeholder="email"
          onChangeText={(newText) => setEmail(newText)}
        ></TextInput>
      </View>
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
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Login;
