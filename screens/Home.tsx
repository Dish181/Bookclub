import { View, Text, Button, Image} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import BookclubCard from "../components/BookclubCard";
import { getUserBookclubs, getUser } from "../gettingData";
import { useContext } from "react";
import { UserContext } from "../usercontext";
import { useFocusEffect } from "@react-navigation/native";
import {styles} from "../stylesheet";

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

  useFocusEffect(
    React.useCallback(() => {
    getUserBookclubs(uid, setBookClubs);
    getUser(uid, setUser);
  }, [uid]));

  return (
    <View style={styles.bookContainer}>
      <View style={styles.bookHeader}>
      <Image source={{ uri: user.user_avatar_img }} style={styles.userImage} />
      <Text style={styles.username}>{user.user_username}'s BookClubs</Text>
      </View>
     
      {bookClubs.map((bookclub) => {
        return (
          <BookclubCard
            key={bookclub}
            bookclub_id={bookclub}
            navigation={navigation}
          />
        );
      })}
    </View>
  );
};

export default Home;

