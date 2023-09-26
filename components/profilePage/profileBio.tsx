import { View, Text } from "react-native";
import React from "react";

const ProfileContainer: React.FC<{ user: { user_bio: string } }> = ({
  user,
}) => {
  return (
    <View
      style={{
        borderWidth: 5,
        borderBlockColor: "blue",
        flex: 0.2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>{user.user_bio}</Text>
    </View>
  );
};

export default ProfileContainer;
