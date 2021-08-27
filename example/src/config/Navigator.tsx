import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useTheme } from "../../core";
import ColorScheme from "../screens/ColorScheme";
import Home from "../screens/Home";
import ShapeScheme from "../screens/ShapeScheme";
import TypographyScheme from "../screens/TypographyScheme";

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: true,
          headerStyle: {
            backgroundColor: theme.colorScheme.primary,
          },
          headerTitleStyle: {
            fontFamily: theme.typographyScheme.h6.fontFamily,
            fontSize: theme.typographyScheme.h6.fontSize,
          },
          headerBackTitle: "",
          headerTintColor: theme.colorScheme.onPrimary,
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="ColorScheme"
          component={ColorScheme}
          options={{ title: "Color Scheme" }}
        />
        <Stack.Screen
          name="TypographyScheme"
          component={TypographyScheme}
          options={{ title: "Typography Scheme" }}
        />
        <Stack.Screen
          name="ShapeScheme"
          component={ShapeScheme}
          options={{ title: "Shape Scheme" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;