import {
  Text,
  Button,
  ScrollView,
  Image,
  View,
  Modal,
  Pressable,
} from "react-native";
import { useEffect, useState } from "react";
import { styles } from "../stylesheet";
import SingleBook from "../components/SingleBook";
import GestureRecognizer from "react-native-swipe-gestures";
import { useContext } from "react";
import { UserContext } from "../usercontext";

import { useFocusEffect } from "@react-navigation/native";
import React from "react";


import { getSingleDoc, checkIfMember, getCollection } from "../gettingData";
import { leaveJoinClub } from "../addingData";


type CurrentRead = {
  author: string;
  description: string;
  book_name: string;
  img_url: string;
};

type Member = {
  user_username: string;
  user_avatar_image: "";
  user_bio: "";
  user_bookclubs: [];
  user_fave_books: [];
};

export const SingleBookClubPage: React.FC<{
  navigation: any;
  route: any;
}> = ({ navigation, route }) => {
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

  const { bookclub_id } = route.params;
  const [members, setMembers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isUserMember, setIsUserMember] = useState<null | boolean>(null);
  const { uid } = useContext(UserContext);

  useFocusEffect(
    React.useCallback(() => {


      getSingleDoc("bookclubs", bookclub_id, setCurrentBookClub);
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      checkIfMember(uid, bookclub_id)
      .then((bool) => {
        setIsUserMember(bool)
      })
    }, [])
  );

  const membersNestedArray = Object.entries(currentBookClub.members);


  const handleClick = (memberName: string) => {
    getCollection("users", setMembers);
    const membersArray = members.filter((singlemember: Member) => {
      return singlemember.user_username === memberName;
    });
    navigation.navigate("User Profile", { member: membersArray[0] });
    setModalVisible(false);
  };

  const handleJoinLeave = () => {
    if (isUserMember === null) {
      alert("Problem getting user status");
      return;
    }
    leaveJoinClub(uid, bookclub_id, isUserMember).then(() => {
      setIsUserMember((isUserMember) => {
        return !isUserMember;
      });
    });
  };


  return (
    <View style={styles.bookClubPage}>
    <ScrollView nestedScrollEnabled={true}>
      <Text style={styles.basicContainer}>
        {" "}
        BOOK CLUB NAME {currentBookClub.name}{" "}
      </Text>

      <Image
        style={styles.basicImage}
        source={{ uri: currentBookClub.img_url }}
      />

      <SingleBook singleBook={currentBookClub.current_read} />

      <Text style={styles.basicContainer}>
        BOOK CLUB DESCRIPTION: {currentBookClub.description}
      </Text>

      <View>
        <GestureRecognizer
          style={{ flex: 1 }}
          onSwipeDown={() => setModalVisible(false)}
        >
          <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.memberContainer}>
              {membersNestedArray.map((member) => {
                return (
                  <View style={styles.memberContainer} key={member[0]}>
                    <Pressable
                      onPress={() => {
                        handleClick(member[0]);
                      }}
                    >
                      <Text>{member[0]}</Text>
                    </Pressable>
                    <Image
                      style={styles.memberImage}
                      source={{ uri: member[1] }}
                    />
                  </View>
                );
              })}
            </View>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.button}>HIDE MEMBERS</Text>
            </Pressable>
          </Modal>
        </GestureRecognizer>
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>
            Members of {currentBookClub.name}
          </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("General Chat", { bookclub_id: bookclub_id })
          }
        >
          <Text style={styles.buttonText}>General Club Discussion</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("Book Chat", { bookclub_id: bookclub_id })
          }
        >
          <Text style={styles.buttonText}>
            Talk about {currentBookClub.current_read.book_name}
          </Text>
        </Pressable>
      </View>

      
      <Pressable
      style={styles.button}
      onPress={() =>
        navigation.navigate("Next Book", {
          bookclub: currentBookClub,
          bookclub_id: bookclub_id,
        })
      }
      >
<Text style={styles.buttonText}>Take a peek at next week's read</Text>

      </Pressable>
      
   
      {isUserMember === null ? null : (
        <Button
          onPress={handleJoinLeave}
          title={isUserMember ? "Leave club" : "Join club"}
          color={'#c5BAAf'}
        ></Button>
      )}
    </ScrollView>
    </View>
  );
};
