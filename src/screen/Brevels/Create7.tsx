import FormButton from "@/src/components/FormButton";
import HeaderB from "@/src/components/HeaderB";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create7 = () => {
  const navigation = useNavigation();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const sleepImprovements = [
    {
      id: "schedule",
      title: "Build a consistent sleep schedule",
    },
    {
      id: "quality",
      title: "Improve sleep quality",
    },
    {
      id: "fall_asleep",
      title: "Fall asleep faster",
    },
    {
      id: "all",
      title: "All the above",
    },
  ];

  const toggleOption = (optionId: string) => {
    if (optionId === "all") {
      // If "All the above" is selected, toggle all options
      if (selectedOptions.includes("all")) {
        setSelectedOptions([]);
      } else {
        setSelectedOptions(["schedule", "quality", "fall_asleep", "all"]);
      }
    } else {
      // For individual options
      if (selectedOptions.includes(optionId)) {
        // Remove the option and "all" if it was selected
        setSelectedOptions((prev) =>
          prev.filter((id) => id !== optionId && id !== "all")
        );
      } else {
        // Add the option
        const newOptions = [
          ...selectedOptions.filter((id) => id !== "all"),
          optionId,
        ];
        // If all individual options are selected, also select "all"
        if (
          newOptions.length === 3 &&
          newOptions.includes("schedule") &&
          newOptions.includes("quality") &&
          newOptions.includes("fall_asleep")
        ) {
          newOptions.push("all");
        }
        setSelectedOptions(newOptions);
      }
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
            What would you like to improve about your sleep?
          </Text>

          <View style={styles.optionsContainer}>
            {sleepImprovements.map((improvement) => (
              <TouchableOpacity
                key={improvement.id}
                style={[
                  styles.optionCard,
                  isSelected(improvement.id) && styles.selectedCard,
                ]}
                onPress={() => toggleOption(improvement.id)}
              >
                <Text style={styles.optionTitle}>{improvement.title}</Text>
                <View
                  style={[
                    styles.checkbox,
                    isSelected(improvement.id) && styles.checkedBox,
                  ]}
                >
                  {isSelected(improvement.id) && (
                    <AntDesign name="check" size={16} color={COLORS.white} />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <FormButton
        title="Continue"
        onPress={() => {
          if (selectedOptions.length > 0) {
            (navigation as any).navigate("Create8");
          }
        }}
      />
    </SafeAreaView>
  );
};

export default Create7;

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
    borderRadius: SIZES.h2,
    padding: SIZES.h3,
    marginBottom: SIZES.h4,
    borderWidth: 2,
    borderColor: COLORS.gray2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectedCard: {
    borderColor: COLORS.black,
    backgroundColor: COLORS.gray2 + "30",
  },
  optionTitle: {
    ...FONTS.h4,
    color: COLORS.black,
    fontFamily: "Inter-Medium",
    flex: 1,
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
  },
  checkedBox: {
    backgroundColor: COLORS.black,
    borderColor: COLORS.black,
  },
});
