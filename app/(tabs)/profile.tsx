import HeaderA from "@/src/components/HeaderA";
import { COLORS, FONTS, SIZES } from "@/src/constants";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
  const contactInfo = [
    {
      id: 1,
      icon: "phone",
      label: "Phone Number",
      value: "+234 803 456 7890",
      iconBg: "#E3F2FD",
      iconColor: "#2196F3",
    },
    {
      id: 2,
      icon: "mail",
      label: "Email Address",
      value: "chinedu.okafor@email.com",
      iconBg: "#E8F5E8",
      iconColor: "#4CAF50",
    },
    {
      id: 3,
      icon: "map-pin",
      label: "Address",
      value: "Lagos, Nigeria",
      iconBg: "#F3E5F5",
      iconColor: "#9C27B0",
    },
    {
      id: 4,
      icon: "credit-card",
      label: "Bank Account",
      value: "1234567890 - Access Bank",
      iconBg: "#FFF3E0",
      iconColor: "#FF9800",
    },
  ];

  const menuItems = [
    {
      id: 1,
      icon: "user",
      title: "Personal Information",
      hasArrow: true,
    },
    {
      id: 2,
      icon: "credit-card",
      title: "Bank Details",
      hasArrow: true,
    },
    {
      id: 3,
      icon: "shield",
      title: "Security Settings",
      hasArrow: true,
    },
    {
      id: 4,
      icon: "settings",
      title: "App Settings",
      hasArrow: true,
    },
    {
      id: 5,
      icon: "help-circle",
      title: "Help & Support",
      hasArrow: true,
    },
  ];

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={"light-content"} />
      <HeaderA />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* User Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Feather name="user" size={32} color={COLORS.white} />
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Chinedu Okafor</Text>
              <Text style={styles.userEmail}>chinedu.okafor@email.com</Text>
            </View>
          </View>
        </View>

        {/* Contact Information */}
        <View style={styles.contactSection}>
          {contactInfo.map((item) => (
            <View key={item.id} style={styles.contactItem}>
              <View
                style={[
                  styles.contactIconContainer,
                  { backgroundColor: item.iconBg },
                ]}
              >
                <Feather
                  name={item.icon as any}
                  size={16}
                  color={item.iconColor}
                />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>{item.label}</Text>
                <Text style={styles.contactValue}>{item.value}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              activeOpacity={0.6}
            >
              <View style={styles.menuLeft}>
                <View style={styles.menuIconContainer}>
                  <Feather
                    name={item.icon as any}
                    size={18}
                    color={COLORS.gray7}
                  />
                </View>
                <Text style={styles.menuTitle}>{item.title}</Text>
              </View>
              {item.hasArrow && (
                <Feather name="chevron-right" size={18} color={COLORS.gray7} />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.6}>
          <MaterialIcons name="logout" size={20} color="#F44336" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h4,
  },
  profileCard: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.base * 1.5,
    paddingVertical: SIZES.h3,
    paddingHorizontal: SIZES.width * 0.05,
    marginBottom: SIZES.h3,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: SIZES.base * 1.5,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    ...FONTS.body3a,
    color: COLORS.white,
    marginBottom: 4,
  },
  userEmail: {
    ...FONTS.body5,
    color: "rgba(255, 255, 255, 0.8)",
  },
  contactSection: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.base,
    paddingVertical: SIZES.base,
    marginBottom: SIZES.h3,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.width * 0.04,
    paddingVertical: SIZES.base * 1.2,
  },
  contactIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SIZES.base * 1.2,
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    ...FONTS.body5,
    color: COLORS.gray7,
    marginBottom: 2,
  },
  contactValue: {
    ...FONTS.body4,
    color: COLORS.black,
  },
  menuSection: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.base,
    paddingVertical: SIZES.base / 2,
    marginBottom: SIZES.h3,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.width * 0.04,
    paddingVertical: SIZES.base * 1.5,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.chocolateBackground,
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  menuIconContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: SIZES.base * 1.2,
  },
  menuTitle: {
    ...FONTS.body4,
    color: COLORS.black,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.base,
    paddingVertical: SIZES.base * 1.5,
    marginBottom: SIZES.h3,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  logoutText: {
    ...FONTS.body4b,
    color: "#F44336",
    marginLeft: SIZES.base,
  },
});
