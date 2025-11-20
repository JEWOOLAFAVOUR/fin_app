import AntDesign from "@expo/vector-icons/AntDesign";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import {
  Image,
  Linking,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES } from "../constants";

type RootStackParamList = {
  WolfWork: undefined;
  WolfAbout: undefined;
  WolfNews: undefined;
  WolfContact: undefined;
  Wolffins: undefined;
};

const officeData = [
  {
    id: 1,
    city: "London",
    address: "Bankside 390-100 Southwark Street\nLondon, SE1 0SW, UK",
    time: "16:47 locally, Active",
    phone: "+44 20 3655 9850",
    coords: "51.5055° N, 0.0985° W",
    recruitment: "talent@wolffolins.com",
    media: "marketing@wolffolins.com",
    business: {
      name: "Bianca Bensemann",
      phone: "+44 77 1369 8012",
      email: "clientslondon@wolffolins.com",
    },
    image:
      "https://images.ctfassets.net/4rnblstkg79m/64ZbQEnzXnF5MJsQuLMCob/c384d9e1c4faa7af09fd2e52d8cee2db/WolffOlins-team-18.jpg",
  },
  {
    id: 2,
    city: "New York",
    address: "195 Broadway, Fl. 7\nNew York, NY 10007, USA",
    time: "11:47 locally, Active",
    phone: "+1 212-505-7337",
    coords: "40.7108° N, 74.0095° W",
    recruitment: "talent@wolffolins.com",
    media: "marketing@wolffolins.com",
    business: {
      name: "Rachel Lancaster",
      phone: "+1 212-505-7337",
      email: "clientsnewyork@wolffolins.com",
    },
    image:
      "https://images.ctfassets.net/4rnblstkg79m/4JkGsgHxHw51b4YudHdyA6/f13c01978e07a065cbd55a512663a5bd/WolffOlins-team-10.jpg",
  },
  {
    id: 3,
    city: "San Francisco",
    address: "1050 Battery Street, Fl. 2\nSan Francisco, CA 94111, USA",
    time: "8:47 locally, Away",
    phone: "+1 212-505-7337",
    coords: "37.8013° N, 122.4015° W",
    recruitment: "talent@wolffolins.com",
    media: "marketing@wolffolins.com",
    business: {
      name: "Rachel Lancaster",
      phone: "+1 212-505-7337",
      email: "clientssanfrancisco@wolffolins.com",
    },
    image:
      "https://images.ctfassets.net/4rnblstkg79m/3jkB83pT8h1WPG4AnXbEMD/49ff2974e2ef896bfecb8b27b4f415a9/WolffOlins-team-13.jpg",
  },
  {
    id: 4,
    city: "Los Angeles",
    address: "5353 Grosvenor Blvd\nLos Angeles\nCA 90066",
    time: "8:47 locally, Away",
    phone: "+1 212-505-7337",
    coords: "33.9829° N, 118.4150° W",
    recruitment: "talent@wolffolins.com",
    media: "marketing@wolffolins.com",
    business: {
      name: "Rachel Lancaster",
      phone: "+1 212-505-7337",
      email: "clientslosangeles@wolffolins.com",
    },
    image:
      "https://images.ctfassets.net/4rnblstkg79m/7gep9JNAqwNFQEnD4cfeCm/d12b28fd2d73d5e426153c95020d29b5/WolffOlins-team-12.jpg",
  },
];

