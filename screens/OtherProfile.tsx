import { View, Text, ScrollView } from "react-native";
import React from "react";
import Username from "../components/profilePage/username-card";
import ProfileContainer from "../components/profilePage/profileBio";
import FavouriteBookContainer from "../components/profilePage/FavoriteBookContainer";

const OtherProfile: React.FC<{ navigation: any; route: any }> = ({
  navigation,
  route,
}) => {
  const { member } = route.params;
  if (member) {
    return (
      <ScrollView>
        <View
          style={{
            flexDirection: "column",
            borderWidth: 5,
            padding: 10,
            flex: 1,
          }}
        >
          <Text>{member.user_username}'s Profile</Text>
          <Username
            key="user"
            user={{
              user_username: member.user_username,
              user_avatar_img: member.user_img,
            }}
          />
          <ProfileContainer
            key="profile"
            user={{ user_bio: member.user_bio }}
          />
          <FavouriteBookContainer
            user={{
              user_username: member.user_username,
              user_fave_books: member.user_fave_books,
            }}
          />
        </View>
      </ScrollView>
    );
  }
};

export default OtherProfile;
