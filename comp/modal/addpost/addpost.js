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
            {input("body", setBody)}
            {input("title", setTitle)}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {

                Dispatch(
                  addPost({ body: body, title: title, userId: userId,})
                );
                setOpenAdd(false);
                setModalVisible(!modalVisible);

              }}
            >
              <Text style={styles.textStyle}>update post </Text>
            </Pressable>
            <Button
              onPress={() => {
                setOpenAdd(false);
                setModalVisible(!modalVisible);
              }}
              title="close"
            />
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
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
});

export default AddPost;
