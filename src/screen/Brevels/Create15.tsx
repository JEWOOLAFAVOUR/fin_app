import FormButton from "@/src/components/FormButton";
import HeaderB from "@/src/components/HeaderB";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create15 = () => {
  const navigation = useNavigation();
  const [selectedDay, setSelectedDay] = useState(18);
  const [selectedMonth, setSelectedMonth] = useState("Feb");
  const [selectedYear, setSelectedYear] = useState(1995);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const years = Array.from({ length: 80 }, (_, i) => 2010 - i);

  const renderPicker = (
    items: any[],
    selectedItem: any,
    onSelect: (item: any) => void,
    isYear = false
  ) => (
    <View style={styles.pickerColumn}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.pickerContent}
      >
        {items.map((item, index) => {
          const isSelected = item === selectedItem;
          const isNear = Math.abs(items.indexOf(selectedItem) - index) <= 1;

          return (
            <Text
              key={index}
              style={[
                styles.pickerItem,
                isSelected && styles.selectedPickerItem,
                !isNear && !isSelected && styles.fadedPickerItem,
              ]}
              onPress={() => onSelect(item)}
            >
              {item}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView style={styles.page}>
      <View style={{ flex: 1 }}>
        <HeaderB />
        <View style={styles.content}>
          <Text style={styles.title}>When's your birthday?</Text>

          <View style={styles.pickerContainer}>
            {renderPicker(days, selectedDay, setSelectedDay)}
            {renderPicker(months, selectedMonth, setSelectedMonth)}
            {renderPicker(years, selectedYear, setSelectedYear, true)}
          </View>
        </View>
      </View>

      <FormButton
        title="Continue"
        onPress={() => {
          console.log(
            `Selected birthday: ${selectedDay} ${selectedMonth} ${selectedYear}`
          );
          (navigation as any).navigate("Create16");
        }}
      />
    </SafeAreaView>
  );
};

export default Create15;

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
    marginBottom: SIZES.h1 * 2,
    lineHeight: SIZES.h2 * 1.4,
    fontFamily: "Inter-Bold",
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: SIZES.height * 0.4,
    marginTop: SIZES.h1,
  },
  pickerColumn: {
    flex: 1,
    height: "100%",
    marginHorizontal: SIZES.h5,
  },
  pickerContent: {
    paddingVertical: SIZES.height * 0.15,
  },
  pickerItem: {
    ...FONTS.h1,
    color: COLORS.gray,
    textAlign: "center",
    paddingVertical: SIZES.h4,
    fontFamily: "Inter-Medium",
    fontSize: SIZES.h2,
  },
  selectedPickerItem: {
    color: COLORS.black,
    fontFamily: "Inter-Bold",
    fontSize: SIZES.h1,
  },
  fadedPickerItem: {
    color: COLORS.green,
    opacity: 0.3,
  },
});
