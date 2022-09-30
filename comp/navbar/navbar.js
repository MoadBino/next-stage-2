import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="login"
        onPress={() => {
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
