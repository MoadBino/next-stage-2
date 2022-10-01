import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/reducer/posts";
const AddPost = ({ openAdd, setOpenAdd, userId }) => {
  const Dispatch = useDispatch();
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const input = (placeholder, set) => {
    return (
      <TextInput
        style={{
          width: 200,
          textAlign: "center",
          borderWidth: 1,
          marginBottom: 10,
          borderRadius: 10,
        }}
        placeholder={placeholder}
        onChangeText={(newText) => set(newText)}
      ></TextInput>
    );
  };
  useEffect(() => {
    if (openAdd) {
      setModalVisible(true);
    }
  }, [openAdd]);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ borderRadius: 10 }}>
            <Text style={{textAlign:"left" ,width:200 ,fontSize:15,marginBottom:5}}>body</Text>
              {input("body", setBody)}
              <Text style={{textAlign:"left" ,width:200 ,fontSize:15,marginBottom:5}}>title</Text>
              {input("title", setTitle)}
            </View>
            <View style={styles.buttons}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  Dispatch(
                    addPost({ body: body, title: title, userId: userId })
                  );
                  setOpenAdd(false);
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>update</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setOpenAdd(false);
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    height: 270,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
    marginTop: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    width: 80,
    height: 41,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 210,

  },
});

export default AddPost;
