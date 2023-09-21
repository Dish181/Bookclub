import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import BookclubCard from "../components/BookclubCard";
import { styles } from "../stylesheet";
import { getUserBookclubs, getUser } from "../gettingData";
import { useContext } from "react";
import { UserContext } from "../usercontext";

interface NavProps {
  navigation: any;
}

const Home: React.FC<NavProps> = ({ navigation }) => {
  const [bookClubs, setBookClubs] = useState([]);
  const { uid } = useContext(UserContext);
  const [user, setUser] = useState({
    user_username: "",
    user_avatar_img: "",
    user_bio: "",
    user_fave_books: [
      {
        book_author: "",
        book_title: "",
        book_img: "",
      },
    ],
  });

  useEffect(() => {
    getUserBookclubs(uid, setBookClubs);
    getUser(uid, setUser);
  }, [uid]);

  return (
    <View style={styles.bookContainer}>
      <Button
        title="Go To Single Book Club Page"
        onPress={() => navigation.navigate("SingleBookClubPage")}
      />
      <Text>{user.user_username}'s BookClubs</Text>
      {bookClubs.map((bookclub) => {
        return <BookclubCard key={bookclub} bookclubName={bookclub} />;
      })}
    </View>
  );
};

export default Home;
