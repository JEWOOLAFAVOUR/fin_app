import FormButton from "@/src/components/FormButton";
import HeaderB from "@/src/components/HeaderB";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create16 = () => {
  const navigation = useNavigation();
  const [selectedUnit, setSelectedUnit] = useState("Imperial");

  const unitOptions = [
    {
      id: "Imperial",
      title: "Imperial",
      description: "Miles, feet, pounds, Fahrenheit, etc.",
    },
    {
      id: "Metric",
      title: "Metric",
      description: "Kilometers, centimeters, kilograms, etc.",
    },
  ];

  return (
    <SafeAreaView style={styles.page}>
      <View style={{ flex: 1 }}>
        <HeaderB />
        <View style={styles.content}>
          <Text style={styles.title}>
            How would you like to measure your metrics?
          </Text>

          <View style={styles.optionsContainer}>
            {unitOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.optionCard,
                  selectedUnit === option.id && styles.selectedCard,
                ]}
                onPress={() => setSelectedUnit(option.id)}
              >
                <View style={styles.cardContent}>
                  <View style={styles.textContainer}>
                    <Text style={styles.optionTitle}>{option.title}</Text>
                    <Text style={styles.optionDescription}>
                      {option.description}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.radioButton,
                      selectedUnit === option.id && styles.selectedRadioButton,
                    ]}
                  >
                    {selectedUnit === option.id && (
                      <View style={styles.radioButtonInner} />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.footnote}>
            This can be readjusted later in Settings.
          </Text>
        </View>
      </View>

      <FormButton
        title="Continue"
        onPress={() => {
          console.log("Selected unit system:", selectedUnit);
          (navigation as any).navigate("Create17");
        }}
      />
    </SafeAreaView>
  );
};

export default Create16;

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
    fontFamily: "Inter-Bold",
  },
  optionsContainer: {
    marginTop: SIZES.h3,
    marginBottom: SIZES.h1,
  },
  optionCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.h2,
    padding: SIZES.h3,
    marginBottom: SIZES.h4,
    borderWidth: 2,
    borderColor: COLORS.gray2,
    elevation: 1,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  selectedCard: {
    borderColor: COLORS.black,
    // backgroundColor: COLORS.gray2 + "20",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
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
    ...FONTS.body3,
    color: COLORS.gray,
    lineHeight: SIZES.body3 * 1.4,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.h4,
  },
  selectedRadioButton: {
    borderColor: COLORS.black,
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.black,
  },
  footnote: {
    ...FONTS.body4,
    color: COLORS.gray,
    textAlign: "center",
    marginTop: SIZES.h3,
  },
});
