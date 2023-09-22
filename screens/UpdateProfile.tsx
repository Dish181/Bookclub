import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { auth, db } from "../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../stylesheet";

export interface User {
  user_user_id: string;
  user_username: string;
  user_avatar_img: string;
  user_bio: string;
  user_fave_books: Book[];
}

export interface Book {
  book_author: string;
  book_title: string;
  book_img: string;
}

const UpdateProfile: React.FC = () => {
  const navigation = useNavigation();

  const initialUserState: User = {
    user_user_id: "XVO4daYZDcRc38voORYKDc4wIp73",
    user_username: "",
    user_avatar_img: "",
    user_bio: "",
    user_fave_books: [],
  };

  const [user, setUser] = useState<User>(initialUserState);

  const handleInputChange = (field: string, value: string) => {
    setUser({ ...user, [field]: value });
  };

  const handleUpdateBook = () => {
    const newBook: Book = {
      book_author: "",
      book_title: "",
      book_img: "",
    };
    setUser({ ...user, user_fave_books: [...user.user_fave_books, newBook] });
  };

  const handleSubmit = () => {
    if (!user.user_bio || !user.user_avatar_img) {
      Alert.alert("Error", "Username and Avatar Image URL are required.");
      return;
    }
    if (user.user_fave_books.length === 0) {
      Alert.alert("Required", "Please add at least one favorite book.");
      return;
    }

    const userRef = doc(db, "users", "XVO4daYZDcRc38voORYKDc4wIp73");
    updateDoc(userRef, {
      user_username: user.user_username,
      user_bio: user.user_bio,
      user_avatar_img: user.user_avatar_img,
      user_fave_books: user.user_fave_books,
    })
      .then(() => {
        Alert.alert("Success", "Profile updated successfully.");
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert("Error updating");
      });
  };

  return (
    <ScrollView style={styles.updateProfileContainer}>
      <Text style={styles.updateProfileHeader}>Update Profile</Text>

      <Text style={styles.label}>Username:</Text>
      <TextInput
        value={user.user_username}
        onChangeText={(text) => handleInputChange("user_username", text)}
        style={styles.inputProfileForm}
      />

      <Text style={styles.label}>Avatar Image URL:</Text>
      <TextInput
        value={user.user_avatar_img}
        onChangeText={(text) => handleInputChange("user_avatar_img", text)}
        style={styles.inputProfileForm}
      />

      <Text style={styles.label}>Bio:</Text>
      <TextInput
        value={user.user_bio}
        onChangeText={(text) => handleInputChange("user_bio", text)}
        style={styles.inputProfileForm}
        multiline
      />

      <Text style={styles.label}>Favourite Books:</Text>
      {user.user_fave_books.map((book, index) => (
        <View key={index}>
          <Text style={styles.favBook}>Book {index + 1}:</Text>

          <Text style={styles.label}>Title:</Text>
          <TextInput
            value={book.book_title}
            onChangeText={(text) => {
              const updatedBooks = [...user.user_fave_books];
              updatedBooks[index].book_title = text;
              setUser({ ...user, user_fave_books: updatedBooks });
            }}
            style={styles.inputProfileForm}
            placeholder={`Title ${index + 1}`}
          />

          <Text style={styles.label}>Author:</Text>
          <TextInput
            value={book.book_author}
            onChangeText={(text) => {
              const updatedBooks = [...user.user_fave_books];
              updatedBooks[index].book_author = text;
              setUser({ ...user, user_fave_books: updatedBooks });
            }}
            style={styles.inputProfileForm}
            placeholder={`Author ${index + 1}`}
          />

          <Text style={styles.label}>Image URL:</Text>
          <TextInput
            value={book.book_img}
            onChangeText={(text) => {
              const updatedBooks = [...user.user_fave_books];
              updatedBooks[index].book_img = text;
              setUser({ ...user, user_fave_books: updatedBooks });
            }}
            style={styles.inputProfileForm}
            placeholder={`Image URL ${index + 1}`}
          />
        </View>
      ))}
      <TouchableOpacity onPress={handleUpdateBook}>
        <Text style={styles.addBook}>Add Book</Text>
      </TouchableOpacity>

      <View style={styles.updateProfileBtnWrapper}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("home", { userId: user.user_user_id })
          }
        >
          <Text style={styles.backProfileBtn}>Back to Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.updateProfileBtn}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UpdateProfile;