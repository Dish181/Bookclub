import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword
} from "firebase/auth";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mismatch, setMismatch] = useState("");

  const handlePasswordConfirmation = (text: any) => {
    if (text != password && text != "") {
      setMismatch("Passwords do not match");
    } else {
      setMismatch("");
    }
  };

  const handleSignUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        alert(error.message);
        setEmail("");
        setPassword("");
      });
  };

  return (
    <View>
      <Text>Sign Up Here:</Text>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
      ></TextInput>
      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}
        secureTextEntry
      ></TextInput>
      {mismatch ? <Text>{mismatch}</Text> : null}
      <TextInput
        placeholder="Confirm Password"
        autoCapitalize="none"
        onChangeText={(text) => {
          handlePasswordConfirmation(text);
        }}
        secureTextEntry
      ></TextInput>
      <TouchableOpacity onPress={()=>{handleSignUp}}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
