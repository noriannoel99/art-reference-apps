import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import GalleryScreen from "./screens/Gallery";
import ReferenceImage from "./screens/ReferenceImage";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ReferenceImage" component={ReferenceImage} />
    </Stack.Navigator>
  );
}

function GalleryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
      <Stack.Screen name="ReferenceImage" component={ReferenceImage} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home-outline";
            } else if (route.name === "Gallery") {
              iconName = "images-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Gallery"
          component={GalleryStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
