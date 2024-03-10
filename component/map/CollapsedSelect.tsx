import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";
import { Divider, Icon } from "@rneui/themed";

interface CollapsedSelectProps {
  title: string;
  options: Record<string, string>;
  onOptionSelect?: (value: string) => void;
}

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CollapsedSelect = (props: CollapsedSelectProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const [selctedOption, setSelctedOption] = useState("");

  const toggleCollapsed = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCollapsed(!collapsed);
  };

  const handleOptionSelect = (value: string) => {
    setSelctedOption(props.options[value]);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCollapsed(true);
  };

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "red",
        padding: 15,
        width: "90%",
        borderRadius: 25,
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
        onPress={toggleCollapsed}
      >
        <Text>{selctedOption === "" ? props.title : selctedOption}</Text>
        <Icon
          name={collapsed ? "chevron-down-sharp" : "chevron-up-sharp"}
          type="ionicon"
        />
      </TouchableOpacity>

      {!collapsed && (
        <View
          style={{
            flexDirection: "column",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          {Object.entries(props.options).map(([key, label]) => (
            <TouchableOpacity key={key} onPress={() => handleOptionSelect(key)}>
              <Text style={{ paddingVertical: 15, textAlign: "right" }}>
                {label}
              </Text>
              <Divider />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default CollapsedSelect;
