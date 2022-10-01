import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducer/users";
const Navbar = () => {
  const Dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      users: state.users.isLogin,
    };
  });

  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <Pressable
        style={styles.button}
        onPress={() => {
          if (state.users) {
            Dispatch(logout());
          }
          navigation.navigate("login");
        }}
      >
        <Text style={styles.text}>{state.users ? "logout" : "login"}</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("Post");
        }}
      >
        <Text style={styles.text}>Blogs</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomWidth:1,
    marginBottom:30,
  },
  text:{

    fontSize:20,
  }
});
export default Navbar;
