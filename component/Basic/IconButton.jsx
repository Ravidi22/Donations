import { TouchableOpacity } from "react-native";

export default IconButton = (
  Provider,
  Icon,
  IconSize,
  IconColor,
  handlePress
) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={handlePress}>
      <Provider
        name={Icon}
        size={IconSize || 50}
        color={IconColor || "black"}
      />
    </TouchableOpacity>
  );
};
