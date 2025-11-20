import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES } from "../constants";

const ShapeBookCall = () => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef<any>(null);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const services = [
    "Education",
    "Digital Marketing",
    "Business Skilling",
    "Marketplace",
    "All",
  ];

  const budgets = ["Under $20K", "$20K-$50K", "$50K-$100K", "$100K+"];

  const menuItems = [
    {
      title: "Home",
      onPress: () => navigation.navigate("ShapeScape" as never),
    },
    {
      title: "About",
      onPress: () => navigation.navigate("ShapeAbout" as never),
    },
    {
      title: "Case Studies",
      onPress: () => navigation.navigate("ShapeCaseStudies" as never),
    },
    {
      title: "Marketplace",
      onPress: () => navigation.navigate("ShapeMarketplace" as never),
    },
    { title: "Blog", onPress: () => navigation.navigate("ShapeBlog" as never) },
    {
      title: "Contact",
      onPress: () => {},
    },
  ];

  const handleOpenMenu = () => {
    bottomSheetRef.current?.open();
  };

  const handleCloseMenu = () => {
    bottomSheetRef.current?.close();
  };

  const toggleService = (service: string) => {
    if (service === "All") {
      setSelectedServices(selectedServices.includes("All") ? [] : ["All"]);
    } else {
      const updatedServices = selectedServices.includes(service)
        ? selectedServices.filter((s) => s !== service && s !== "All")
        : [...selectedServices.filter((s) => s !== "All"), service];
      setSelectedServices(updatedServices);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", {
      ...formData,
      services: selectedServices,
      budget: selectedBudget,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.page}>
        <StatusBar
          backgroundColor={COLORS.primary_1}
          barStyle={"light-content"}
        />

        {/* Header */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="white" />
          </TouchableOpacity>
          <Image
            source={{
              uri: "https://framerusercontent.com/images/3mHzuMg2QsYio7RkLzfPkhwMQdQ.png?scale-down-to=512&width=1200&height=1200",
            }}
            style={{ height: SIZES.h1, width: SIZES.h1, marginLeft: SIZES.h4 }}
          />
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
              flex: 1,
              marginLeft: SIZES.h3,
            }}
          >
            ShapeScape
          </Text>
          <TouchableOpacity onPress={handleOpenMenu}>
            <AntDesign name="menu-fold" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Page Title */}
        <View style={{ marginTop: SIZES.h1, alignItems: "center" }}>
          <Text style={{ ...FONTS.largeTitleBold, color: COLORS.white }}>
            Book a call
          </Text>
        </View>

        {/* Subtitle */}
        <View style={{ marginTop: SIZES.h2, alignItems: "center" }}>
          <Text style={{ ...FONTS.h2, color: COLORS.white }}>
            Let's get started
          </Text>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.white,
              textAlign: "center",
              marginTop: SIZES.h4,
            }}
          >
            Whether you're a teacher, a partner, or just curious about our work,
            our team is here to help. Reach out and let's start the
            conversation.
          </Text>
        </View>

        {/* Support Notice */}
        <View style={styles.supportNotice}>
          <Text style={styles.supportTitle}>
            Need support on a Marketplace World or Add-On?
          </Text>
          <TouchableOpacity style={styles.discordButton}>
            <Text style={styles.discordButtonText}>
              Join our Discord server and open a ticket.
            </Text>
          </TouchableOpacity>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          {/* Personal Info */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Name *</Text>
            <TextInput
              style={styles.textInput}
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
              placeholder="Enter your name"
              placeholderTextColor={COLORS.gray}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email *</Text>
            <TextInput
              style={styles.textInput}
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              placeholder="Enter your email"
              placeholderTextColor={COLORS.gray}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Company</Text>
            <TextInput
              style={styles.textInput}
              value={formData.company}
              onChangeText={(text) =>
                setFormData({ ...formData, company: text })
              }
              placeholder="Enter your company"
              placeholderTextColor={COLORS.gray}
            />
          </View>

          {/* Services */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>
              What services are you interested in?
            </Text>
            <View style={styles.optionsContainer}>
              {services.map((service, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    selectedServices.includes(service) && styles.selectedOption,
                  ]}
                  onPress={() => toggleService(service)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedServices.includes(service) &&
                        styles.selectedOptionText,
                    ]}
                  >
                    {service}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Budget */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Expected project budget?</Text>
            <View style={styles.optionsContainer}>
              {budgets.map((budget, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    selectedBudget === budget && styles.selectedOption,
                  ]}
                  onPress={() => setSelectedBudget(budget)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedBudget === budget && styles.selectedOptionText,
                    ]}
                  >
                    {budget}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Message */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Tell us about your project</Text>
            <TextInput
              style={[styles.textInput, styles.textArea]}
              value={formData.message}
              onChangeText={(text) =>
                setFormData({ ...formData, message: text })
              }
              placeholder="Describe your project, goals, and timeline..."
              placeholderTextColor={COLORS.gray}
              multiline
              numberOfLines={4}
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Book a call</Text>
            <AntDesign name="right" size={16} color={COLORS.primary_1} />
          </TouchableOpacity>

          {/* Terms */}
          <Text style={styles.termsText}>
            By submitting, you agree to our{" "}
            <Text style={styles.termsLink}>terms & conditions.</Text>
          </Text>
        </View>

        {/* Footer */}
        <View style={{ marginBottom: SIZES.h2 * 2, marginTop: SIZES.h1 }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: SIZES.h2,
              }}
            >
              <Image
                source={{
                  uri: "https://framerusercontent.com/images/3mHzuMg2QsYio7RkLzfPkhwMQdQ.png?scale-down-to=512&width=1200&height=1200",
                }}
                style={{ height: SIZES.h2, width: SIZES.h2 }}
              />
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.white,
                  marginLeft: SIZES.h4,
                }}
              >
                ShapeScape
              </Text>
            </View>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.gray,
                marginBottom: SIZES.h3,
              }}
            >
              Digital worlds that make learning engaging & exciting
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: SIZES.h2,
            }}
          >
            <View style={{ width: "48%" }}>
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.white,
                  fontFamily: "Inter-Medium",
                  marginBottom: SIZES.h4,
                }}
              >
                Navigate
              </Text>
              {["Home", "About", "Case Studies", "Marketplace", "Blog"].map(
                (link, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{ marginBottom: SIZES.h5 }}
                  >
                    <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
                      {link}
                    </Text>
                  </TouchableOpacity>
                )
              )}
            </View>
            <View style={{ width: "48%" }}>
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.white,
                  fontFamily: "Inter-Medium",
                  marginBottom: SIZES.h4,
                }}
              >
                Connect
              </Text>
              {[
                "Book a call",
                "Instagram",
                "LinkedIn",
                "Twitter",
                "Discord",
              ].map((link, index) => (
                <TouchableOpacity
                  key={index}
                  style={{ marginBottom: SIZES.h5 }}
                >
                  <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
                    {link}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Hamburger Menu Bottom Sheet */}
      <RBSheet
        ref={bottomSheetRef}
        height={SIZES.height * 0.7}
        openDuration={250}
        closeDuration={250}
        customStyles={{
          container: styles.bottomSheetContainer,
          wrapper: styles.bottomSheetWrapper,
          draggableIcon: styles.bottomSheetDraggableIcon,
        }}
      >
        <View style={styles.bottomSheetContent}>
          {/* Menu Header */}
          <View style={styles.menuHeader}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{
                  uri: "https://framerusercontent.com/images/3mHzuMg2QsYio7RkLzfPkhwMQdQ.png?scale-down-to=512&width=1200&height=1200",
                }}
                style={{ height: SIZES.h1, width: SIZES.h1 }}
              />
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.white,
                  marginLeft: SIZES.h3,
                }}
              >
                ShapeScape
              </Text>
            </View>
            <TouchableOpacity onPress={handleCloseMenu}>
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Menu Items */}
          <View style={styles.menuItems}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => {
                  handleCloseMenu();
                  item.onPress();
                }}
              >
                <Text style={styles.menuItemText}>{item.title}</Text>
                <AntDesign name="right" size={16} color={COLORS.gray} />
              </TouchableOpacity>
            ))}
          </View>

          {/* Menu Footer */}
          <View style={styles.menuFooter}>
            <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
              Digital worlds that make learning engaging & exciting
            </Text>
          </View>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

