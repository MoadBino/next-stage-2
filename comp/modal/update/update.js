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
import { updatepost } from "../../../redux/reducer/posts";
const UpdateModal = ({ open, id, setOpen }) => {
  const Dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

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
    if (open) {
      setModalVisible(true);
    }
  }, [open]);

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
            <View style={styles.buttons}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  Dispatch(updatepost({ body: body, title: title, id }));
                  setOpen(false);
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>update </Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setOpen(false);
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
    borderRadius: 10,
    padding: 35,
    height: 200,
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
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    marginBottom: 20,
  },

  buttonClose: {
    backgroundColor: "#2196F3",
    width: 100,
    height: 47,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    height: 150,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 220,
    height: 100,
  },
});

export default UpdateModal;