const WolfContact = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const bottomSheetRef = useRef<any>(null);

  const handleEmailPress = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  const handlePhonePress = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const renderBottomSheet = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          paddingHorizontal: SIZES.width * 0.05,
          paddingTop: SIZES.h2,
          paddingBottom: SIZES.h1,
          height: SIZES.height * 0.7,
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: SIZES.h2,
          }}
        >
          <Text style={{ ...FONTS.h3, color: COLORS.black }}>Menu</Text>
          <TouchableOpacity onPress={() => bottomSheetRef.current?.close()}>
            <AntDesign name="close" size={20} color={COLORS.black} />
          </TouchableOpacity>
        </View>

        {/* Navigation Items */}
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              bottomSheetRef.current?.close();
              navigation.navigate("Wolffins");
            }}
          >
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              bottomSheetRef.current?.close();
              navigation.navigate("WolfWork");
            }}
          >
            <Text style={styles.menuText}>Work</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              bottomSheetRef.current?.close();
              navigation.navigate("WolfAbout");
            }}
          >
            <Text style={styles.menuText}>About</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              bottomSheetRef.current?.close();
              navigation.navigate("WolfNews");
            }}
          >
            <Text style={styles.menuText}>News</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuItem, { backgroundColor: COLORS.gray2 }]}
          >
            <Text style={[styles.menuText, { fontFamily: "Inter-Bold" }]}>
              Contact
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="left"
            size={20}
            color={COLORS.black}
            style={{ marginLeft: SIZES.h4 }}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Contact</Text>

        <TouchableOpacity onPress={() => bottomSheetRef.current?.open()}>
          <AntDesign
            name="menu"
            size={17}
            color="black"
            style={{ marginRight: SIZES.h4 }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroSubtitle}>
            We're from all over, but there are a few great places we call home.
            Come say hi.
          </Text>
        </View>

        {/* Team Images Grid */}
        <View style={styles.teamImagesSection}>
          <View style={styles.teamGrid}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
              <View key={index} style={styles.teamImageContainer}>
                <Image
                  source={{
                    uri:
                      officeData[index % officeData.length]?.image ||
                      "https://images.ctfassets.net/4rnblstkg79m/64ZbQEnzXnF5MJsQuLMCob/c384d9e1c4faa7af09fd2e52d8cee2db/WolffOlins-team-18.jpg",
                  }}
                  style={styles.teamImage}
                />
              </View>
            ))}
          </View>
        </View>

        {/* Offices Section */}
        <View style={styles.officesSection}>
          {officeData.map((office) => (
            <View key={office.id} style={styles.officeCard}>
              <Text style={styles.cityTitle}>{office.city}</Text>

              <View style={styles.officeInfo}>
                <View style={styles.infoSection}>
                  <Text style={styles.infoLabel}>Find us</Text>
                  <Text style={styles.infoText}>{office.address}</Text>
                </View>

                <View style={styles.infoSection}>
                  <Text style={styles.infoLabel}>Recruitment</Text>
                  <TouchableOpacity
                    onPress={() => handleEmailPress(office.recruitment)}
                  >
                    <Text style={styles.linkText}>{office.recruitment}</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.infoSection}>
                  <Text style={styles.infoLabel}>Media & PR</Text>
                  <TouchableOpacity
                    onPress={() => handleEmailPress(office.media)}
                  >
                    <Text style={styles.linkText}>{office.media}</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.infoSection}>
                  <Text style={styles.infoLabel}>New Business</Text>
                  <Text style={styles.infoText}>{office.business.name}</Text>
                  <TouchableOpacity
                    onPress={() => handlePhonePress(office.business.phone)}
                  >
                    <Text style={styles.linkText}>{office.business.phone}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleEmailPress(office.business.email)}
                  >
                    <Text style={styles.linkText}>{office.business.email}</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.officeFooter}>
                <Text style={styles.timeText}>{office.time}</Text>
                <View style={styles.contactButtons}>
                  <TouchableOpacity
                    onPress={() => handlePhonePress(office.phone)}
                  >
                    <Text style={styles.phoneButton}>{office.phone}</Text>
                  </TouchableOpacity>
                  <Text style={styles.coordsText}>{office.coords}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaText}>
            We're always looking for ambitious, curious, creative minds to join
            our team
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerYear}>2025</Text>
          <Text style={styles.footerBrand}>Wolff Olins</Text>
          <Text style={styles.footerText}>Talk to us or ask us anything.</Text>
        </View>
      </ScrollView>

      {/* Bottom Sheet */}
      <RBSheet
        ref={bottomSheetRef}
        height={SIZES.height * 0.7}
        openDuration={300}
        closeDuration={200}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          container: {
            backgroundColor: COLORS.white,
            borderTopLeftRadius: SIZES.h3,
            borderTopRightRadius: SIZES.h3,
            elevation: 1000,
          },
          draggableIcon: {
            backgroundColor: COLORS.gray,
            width: SIZES.width * 0.15,
            height: SIZES.h5,
          },
        }}
      >
        {renderBottomSheet()}
      </RBSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: SIZES.h4,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray2,
  },
  headerTitle: {
    ...FONTS.h2,
    color: COLORS.black,
    fontFamily: "Inter-Bold",
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    paddingHorizontal: SIZES.width * 0.05,
    paddingVertical: SIZES.h1,
  },
  heroSubtitle: {
    ...FONTS.body1,
    color: COLORS.black,
    fontFamily: "Inter-Medium",
    lineHeight: 26,
    textAlign: "center",
  },
  teamImagesSection: {
    paddingHorizontal: SIZES.width * 0.05,
    paddingVertical: SIZES.h2,
  },
  teamGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  teamImageContainer: {
    width: "30%",
    marginBottom: SIZES.h4,
  },
  teamImage: {
    width: "100%",
    height: SIZES.height * 0.12,
    borderRadius: SIZES.h4,
  },
  officesSection: {
    paddingHorizontal: SIZES.width * 0.05,
  },
  officeCard: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.h4,
    padding: SIZES.h3,
    marginBottom: SIZES.h2,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.gray2,
  },
  cityTitle: {
    ...FONTS.h2,
    color: COLORS.black,
    fontFamily: "Inter-Bold",
    marginBottom: SIZES.h3,
  },
  officeInfo: {
    marginBottom: SIZES.h3,
  },
  infoSection: {
    marginBottom: SIZES.h3,
  },
  infoLabel: {
    ...FONTS.h4,
    color: COLORS.black,
    fontFamily: "Inter-Bold",
    marginBottom: SIZES.h5,
  },
  infoText: {
    ...FONTS.body3,
    color: COLORS.gray,
    fontFamily: "Inter-Regular",
    lineHeight: 20,
  },
  linkText: {
    ...FONTS.body3,
    color: COLORS.black,
    fontFamily: "Inter-Regular",
    textDecorationLine: "underline",
  },
  officeFooter: {
    borderTopWidth: 1,
    borderTopColor: COLORS.gray2,
    paddingTop: SIZES.h3,
  },
  timeText: {
    ...FONTS.body4,
    color: COLORS.gray,
    fontFamily: "Inter-Regular",
    marginBottom: SIZES.h4,
  },
  contactButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  phoneButton: {
    ...FONTS.body3,
    color: COLORS.black,
    fontFamily: "Inter-Medium",
    textDecorationLine: "underline",
  },
  coordsText: {
    ...FONTS.body4,
    color: COLORS.gray,
    fontFamily: "Inter-Regular",
  },
  ctaSection: {
    paddingHorizontal: SIZES.width * 0.05,
    paddingVertical: SIZES.h1 * 2,
    alignItems: "center",
  },
  ctaText: {
    ...FONTS.body1,
    color: COLORS.black,
    fontFamily: "Inter-Medium",
    textAlign: "center",
    lineHeight: 26,
  },
  footer: {
    marginTop: SIZES.h1,
    paddingTop: SIZES.h1,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray2,
    backgroundColor: COLORS.yellow_1,
    paddingHorizontal: SIZES.width * 0.05,
    paddingBottom: SIZES.h1 * 2,
  },
  footerYear: {
    ...FONTS.h1,
    color: COLORS.black,
    textAlign: "center",
    marginBottom: SIZES.h2,
  },
  footerBrand: {
    ...FONTS.h2,
    color: COLORS.black,
    textAlign: "center",
    marginBottom: SIZES.h1,
  },
  footerText: {
    ...FONTS.body3,
    color: COLORS.black,
    textAlign: "center",
    marginBottom: SIZES.h1,
  },
  menuItem: {
    paddingVertical: SIZES.h3,
    paddingHorizontal: SIZES.h4,
    borderRadius: SIZES.h5,
    marginBottom: SIZES.h4,
  },
  menuText: {
    ...FONTS.body2,
    color: COLORS.black,
    fontFamily: "Inter-Medium",
  },
});

export default WolfContact;
