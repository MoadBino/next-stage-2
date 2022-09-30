import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { getPost } from "../../redux/reducer/posts";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../redux/reducer/posts";
const Post = () => {
  const isMounted = useRef(false);
  const Dispatch = useDispatch();
  const [num, setNum] = useState(0);
  const state = useSelector((state) => {
    return {
      post: state.post.posts,
      id: state.users.id,
    };
  });
  console.log(22222, state.post);
  useEffect(() => {
    if (isMounted.current) {
      Dispatch(getPost(num));
    } else {
      isMounted.current = true;
    }
  }, [num]);
  return (
    <ScrollView>
      <View>
        <Text>hello from post page </Text>
        {state.post &&
          state.post.map((element, index) => {
            return (
              <View key={index} style={styles.container}>
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
                  <Button
                    title="remove"
                    onPress={() => {
                      Dispatch(deletePost(element.id));
                    }}
                  />
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
            setNum(num + 1);
          }}
          title="load more"
        />
      ) : (
        ""
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    borderWidth: 4,
    marginBottom: 10,
    backgroundColor: "#EBF1F2",
    height: 250,
  },
});
export default Post;
