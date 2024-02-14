import React, { useState } from "react";
import { SpeedDial } from "@rneui/themed";

export default ActionsSpeedDial = () => {
  const [open, setOpen] = useState(false);

  return (
    <SpeedDial
      isOpen={open}
      buttonStyle={{
        backgroundColor: "rgba(90, 154, 230, 1)",
      }}
      icon={{ name: "edit", color: "#fff" }}
      openIcon={{ name: "close", color: "#fff" }}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
      style={{
        position: "absolute",
        bottom: 150,
      }}
    >
      <SpeedDial.Action
        icon={{ name: "settings", color: "#fff" }}
        buttonStyle={{
          backgroundColor: "rgba(90, 154, 230, 1)",
        }}
        title="הגדרות"
        onPress={() => console.log("Delete Something")}
      />
      <SpeedDial.Action
        icon={{ name: "add", color: "#fff" }}
        buttonStyle={{
          backgroundColor: "rgba(90, 154, 230, 1)",
        }}
        title="הוסף כתובת"
        onPress={() => console.log("Add Something")}
      />
    </SpeedDial>
  );
};
