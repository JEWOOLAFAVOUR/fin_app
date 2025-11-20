import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES } from "../constants";

const IntroSlider = () => {
  const navigation = useNavigation();

  const introData = [
    {
      id: 1,
      title: "ShapeScape",
      onPress: () => navigation.navigate("ShapeScape"),
      bg: COLORS.primary_1,
    },
    {
      id: 2,
      title: "Wolffins",
      onPress: () => navigation.navigate("Wolffins"),
      bg: COLORS.secondary_1,
    },
    {
      id: 3,
      title: "Bevel",
      onPress: () => navigation.navigate("Onboarding"),
      bg: COLORS.gray,
    },
  ];

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor={COLORS.black} barStyle={"light-content"} />

      <FlatList
        data={introData}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={item.onPress}
              style={{
                height: SIZES.height * 0.33,
                backgroundColor: item.bg,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ ...FONTS.h1, color: COLORS.white }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default IntroSlider;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});
