import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import { Timeline } from "../../../../component/map/Timeline";

const screenHeight = Dimensions.get("window").height;

export const DraggableBottomSheet = () => {
  const height = useSharedValue(150);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startHeight = height.value;
    },
    onActive: (event, context) => {
      let newHeight = context.startHeight - event.translationY;
      newHeight = Math.max(Math.min(newHeight, screenHeight * 0.9), 150);
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
        <View style={styles.dragItem} />
        <View>
          <Timeline
            data={[
              {
                title: "Event 1",
                description: "Description of event 1.",
                iconComponent: <Text>📅</Text>,
              },
            ]}
          />
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default DraggableBottomSheet;
