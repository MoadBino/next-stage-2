import { StyleSheet, Text, View, Button } from "react-native";
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
  const Logout = () => {};
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title={state.users ? "logout" : "login"}
        onPress={() => {
          if (state.users) {
            Dispatch(logout());
          }
          navigation.navigate("login");
        }}
      />
      <Button
        title="post"
        onPress={() => {
          navigation.navigate("Post");
        }}
      />
    </View>
  );
};

export default Navbar;
