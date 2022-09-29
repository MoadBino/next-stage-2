import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { saveUsers } from "./redux/reducer/users";
import { useDispatch } from "react-redux";
export default function Data() {
  const Dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        Dispatch(saveUsers(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {},
});
