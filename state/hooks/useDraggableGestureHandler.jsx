import {
  useSharedValue,
  useAnimatedGestureHandler,
} from "react-native-reanimated";

export const useDraggableGestureHandler = (
  initialHeight,
  maxHeight,
  minHeight
) => {
  const height = useSharedValue(initialHeight);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startHeight = height.value;
    },
    onActive: (event, context) => {
      let newHeight = context.startHeight - event.translationY;
      newHeight = Math.max(Math.min(newHeight, maxHeight), minHeight);
      height.value = newHeight;
    },
    onEnd: (_) => {},
  });

  return { height, gestureHandler };
};
