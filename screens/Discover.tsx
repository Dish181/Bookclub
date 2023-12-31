import { View, Text, Button, Pressable, ScrollView } from "react-native";
import React from "react";
import { styles } from "../stylesheet";

const Discover: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.header}>Discover</Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Create a book club")}
        >
          <Text style={styles.buttonText}>Create a Book Club</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Find a book club")}
        >
          <Text style={styles.buttonText}>Find a Book Club 🔍</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Discover;
