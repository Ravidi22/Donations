import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import Timeline from "../../../../component/map/timeLine/Timeline";
import { Button } from "@rneui/base";
import { useDraggableGestureHandler } from "../../../../state/hooks/useDraggableGestureHandler";
import { useRouteStore } from "../../../../state/stores/useRouteStore";

const screenHeight = Dimensions.get("window").height;

export const DraggableBottomSheet = () => {
  const fetchRoute = useRouteStore((state) => state.fetchRoute);
  const route = useRouteStore((state) => state.route);

  const { height, gestureHandler } = useDraggableGestureHandler(
    150,
    screenHeight * 0.9,
    150
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  const toggleSheet = () => {
    if (height.value === 150) {
      height.value = screenHeight * 0.9;
    } else {
      height.value = 150;
    }
  };

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.sheet, animatedStyle]}>
        <View style={{ width: "100%" }}>
          <TouchableWithoutFeedback onPress={toggleSheet}>
            <View style={styles.dragItem} />
          </TouchableWithoutFeedback>
          {route.length > 0 ? (
            <Timeline route={route} />
          ) : (
            <Button
              title="קבלת נתיב"
              buttonStyle={styles.buttonStyle}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={fetchRoute}
              titleStyle={{ fontWeight: "bold" }}
            />
          )}
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
  buttonStyle: {
    backgroundColor: "rgba(90, 154, 230, 1)",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
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
