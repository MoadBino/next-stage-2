import { StyleSheet, Text, View,ScrollView } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./comp/login";
import Data from "./index";
import Post from "./comp/postpage";
import Navbar from "./comp/navbar/navbar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const stack = createNativeStackNavigator();
export default function App() {
  return (

    <Provider store={store}>
      <Data />
      <NavigationContainer>
        <stack.Navigator
          // screenOptions={{
          //     headerShown: false,
          // }}
        >
          <stack.Screen name="login" component={Login} />
          <stack.Screen name="Post" component={Post} />
        </stack.Navigator>
            <Navbar />
      </NavigationContainer>
    </Provider>

  );
}
