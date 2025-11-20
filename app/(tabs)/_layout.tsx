import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { COLORS } from "@/src/constants";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray7,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={28}
              name="house.fill"
              color={focused ? COLORS.primary : COLORS.gray7}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="loan"
        options={{
          title: "Loan",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="electric-bolt"
              size={28}
              color={focused ? COLORS.primary : COLORS.gray7}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="invest"
        options={{
          title: "Invest",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="electric-bolt"
              size={28}
              color={focused ? COLORS.primary : COLORS.gray7}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="loans"
        options={{
          title: "Loans",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5
              name="file-alt"
              size={24}
              color={focused ? COLORS.primary : COLORS.gray7}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Octicons
              name="person"
              size={24}
              color={focused ? COLORS.primary : COLORS.gray7}
            />
          ),
        }}
      />
    </Tabs>
  );
}
