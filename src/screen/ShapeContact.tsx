import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
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
import { SafeAreaView } from "react-native-safe-area-context";
import { shapescapeFooterData } from "../components/data";
import { COLORS, FONTS, SIZES } from "../constants";

const ShapeContact = () => {
  const navigation = useNavigation();
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
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

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.page}>
        <StatusBar
          backgroundColor={COLORS.primary_1}
          barStyle={"light-content"}
        />

        {/* Header */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginRight: SIZES.h4 }}
          >
            <AntDesign name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
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
              flex: 1,
              marginLeft: SIZES.h3,
            }}
          >
            ShapeScape
          </Text>
          {/* <TouchableOpacity>
          <AntDesign name="menu" size={24} color="white" />
        </TouchableOpacity> */}
        </View>

        {/* Hero Section */}
        <View style={{ marginTop: SIZES.h1 * 2 }}>
          <Text style={{ ...FONTS.largeTitleBold, color: COLORS.white }}>
            Book a call
          </Text>

          <View style={{ marginTop: SIZES.h1 }}>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              Let's get started
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.chocolateBackground,
                marginTop: SIZES.h4,
                lineHeight: 22,
              }}
            >
              Whether you're a teacher, a partner, or just curious about our
              work, our team is here to help. Reach out and let's start the
              conversation.
            </Text>
          </View>

          {/* Discord Support */}
          <View
            style={{
              backgroundColor: COLORS.gray6,
              padding: SIZES.h3,
              borderRadius: SIZES.h4,
              marginTop: SIZES.h1,
            }}
          >
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>
              Need support on a Marketplace World or Add-On?
            </Text>
            <TouchableOpacity style={{ marginTop: SIZES.h5 }}>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.secondary_1,
                  textDecorationLine: "underline",
                }}
              >
                Join our Discord server and open a ticket.
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Form Section */}
        <View style={{ marginTop: SIZES.h1 * 1.5 }}>
          {/* Name Input */}
          <View style={{ marginBottom: SIZES.h2 }}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.white,
                marginBottom: SIZES.h4,
              }}
            >
              Full Name *
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                value={formData.name}
                onChangeText={(text) => handleInputChange("name", text)}
                placeholder="Enter your full name"
                style={styles.textInput}
                placeholderTextColor={COLORS.gray}
              />
            </View>
          </View>

          {/* Email Input */}
          <View style={{ marginBottom: SIZES.h2 }}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.white,
                marginBottom: SIZES.h4,
              }}
            >
              Email *
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                value={formData.email}
                onChangeText={(text) => handleInputChange("email", text)}
                placeholder="name@email.com"
                style={styles.textInput}
                placeholderTextColor={COLORS.gray}
                keyboardType="email-address"
              />
            </View>
          </View>

          {/* Company Input */}
          <View style={{ marginBottom: SIZES.h2 }}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.white,
                marginBottom: SIZES.h4,
              }}
            >
              Company/Organization
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                value={formData.company}
                onChangeText={(text) => handleInputChange("company", text)}
                placeholder="Your company or organization"
                style={styles.textInput}
                placeholderTextColor={COLORS.gray}
              />
            </View>
          </View>

          {/* Services Selection */}
          <View style={{ marginBottom: SIZES.h2 }}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.white,
                marginBottom: SIZES.h4,
              }}
            >
              What services are you interested in? *
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {services.map((service, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedService(service)}
                  style={[
                    styles.selectionButton,
                    selectedService === service && styles.selectedButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.selectionText,
                      selectedService === service && styles.selectedText,
                    ]}
                  >
                    {service}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Budget Selection */}
          <View style={{ marginBottom: SIZES.h2 }}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.white,
                marginBottom: SIZES.h4,
              }}
            >
              Expected project budget? *
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {budgets.map((budget, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedBudget(budget)}
                  style={[
                    styles.selectionButton,
                    selectedBudget === budget && styles.selectedButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.selectionText,
                      selectedBudget === budget && styles.selectedText,
                    ]}
                  >
                    {budget}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Message Input */}
          <View style={{ marginBottom: SIZES.h2 }}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.white,
                marginBottom: SIZES.h4,
              }}
            >
              Tell us about your project
            </Text>
            <View style={[styles.inputContainer, { height: SIZES.h1 * 4 }]}>
              <TextInput
                value={formData.message}
                onChangeText={(text) => handleInputChange("message", text)}
                placeholder="Describe your project goals and requirements..."
                style={[
                  styles.textInput,
                  { height: "100%", textAlignVertical: "top" },
                ]}
                placeholderTextColor={COLORS.gray}
                multiline
                numberOfLines={5}
              />
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Book a call</Text>
            <AntDesign name="arrow-right" size={16} color={COLORS.primary_1} />
          </TouchableOpacity>

          {/* Terms */}
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.gray,
              textAlign: "center",
              marginTop: SIZES.h3,
            }}
          >
            By submitting, you agree to our{" "}
            <Text
              style={{
                textDecorationLine: "underline",
                color: COLORS.secondary_1,
              }}
            >
              terms & conditions.
            </Text>
          </Text>
        </View>

        {/* Footer */}
        <View style={{ marginTop: SIZES.h1 * 2, marginBottom: SIZES.h2 }}>
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
              style={{ height: SIZES.h1, width: SIZES.h1 }}
            />
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.white,
                flex: 1,
                marginLeft: SIZES.h3,
              }}
            >
              Shapescape
            </Text>
          </View>

          <Text style={{ ...FONTS.h1, color: COLORS.white }}>
            Digital worlds that make learning engaging & exciting
          </Text>
          <Text
            style={{
              ...FONTS.body3a,
              color: COLORS.chocolateBackground,
              marginTop: SIZES.h2,
            }}
          >
            Building for players & brands worldwide
          </Text>

          {/* Footer Links */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: SIZES.h2,
            }}
          >
            {shapescapeFooterData.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key={index}
                  style={{ width: "48%", marginBottom: SIZES.h3 }}
                >
                  <Text style={{ ...FONTS.body3, color: COLORS.white }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Newsletter Section */}
          <View style={{ marginTop: SIZES.h1 }}>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              Subscribe to our newsletter
            </Text>
            <Text
              style={{ ...FONTS.body3c, color: COLORS.chocolateBackground }}
            >
              We can't promise a new email every week, but can promise we won't
              spam you until we have a great announcement to share
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: SIZES.h4,
              }}
            >
              <View
                style={{
                  height: SIZES.h1 * 2,
                  width: SIZES.width * 0.55,
                  backgroundColor: COLORS.white,
                  borderRadius: SIZES.h5,
                  justifyContent: "center",
                  paddingHorizontal: SIZES.h4,
                }}
              >
                <TextInput
                  placeholder="name@email.com"
                  style={{ ...FONTS.body4 }}
                />
              </View>
              <TouchableOpacity
                style={{
                  height: SIZES.h1 * 2,
                  width: SIZES.width * 0.3,
                  backgroundColor: COLORS.secondary_1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: SIZES.h5,
                }}
              >
                <Text
                  style={{
                    ...FONTS.body3a,
                    color: COLORS.primary_1,
                    fontFamily: "Inter-Medium",
                  }}
                >
                  Subscribe
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShapeContact;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.primary_1,
    paddingTop: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.05,
  },
  inputContainer: {
    height: SIZES.h1 * 2,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.h5,
    justifyContent: "center",
    paddingHorizontal: SIZES.h4,
  },
  textInput: {
    ...FONTS.body4,
    color: COLORS.black,
    flex: 1,
  },
  selectionButton: {
    paddingHorizontal: SIZES.h3,
    paddingVertical: SIZES.h4,
    backgroundColor: COLORS.gray6,
    borderRadius: SIZES.h4,
    marginRight: SIZES.h4,
    marginBottom: SIZES.h4,
    borderWidth: 1,
    borderColor: COLORS.gray6,
  },
  selectedButton: {
    backgroundColor: COLORS.secondary_1,
    borderColor: COLORS.secondary_1,
  },
  selectionText: {
    ...FONTS.body4,
    color: COLORS.white,
  },
  selectedText: {
    color: COLORS.primary_1,
  },
  submitButton: {
    height: SIZES.h1 * 1.5,
    backgroundColor: COLORS.secondary_1,
    borderRadius: SIZES.h1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.h1,
  },
  submitText: {
    ...FONTS.body3,
    color: COLORS.primary_1,
    fontFamily: "Inter-Medium",
    marginRight: SIZES.h4,
  },
});
