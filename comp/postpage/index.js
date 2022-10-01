import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { getPost } from "../../redux/reducer/posts";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../redux/reducer/posts";
import UpdateModal from "../modal/update/update";
import AddPost from "../modal/addpost/addpost";
const Post = () => {
  const isMounted = useRef(false);
  const Dispatch = useDispatch();
  const [num, setNum] = useState(0);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState("");
  const [id, setId] = useState("");
  const state = useSelector((state) => {
    return {
      post: state.post.posts,
      id: state.users.id,
    };
  });
  useEffect(() => {
    if (isMounted.current) {
      Dispatch(getPost({num:num,empty:false}));
    } else {
      Dispatch(getPost({num:-1,empty:true}));
      isMounted.current = true;
    }
  }, [num]);

  return (
    <ScrollView>
      <View>
        <View style={{ marginBottom: 50 }}>
          <Button

            title="ADD post"
            onPress={() => {
              setOpenAdd(true);
            }}
          />
        </View>
        {state.post &&
          state.post.map((element, index) => {
            return (
              <View key={index} style={styles.childcontainer}>
                <Text
                  style={{
                    fontSize: 20,
                    width: 300,
                    marginBottom: 15,
                    borderBottomWidth: 1,
                  }}
                >
                  {element.title}
                </Text>
                <Text style={{ width: 300, marginBottom: 10 }}>
                  {element.body}
                </Text>
                {element.userId == state.id ? (
                  <View>
                    <Button
                      title="remove"
                      onPress={() => {
                        Dispatch(deletePost(element.id));
                      }}
                    />
                    <Button
                      title="update"
                      onPress={() => {
                        setOpen(true);
                        setId(element.id);
                      }}
                    />
                  </View>
                ) : (
                  ""
                )}
              </View>
            );
          })}
      </View>
      {state.post.length > 0 ? (
        <Button
          onPress={() => {
            setNum(num + 5);
          }}
          title="load more"
        />
      ) : (
        ""
      )}
      <UpdateModal open={open} id={id} setOpen={setOpen} />
      <AddPost openAdd={openAdd} setOpenAdd={setOpenAdd} userId={state.id} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  childcontainer: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 16,
    borderWidth: 1,
    marginBottom: 10,
    padding:10
  },
});
export default Post;