export default ShapeBookCall;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.primary_1,
    paddingTop: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.05,
  },
  supportNotice: {
    backgroundColor: COLORS.gray6,
    padding: SIZES.h3,
    borderRadius: SIZES.h4,
    marginTop: SIZES.h2,
  },
  supportTitle: {
    ...FONTS.body3,
    color: COLORS.white,
    fontFamily: "Inter-Medium",
    marginBottom: SIZES.h3,
  },
  discordButton: {
    borderWidth: 1,
    borderColor: COLORS.secondary_1,
    paddingVertical: SIZES.h4,
    paddingHorizontal: SIZES.h3,
    borderRadius: SIZES.h4,
  },
  discordButtonText: {
    ...FONTS.body4,
    color: COLORS.secondary_1,
    textAlign: "center",
    fontFamily: "Inter-Medium",
  },
  formContainer: {
    marginTop: SIZES.h2,
  },
  inputGroup: {
    marginBottom: SIZES.h2,
  },
  inputLabel: {
    ...FONTS.body3,
    color: COLORS.white,
    fontFamily: "Inter-Medium",
    marginBottom: SIZES.h4,
  },
  textInput: {
    backgroundColor: COLORS.gray6,
    borderRadius: SIZES.h4,
    paddingVertical: SIZES.h3,
    paddingHorizontal: SIZES.h3,
    ...FONTS.body4,
    color: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.gray6,
  },
  textArea: {
    height: SIZES.height * 0.15,
    textAlignVertical: "top",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SIZES.h4,
  },
  optionButton: {
    paddingVertical: SIZES.h4,
    paddingHorizontal: SIZES.h3,
    borderRadius: SIZES.h4,
    borderWidth: 1,
    borderColor: COLORS.gray6,
    backgroundColor: COLORS.gray6,
  },
  selectedOption: {
    backgroundColor: COLORS.secondary_1,
    borderColor: COLORS.secondary_1,
  },
  optionText: {
    ...FONTS.body4,
    color: COLORS.white,
  },
  selectedOptionText: {
    color: COLORS.primary_1,
    fontFamily: "Inter-Medium",
  },
  submitButton: {
    backgroundColor: COLORS.secondary_1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.h3,
    borderRadius: SIZES.h1,
    marginTop: SIZES.h2,
    gap: SIZES.h4,
  },
  submitButtonText: {
    ...FONTS.body2,
    color: COLORS.primary_1,
    fontFamily: "Inter-Bold",
  },
  termsText: {
    ...FONTS.body5,
    color: COLORS.gray,
    textAlign: "center",
    marginTop: SIZES.h3,
  },
  termsLink: {
    color: COLORS.secondary_1,
  },
  bottomSheetContainer: {
    backgroundColor: COLORS.primary_1,
    borderTopLeftRadius: SIZES.h3,
    borderTopRightRadius: SIZES.h3,
    elevation: 1000,
    zIndex: 1000,
  },
  bottomSheetWrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    elevation: 999,
    zIndex: 999,
  },
  bottomSheetDraggableIcon: {
    backgroundColor: COLORS.gray,
    width: SIZES.width * 0.15,
  },
  bottomSheetContent: {
    flex: 1,
    paddingHorizontal: SIZES.width * 0.05,
    paddingVertical: SIZES.h2,
  },
  menuHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: SIZES.h2,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray6,
  },
  menuItems: {
    flex: 1,
    paddingVertical: SIZES.h2,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: SIZES.h3,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray6,
  },
  menuItemText: {
    ...FONTS.body2,
    color: COLORS.white,
    fontFamily: "Inter-Medium",
  },
  menuFooter: {
    paddingTop: SIZES.h2,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray6,
  },
  socialButton: {
    backgroundColor: COLORS.gray6,
    paddingHorizontal: SIZES.h3,
    paddingVertical: SIZES.h4,
    borderRadius: SIZES.h4,
  },
});
