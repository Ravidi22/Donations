import { Button } from "react-native";

export default Button = (
  label,
  Provider,
  Icon,
  IconSize,
  IconColor,
  handlePress
) => {
  return (
    <Button style={styles.button} title={label} onPress={handlePress}>
      <Provider
        name={Icon}
        size={IconSize || 50}
        color={IconColor || "black"}
      />
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {},
});
