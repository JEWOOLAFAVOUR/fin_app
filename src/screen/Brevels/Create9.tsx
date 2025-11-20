import FormButton from "@/src/components/FormButton";
import HeaderB from "@/src/components/HeaderB";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create9 = () => {
  const navigation = useNavigation();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const focusOptions = [
    {
      id: "fitness",
      title: "Lasting fitness",
      description: "Building strength and endurance to be at your best.",
      icon: "💪",
    },
  ];

  const toggleOption = (optionId: string) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions((prev) => prev.filter((id) => id !== optionId));
    } else {
      setSelectedOptions((prev) => [...prev, optionId]);
    }
  };

  const isSelected = (optionId: string) => {
    return selectedOptions.includes(optionId);
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={{ flex: 1 }}>
        <HeaderB />
        <View style={styles.content}>
          <Text style={styles.title}>
            Is there anything else you'd like to focus on?
          </Text>

          <View style={styles.optionsContainer}>
            {focusOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.optionCard,
                  isSelected(option.id) && styles.selectedCard,
                ]}
                onPress={() => toggleOption(option.id)}
              >
                <View style={styles.cardContent}>
                  <View style={styles.iconContainer}>
                    <Text style={styles.iconText}>{option.icon}</Text>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.optionTitle}>{option.title}</Text>
                    <Text style={styles.optionDescription}>
                      {option.description}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.checkbox,
                      isSelected(option.id) && styles.checkedBox,
                    ]}
                  >
                    {isSelected(option.id) && (
                      <AntDesign name="check" size={16} color={COLORS.white} />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => {
            // Navigate to final screen or complete onboarding
            console.log("Skipped additional focus areas");
          }}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <FormButton
          title="Continue"
          onPress={() => {
            if (selectedOptions.includes("fitness")) {
              (navigation as any).navigate("Create10");
            } else {
              console.log("No fitness selected, complete onboarding");
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Create9;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: SIZES.h1,
  },
  content: {
    flex: 1,
    paddingTop: SIZES.h2,
  },
  title: {
    ...FONTS.h2,
    color: COLORS.black,
    textAlign: "center",
    marginBottom: SIZES.h1 * 1.5,
    lineHeight: SIZES.h2 * 1.4,
  },
  optionsContainer: {
    marginTop: SIZES.h3,
  },
  optionCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.h3,
    padding: SIZES.h3,
    marginBottom: SIZES.h4,
    borderWidth: 2,
    borderColor: COLORS.gray2,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  selectedCard: {
    borderColor: COLORS.primary_1,
    // backgroundColor: COLORS.primary_1 + "10",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: SIZES.h1 * 2,
    height: SIZES.h1 * 2,
    borderRadius: SIZES.h1,
    backgroundColor: COLORS.gray2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SIZES.h3,
  },
  iconText: {
    fontSize: SIZES.h2,
  },
  textContainer: {
    flex: 1,
  },
  optionTitle: {
    ...FONTS.h4,
    color: COLORS.black,
    fontFamily: "Inter-Bold",
    marginBottom: SIZES.h5,
  },
  optionDescription: {
    ...FONTS.body4,
    color: COLORS.gray,
    lineHeight: SIZES.body4 * 1.4,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.h4,
  },
  checkedBox: {
    backgroundColor: COLORS.black,
    borderColor: COLORS.black,
  },
  buttonContainer: {
    gap: SIZES.h4,
  },
  skipButton: {
    alignItems: "center",
    paddingVertical: SIZES.h4,
  },
  skipText: {
    ...FONTS.body2,
    color: COLORS.gray,
    fontFamily: "Inter-Medium",
  },
});
