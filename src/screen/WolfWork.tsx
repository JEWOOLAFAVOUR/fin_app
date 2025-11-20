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

// Wolf Olins work data based on the website
const wolfWorkData = [
  {
    id: 1,
    title: "Lloyds",
    subtitle: "A next step forward",
    category: "Financial Services",
    services: ["Brand Strategy", "Visual Identity", "Brand Architecture"],
    image:
      "https://www.wolffolins.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4rnblstkg79m%2F18EG6DImEQoL7MiuPoPPLm%2Fcec721ff4fe2283746e5e8ea12022d1a%2F00_Lloyds_Website_Carousel.jpg&w=1920&q=75",
  },
  {
    id: 2,
    title: "Sandals & Beaches Resorts",
    subtitle: "Rooted In Caribbean Soul",
    category: "Travel and hospitality",
    services: ["Physical Environments", "Visual Identity", "Verbal Identity"],
    image:
      "https://www.wolffolins.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4rnblstkg79m%2F7MYBRoZ89bFeVGDNwKFS3W%2Fd45499012c7f4df4b3bf0b10283fa3a4%2F01.jpg&w=640&q=75",
  },
  {
    id: 3,
    title: "Decathlon",
    subtitle: "Rewriting sport's playbook for billions of athletes",
    category: "Sports",
    services: ["Brand Strategy", "Brand Architecture", "Visual Identity"],
    image:
      "https://www.wolffolins.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4rnblstkg79m%2F4ARGuHAIAJRjYLew6rUVx5%2F5f180f50ea8ad1e7f1b8ab98307ea82b%2FDKT_CS_00_Thumbnail_Jersey_KV_3000x2000.jpg&w=640&q=75",
  },
  {
    id: 4,
    title: "Benefit",
    subtitle: "Blazing new trails in beauty",
    category: "Consumer goods",
    services: ["Visual Identity", "Verbal Identity", "Brand Strategy"],
    image:
      "https://www.wolffolins.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4rnblstkg79m%2F2G87UBpgT40OdCutvhbFzX%2F749541ab3af5a29ac69b4dfefe9da5ad%2FCarousel.png&w=640&q=75",
  },
  {
    id: 5,
    title: "New York Botanical Garden",
    subtitle: "Renewing a New York institution",
    category: "Culture and education",
    services: ["Visual Identity", "Verbal Identity", "Brand Strategy"],
    image:
      "https://www.wolffolins.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4rnblstkg79m%2F7H8NjuQLLtrRpuuD49YvAU%2Fdcb4be71979280d8fd9a5eb169c5c2fb%2FNYBG_CaseStudy_11.jpg&w=640&q=75",
  },
  {
    id: 6,
    title: "The Economist",
    subtitle: "A new era of growth",
    category: "Media and entertainment",
    services: [
      "Media and engagement",
      "Brand Strategy",
      "Brand Architecture",
      "Visual Identity",
    ],
    image:
      "https://www.wolffolins.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4rnblstkg79m%2F4UAz6V5fFciSwMrKGrGZwK%2Fb2ddabf917ba8a48fde9a4e016a23179%2FFrame_359.png&w=640&q=75",
  },
  {
    id: 7,
    title: "LG Electronics",
    subtitle: "Bringing a smile back to tech",
    category: "Tech",
    services: ["Brand Strategy", "Visual Identity", "Verbal Identity"],
    image:
      "https://www.wolffolins.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4rnblstkg79m%2F6AaQs5gyLjzI9rXcUn50c5%2F9519295df98fa8b7e3a6efa0494d0d2c%2FLG_Collector_Hero_Image.jpg&w=640&q=75",
  },
  {
    id: 8,
    title: "Instacart",
    subtitle: "From grocery app to delivery leader",
    category: "Retail",
    services: ["Brand Strategy", "Visual Identity", "Verbal Identity"],
    image:
      "https://www.wolffolins.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4rnblstkg79m%2FQNAtD94DOWfArpnA5Bgzs%2Fdaa82716fd55b946c4203c52100ab2e0%2F11_Instacart_Bag.jpg&w=640&q=75",
  },
];

type RootStackParamList = {
  WolfWork: undefined;
  WolfAbout: undefined;
  WolfNews: undefined;
  WolfContact: undefined;
  Wolffins: undefined;
};

