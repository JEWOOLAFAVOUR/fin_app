import FormButton from "@/src/components/FormButton";
import HeaderB from "@/src/components/HeaderB";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create3 = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const healthOptions = [
    {
      id: "sleep",
      title: "Better sleep",
      description:
        "Feeling rested every night and maintaining good sleep habits.",
      icon: "🌙",
    },
    {
      id: "wellbeing",
      title: "Improved wellbeing",
      description:
        "Eating better, stressing less, and forming habits that help you thrive.",
      icon: "😌",
    },
    {
      id: "fitness",
      title: "Lasting fitness",
      description: "Building strength and endurance to be at your best.",
      icon: "💪",
    },
  ];

  return (
    <SafeAreaView style={styles.page}>
      <View style={{ flex: 1 }}>
        <HeaderB />
        <View style={styles.content}>
          <Text style={styles.title}>
            What is the most important aspect of health for you?
          </Text>

          <View style={styles.optionsContainer}>
            {healthOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.optionCard,
                  selectedOption === option.id && styles.selectedCard,
                ]}
                onPress={() => setSelectedOption(option.id)}
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
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <FormButton
        title="Continue"
        onPress={() => {
          if (selectedOption) {
            (navigation as any).navigate("Create4");
          }
        }}
      />
    </SafeAreaView>
  );
};

export default Create3;

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
    marginBottom: SIZES.h1,
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
});
