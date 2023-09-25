import { View, ScrollView, Text, TextInput, Button } from "react-native";
import { useState, useEffect } from "react";
import { getComments } from "../gettingData";
import CommentCard from "../components/CommentCard";
import { styles } from "../stylesheet";
import { addComment } from "../addingData";
import { serverTimestamp } from "firebase/firestore";
import { useContext } from "react";
import { UserContext } from "../usercontext";
import { getUser } from "../gettingData";

const Discussion: React.FC<{}> = ({}) => {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");
  const [newCommentTitle, setNewCommentTitle] = useState("");
  const [reload, setReload] = useState(false);
  const { uid } = useContext(UserContext);
  const [user, setUser] = useState<{ user_username: string }>({
    user_username: "",
  });
  useEffect(() => {
    getUser(uid, setUser);
  }, [uid]);

  useEffect(() => {
    getComments("KEtAeLGZ0ZjCeEoKAcvN", "book_chat", setComments).then(() => {
      setReload(false);
    });
  }, [reload]);

  const handleSubmit = () => {
    const newComment = {
      author: user.user_username,
      date: serverTimestamp(),
      text: newCommentText,
      title: newCommentTitle,
    };

    addComment("KEtAeLGZ0ZjCeEoKAcvN", "book_chat", newComment).then(() => {
      setReload(true);
      setNewCommentText("");
      setNewCommentTitle("");
    });
  };

  return (
    <View style={styles.basicContainer}>
      <ScrollView>
        <Text>Chat about this weeks book</Text>
        {comments.map((comment) => {
          return <CommentCard key="comment" comment={comment} />;
        })}
        <Text>Post a comment</Text>
        <TextInput
          style={styles.input}
          placeholder="comment title"
          onChangeText={(text) => setNewCommentTitle(text)}
          value={newCommentTitle}
          multiline={true}
          enablesReturnKeyAutomatically={true}
        ></TextInput>
        <TextInput
          style={styles.commentInput}
          placeholder="add comment"
          value={newCommentText}
          onChangeText={(text) => setNewCommentText(text)}
          multiline={true}
          enablesReturnKeyAutomatically={true}
        ></TextInput>
        <Button title="SUBMIT" onPress={handleSubmit} />
      </ScrollView>
    </View>
  );
};

export default Discussion;
