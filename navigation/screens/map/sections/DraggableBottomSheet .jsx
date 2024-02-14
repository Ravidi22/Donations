import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import Timeline from "../../../../component/map/Timeline";
import { LocationsList } from "./LocationsUtils";
const screenHeight = Dimensions.get("window").height;

export const DraggableBottomSheet = () => {
  const height = useSharedValue(120);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startHeight = height.value;
    },
    onActive: (event, context) => {
      let newHeight = context.startHeight - event.translationY;
      newHeight = Math.max(Math.min(newHeight, screenHeight * 0.9), 120);
      height.value = newHeight;
    },
    onEnd: (_) => {},
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.sheet, animatedStyle]}>
        <View style={{ width: "100%" }}>
          <View style={styles.dragItem} />
          <Timeline data={LocationsList} />
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  sheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    columnGap: 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dragItem: {
    width: 40,
    height: 5,
    alignSelf: "center",
    backgroundColor: "#ccc",
    borderRadius: 5,
    zIndex: 3,
    margin: 6,
  },
});

export default DraggableBottomSheet;
