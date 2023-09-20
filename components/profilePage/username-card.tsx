import { View, Text, Image } from 'react-native'
import React from 'react'

const Username: React.FC<{user:{user_username: string, user_avatar_img: string}}> = ({user})=> {
  return (
    <View style={{

        borderWidth: 5,
        borderBlockColor: 'blue',
        flex: 0.2,
        alignItems: 'center', 
        justifyContent: "space-evenly",
        padding:5


    }}>
      <Image style={{ width: 100, height: 100}} source={{uri: user.user_avatar_img}}/> 
      <Text>{user.user_username}</Text>
     
    </View>
  )
}

export default Username;