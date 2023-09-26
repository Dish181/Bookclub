import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { getSingleDoc } from "../gettingData";
import { styles } from "../stylesheet";
type CurrentRead = {
  author: string;
  description: string;
  book_name: string;
  img_url: string;
};

const BookclubCard: React.FC<{ bookclub_id: string; navigation: any }> = ({
  bookclub_id,
  navigation,
}) => {
  const [currentBookClub, setCurrentBookClub] = useState<{
    name: string;
    current_read: CurrentRead;
    members: object;
    description: string;
    img_url: string;
  }>({
    name: "",
    current_read: {
      author: "",
      description: "",
      book_name: "",
      img_url: "",
    },
    members: {},
    description: "",
    img_url: "",
  });

  useEffect(() => {
    getSingleDoc("bookclubs", bookclub_id, setCurrentBookClub);
  }, []);

  const handlePress = () => {
    navigation.navigate("SingleBookClubPage", {
      bookclub_id: bookclub_id,
    });
  };
  return (
    <View style={styles.bookclubContainer}>
      <ScrollView>
        <Pressable onPress={handlePress}>
          <View style={styles.bookclubImageContainer}>
            <Image
              style={styles.bookclubImage}
              source={{ uri: currentBookClub.img_url }}
            />
          </View>

          <Text style={styles.bookclubName}>{currentBookClub.name}</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default BookclubCard;
