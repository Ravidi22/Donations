import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const Avatar = ({ image, size = 50 }) => {
  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: size / 2,
      overflow: "hidden",
      backgroundColor: "gray", // Default background color
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: size,
      height: size,
    },
  });

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={image} style={styles.image} resizeMode="cover" />
      ) : (
        <Text>{"No Image"}</Text>
      )}
    </View>
  );
};

export default Avatar;