const WolfWork = () => {
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
            style={[styles.menuItem, { backgroundColor: COLORS.gray2 }]}
          >
            <Text style={[styles.menuText, { fontFamily: "Inter-Bold" }]}>
              Work
            </Text>
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

        <Text style={styles.headerTitle}>Work</Text>

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
          <Text style={styles.heroSubtext}>
            From global icons to trailblazing start-ups, we partner with
            ambitious leaders at pivotal inflection points.
          </Text>
        </View>

        {/* Work Grid */}
        <View style={styles.workGrid}>
          {wolfWorkData.map((item) => (
            <View key={item.id} style={styles.workCard}>
              <Image source={{ uri: item.image }} style={styles.workImage} />

              <View style={styles.workContent}>
                <View style={styles.categoryContainer}>
                  <Text style={styles.categoryText}>{item.category}</Text>
                </View>

                <Text style={styles.workTitle}>{item.title}</Text>
                <Text style={styles.workSubtitle}>{item.subtitle}</Text>

                <View style={styles.servicesContainer}>
                  {item.services.map((service, index) => (
                    <View key={index} style={styles.serviceTag}>
                      <Text style={styles.serviceText}>{service}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Archive Section */}
        <View style={styles.archiveSection}>
          <Text style={styles.archiveTitle}>Archive</Text>
          <Text style={styles.archiveDescription}>
            There's a lot more where that came from. Take a tour through our
            more than 60 years of transforming brands from cultural institutions
            to consumer goods, pharma to farming, startups to stalwarts.
            Whatever the challenge, we stay fueled by our curiosity about the
            world and our knack for bringing change wherever we go.
          </Text>

          <View style={styles.archiveGrid}>
            {[
              "Lafayette",
              "Bacardi",
              "Cancer research",
              "Ethiad",
              "Honda",
              "New Day",
              "Tata",
              "Tesco",
              "The Economist",
              "Uber",
              "Unilever",
              "V&A",
              "Warner Media",
              "XPENG",
            ].map((brand, index) => (
              <TouchableOpacity key={index} style={styles.archiveItem}>
                <Text style={styles.archiveItemText}>{brand}</Text>
              </TouchableOpacity>
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
  heroSubtext: {
    ...FONTS.body1,
    color: COLORS.black,
    fontFamily: "Inter-Medium",
    lineHeight: 26,
    textAlign: "center",
  },
  workGrid: {
    paddingHorizontal: SIZES.width * 0.05,
  },
  workCard: {
    marginBottom: SIZES.h1,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.h4,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  workImage: {
    width: "100%",
    height: SIZES.height * 0.25,
    borderTopLeftRadius: SIZES.h4,
    borderTopRightRadius: SIZES.h4,
  },
  workContent: {
    padding: SIZES.h3,
  },
  categoryContainer: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.black,
    paddingHorizontal: SIZES.h4,
    paddingVertical: SIZES.h5,
    borderRadius: SIZES.h5,
    marginBottom: SIZES.h4,
  },
  categoryText: {
    ...FONTS.body5,
    color: COLORS.white,
    fontFamily: "Inter-Medium",
    textTransform: "uppercase",
  },
  workTitle: {
    ...FONTS.h3,
    color: COLORS.black,
    fontFamily: "Inter-Bold",
    marginBottom: SIZES.h5,
  },
  workSubtitle: {
    ...FONTS.body2,
    color: COLORS.gray,
    fontFamily: "Inter-Medium",
    marginBottom: SIZES.h3,
    lineHeight: 22,
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SIZES.h5,
  },
  serviceTag: {
    backgroundColor: COLORS.gray2,
    paddingHorizontal: SIZES.h4,
    paddingVertical: SIZES.h5,
    borderRadius: SIZES.h5,
  },
  serviceText: {
    ...FONTS.body4,
    color: COLORS.black,
    fontFamily: "Inter-Medium",
  },
  archiveSection: {
    paddingHorizontal: SIZES.width * 0.05,
    paddingVertical: SIZES.h1,
    marginTop: SIZES.h1,
  },
  archiveTitle: {
    ...FONTS.h2,
    color: COLORS.black,
    fontFamily: "Inter-Bold",
    marginBottom: SIZES.h3,
  },
  archiveDescription: {
    ...FONTS.body2,
    color: COLORS.gray,
    fontFamily: "Inter-Regular",
    lineHeight: 24,
    marginBottom: SIZES.h1,
  },
  archiveGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SIZES.h4,
  },
  archiveItem: {
    paddingHorizontal: SIZES.h3,
    paddingVertical: SIZES.h4,
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.h5,
  },
  archiveItemText: {
    ...FONTS.body4,
    color: COLORS.black,
    fontFamily: "Inter-Medium",
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

export default WolfWork;
