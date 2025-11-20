import AntDesign from "@expo/vector-icons/AntDesign";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import {
  Image,
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

// Sample team data based on the website
const teamData = [
  {
    name: "Sairah Ashman",
    role: "CEO",
    image:
      "https://images.ctfassets.net/4rnblstkg79m/64ZbQEnzXnF5MJsQuLMCob/c384d9e1c4faa7af09fd2e52d8cee2db/WolffOlins-team-18.jpg",
  },
  {
    name: "Emma Barratt",
    role: "Global Executive Creative Director",
    image:
      "https://images.ctfassets.net/4rnblstkg79m/4JkGsgHxHw51b4YudHdyA6/f13c01978e07a065cbd55a512663a5bd/WolffOlins-team-10.jpg",
  },
  {
    name: "Jane Boynton",
    role: "Senior Creative Director",
    image:
      "https://images.ctfassets.net/4rnblstkg79m/3jkB83pT8h1WPG4AnXbEMD/49ff2974e2ef896bfecb8b27b4f415a9/WolffOlins-team-13.jpg",
  },
  {
    name: "Charlie Stott",
    role: "Global Principal",
    image:
      "https://images.ctfassets.net/4rnblstkg79m/7gep9JNAqwNFQEnD4cfeCm/d12b28fd2d73d5e426153c95020d29b5/WolffOlins-team-12.jpg",
  },
  {
    name: "George Lavender",
    role: "Creative Director",
    image:
      "https://images.ctfassets.net/4rnblstkg79m/9eTETJjOjJxjLeD0fxljl/29f476528b41b61e5cf438ddfbc583ea/WolffOlins-team-11.jpg",
  },
  {
    name: "Matthew Haysom",
    role: "Creative Director",
    image:
      "https://images.ctfassets.net/4rnblstkg79m/4vGUOyxX8SngK89rqi5Vus/255def83a223488b5d465ff9433c7d8f/WolffOlins-team-14.jpg",
  },
  {
    name: "Scott Townsin",
    role: "Associate Creative Director",
    image:
      "https://images.ctfassets.net/4rnblstkg79m/3ODmURZt15vMq41NdMi5eD/33cdbbdeaa1861a13b1ab8f3aae95a2c/WolffOlins-team-16.jpg",
  },
  {
    name: "Astrid D'Hondt",
    role: "Creative Director",
    image:
      "https://images.ctfassets.net/4rnblstkg79m/3bFde9pyeENk7wDrqZtBls/c8801c7f4ea2bad5108367e313aaf84d/WolffOlins-team-17.jpg",
  },
];

const WolfAbout = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const bottomSheetRef = useRef<any>(null);

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
            style={[styles.menuItem, { backgroundColor: COLORS.gray2 }]}
          >
            <Text style={[styles.menuText, { fontFamily: "Inter-Bold" }]}>
              About
            </Text>
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
            style={styles.menuItem}
            onPress={() => {
              bottomSheetRef.current?.close();
              navigation.navigate("WolfContact");
            }}
          >
            <Text style={styles.menuText}>Contact</Text>
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

        <Text style={styles.headerTitle}>About</Text>

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
          <Text style={styles.heroTitle}>
            Wolff Olins is a global brand consultancy that's ambitious for the
            work and optimistic for the world.
          </Text>
          <Text style={styles.heroSubtitle}>
            We're here to help our clients defy convention, redefine
            expectations and ignite positive change.
          </Text>
        </View>

        {/* Our Approach Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Approach</Text>
          <Text style={styles.sectionDescription}>
            We unite brand, culture and experience to drive impact inside and
            outside an organisation.
          </Text>
        </View>

        {/* Brand Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Brand</Text>
          <Text style={styles.sectionDescription}>
            In a world that demands new and better, no one can afford to stand
            still. Your brand can be a catalyst for change, helping you
            supercharge your transformation efforts and drive business
            performance. Wolff Olins fuses maths and magic to turn your vision
            for tomorrow into something people can feel today.
          </Text>

          <View style={styles.servicesList}>
            {[
              {
                title: "Insights and measurement",
                desc: "Identify your unique equities and opportunities using qual and quant research designed to give you clarity on what's important and where to go next.",
              },
              {
                title: "Purpose and brand strategy",
                desc: "Define your aspirational north star including why you exist, what makes you special, and how your brand comes to life in a compelling and actionable way.",
              },
              {
                title: "Brand architecture and portfolio strategy",
                desc: "Organise your brands and products for the future and design systems to help people understand and navigate your offer.",
              },
              {
                title: "Verbal identity",
                desc: "Use the power of language to distinguish your brand with the right name, tone of voice, and messaging for your audiences.",
              },
              {
                title: "Visual identity",
                desc: "Create a cut-through expression of your strategy across logo, colour palette, bespoke typography, imagery, motion, sound, haptics, and more.",
              },
              {
                title: "Activation and governance",
                desc: "Plan and design your launch/rollout to build momentum internally and externally and help you manage your brand into the future.",
              },
            ].map((service, index) => (
              <View key={index} style={styles.serviceItem}>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceDescription}>{service.desc}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Culture Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Culture</Text>
          <Text style={styles.sectionDescription}>
            When it comes to realising your business and brand ambition, a
            'good' organisational culture is not good enough. You need the right
            culture for the journey ahead. We use creativity and inspiration to
            help you shape your internal culture, energise your employees, and
            retain top talent.
          </Text>
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <Text style={styles.sectionDescription}>
            Brand Experience has become bland experience, fixated on the
            functional. Optimisation won't ensure success as people's
            expectations soar and their attention depletes. Your brand must
            realise its unique power to unlock new value for people and your
            business. We design transformative brand experiences that move
            people and organisations where they need to go.
          </Text>
        </View>

        {/* Team Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Team</Text>
          <Text style={styles.sectionDescription}>
            We're a bunch of sharp thinkers and creative makers on a mission to
            do the best work of our lives—and always enjoy the ride.
          </Text>

          <View style={styles.teamGrid}>
            {teamData.map((member, index) => (
              <View key={index} style={styles.teamMember}>
                <Image
                  source={{ uri: member.image }}
                  style={styles.teamImage}
                />
                <Text style={styles.teamName}>{member.name}</Text>
                <Text style={styles.teamRole}>{member.role}</Text>
              </View>
            ))}
          </View>
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
  heroTitle: {
    ...FONTS.h2,
    color: COLORS.black,
    fontFamily: "Inter-Bold",
    lineHeight: 32,
    marginBottom: SIZES.h3,
  },
  heroSubtitle: {
    ...FONTS.body1,
    color: COLORS.gray,
    fontFamily: "Inter-Medium",
    lineHeight: 26,
  },
  section: {
    paddingHorizontal: SIZES.width * 0.05,
    paddingVertical: SIZES.h2,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray2,
  },
  sectionTitle: {
    ...FONTS.h2,
    color: COLORS.black,
    fontFamily: "Inter-Bold",
    marginBottom: SIZES.h3,
  },
  sectionDescription: {
    ...FONTS.body2,
    color: COLORS.gray,
    fontFamily: "Inter-Regular",
    lineHeight: 24,
  },
  servicesList: {
    marginTop: SIZES.h2,
  },
  serviceItem: {
    marginBottom: SIZES.h2,
  },
  serviceTitle: {
    ...FONTS.h4,
    color: COLORS.black,
    fontFamily: "Inter-Bold",
    marginBottom: SIZES.h5,
  },
  serviceDescription: {
    ...FONTS.body3,
    color: COLORS.gray,
    fontFamily: "Inter-Regular",
    lineHeight: 22,
  },
  teamGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: SIZES.h2,
  },
  teamMember: {
    width: "48%",
    marginBottom: SIZES.h2,
  },
  teamImage: {
    width: "100%",
    height: SIZES.height * 0.2,
    borderRadius: SIZES.h4,
    marginBottom: SIZES.h5,
  },
  teamName: {
    ...FONTS.body3,
    color: COLORS.black,
    fontFamily: "Inter-Bold",
    marginBottom: SIZES.h5 / 2,
  },
  teamRole: {
    ...FONTS.body4,
    color: COLORS.gray,
    fontFamily: "Inter-Regular",
  },
  footer: {
    marginTop: SIZES.h1 * 2,
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

export default WolfAbout;
