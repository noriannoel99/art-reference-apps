import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const TabBarIcon = ({ focused, name, size, color }) => {
  const iconName = focused ? name : `${name}-outline`;

  return <FontAwesome name={iconName} size={size} color={color} />;
};

export default TabBarIcon;
