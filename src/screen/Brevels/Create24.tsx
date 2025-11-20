import { COLORS, SIZES } from "@/src/constants";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create24 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
      </View>

      <View style={styles.content}>
        {/* Recovery Circle Indicator */}
        <View style={styles.recoveryContainer}>
          <View style={styles.recoveryCircle}>
            <View style={styles.recoveryProgress} />
            <View style={styles.recoveryInner}>
              <Text style={styles.recoveryIcon}>💚</Text>
            </View>
          </View>
        </View>

        {/* Title and Description */}
        <Text style={styles.title}>Recovery</Text>
        <Text style={styles.description}>
          Recovery reflects your body's readiness for physical activities. It is
          calculated once a day after waking up.
        </Text>

        {/* How to interpret Recovery Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>How to interpret Recovery</Text>

          <View style={styles.infoCard}>
            <View style={styles.infoItem}>
              <View style={styles.miniCircleHigh}>
                <View style={styles.miniProgressHigh} />
              </View>
              <Text style={styles.infoText}>
                A high Recovery means that you're ready to take on physical
                challenges.
              </Text>
            </View>

            <View style={styles.infoItem}>
              <View style={styles.miniCircleLow}>
                <View style={styles.miniProgressLow} />
              </View>
              <Text style={styles.infoText}>
                A low Recovery indicates that you should take some rest.
              </Text>
            </View>
          </View>
        </View>

        {/* How Recovery is calculated Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>How Recovery is calculated</Text>

          <View style={styles.calculationItem}>
            <Text style={styles.calculationIcon}>📈</Text>
            <View style={styles.calculationText}>
              <Text style={styles.calculationTitle}>
                Heart Rate Variability
              </Text>
              <Text style={styles.calculationDescription}>
                HRV is an indicator of your autonomic nervous system. By
                default, Bevel's Recovery score pulls HRV samples from the
                deepest stages of your sleep cycle.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            (navigation as any).goBack();
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={SIZES.h1}
            color="black"
            style={{ margin: 0 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            (navigation as any).navigate("Create25");
          }}
        >
          <Text style={styles.nextText}>Next →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Create24;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F2F1", // Light cyan/blue-green background like in image
  },
  progressContainer: {
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h2,
    marginBottom: SIZES.h3,
  },
  progressBar: {
    height: 4,
    backgroundColor: COLORS.gray2,
    borderRadius: 2,
  },
  progressFill: {
    width: "80%",
    height: "100%",
    backgroundColor: COLORS.black,
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: SIZES.width * 0.05,
  },
  recoveryContainer: {
    alignItems: "flex-end",
    marginBottom: SIZES.h2,
    paddingRight: SIZES.width * 0.05,
  },
  recoveryCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#E5E5E5",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  recoveryProgress: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 8,
    borderColor: "transparent",
    borderTopColor: "#A7F3D0",
    borderRightColor: "#A7F3D0",
    borderBottomColor: "#A7F3D0",
    borderLeftColor: "#A7F3D0",
    transform: [{ rotate: "0deg" }],
  },
  recoveryInner: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  recoveryIcon: {
    fontSize: 28,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.black,
    fontFamily: "Inter-Bold",
    marginBottom: SIZES.h4,
  },
  description: {
    fontSize: 15,
    color: COLORS.black,
    lineHeight: 22,
    marginBottom: SIZES.h2,
    fontFamily: "Inter-Regular",
  },
  sectionContainer: {
    marginBottom: SIZES.h2,
  },
  sectionTitle: {
    fontSize: 14,
    color: "#8E8E93",
    fontFamily: "Inter-Medium",
    marginBottom: SIZES.h4,
  },
  infoCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SIZES.h3,
    marginBottom: SIZES.h3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: SIZES.h4,
  },
  miniCircleHigh: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    marginRight: SIZES.h4,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  miniProgressHigh: {
    position: "absolute",
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: "#10B981",
  },
  miniCircleLow: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    marginRight: SIZES.h4,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  miniProgressLow: {
    position: "absolute",
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: "transparent",
    borderTopColor: "#F59E0B",
    transform: [{ rotate: "0deg" }],
  },
  infoText: {
    fontSize: 14,
    color: COLORS.black,
    flex: 1,
    lineHeight: 20,
    fontFamily: "Inter-Regular",
    paddingTop: 2,
  },
  calculationItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: SIZES.h3,
  },
  calculationIcon: {
    fontSize: 20,
    marginRight: SIZES.h4,
    marginTop: 2,
    color: "#8E8E93",
  },
  calculationText: {
    flex: 1,
  },
  calculationTitle: {
    fontSize: 15,
    color: COLORS.black,
    fontFamily: "Inter-SemiBold",
    marginBottom: 4,
  },
  calculationDescription: {
    fontSize: 13,
    color: "#8E8E93",
    lineHeight: 18,
    fontFamily: "Inter-Regular",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: SIZES.h2,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  backIcon: {
    fontSize: 18,
    color: COLORS.black,
  },
  nextButton: {
    backgroundColor: COLORS.black,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  nextText: {
    fontSize: 14,
    color: COLORS.white,
    fontFamily: "Inter-Medium",
  },
});
