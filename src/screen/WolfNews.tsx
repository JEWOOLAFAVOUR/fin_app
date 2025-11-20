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

// Sample news data based on the website
const newsData = [
  {
    id: 1,
    category: "Inside",
    title: "Unafraid to flip the script",
    description:
      "Born in the Sixties – a decade that questioned everything – we've always thrived on challenge and change.",
    image:
      "https://images.ctfassets.net/4rnblstkg79m/64ZbQEnzXnF5MJsQuLMCob/c384d9e1c4faa7af09fd2e52d8cee2db/WolffOlins-team-18.jpg",
  },
  {
    id: 2,
    category: "Thinking",
    title: "Why brands are re-embracing the power of the tagline",
    description:
      "Verbal Director William Rauscher explains in Design Week why the tagline resurgence isn't just nostalgia. In an age of complexity, taglines offer clarity.",
    image:
      "https://images.ctfassets.net/4rnblstkg79m/4JkGsgHxHw51b4YudHdyA6/f13c01978e07a065cbd55a512663a5bd/WolffOlins-team-10.jpg",
  },
  {
    id: 3,
    category: "Inside",
    title: "Optimistic for the world",
    description:
      "For 60 years, our optimism has been driven by one belief: there's always a better way forward. We don't just ride out change, we lean into it – helping brands turn business shifts, crises and disruption into something stronger than what came before.",
    image:
      "https://images.ctfassets.net/4rnblstkg79m/3jkB83pT8h1WPG4AnXbEMD/49ff2974e2ef896bfecb8b27b4f415a9/WolffOlins-team-13.jpg",
  },
  {
    id: 4,
    category: "Events",
    title: "Design – The Architecture of Great Experience",
    description:
      "Creative Director Matthew Haysom and Global Executive Creative Director Emma Barratt joined Hyundai Card DaVinci MOTEL – a three-day cultural festival in Seoul.",
    image:
      "https://images.ctfassets.net/4rnblstkg79m/7gep9JNAqwNFQEnD4cfeCm/d12b28fd2d73d5e426153c95020d29b5/WolffOlins-team-12.jpg",
  },
  {
    id: 5,
    category: "Thinking",
    title: "Think different, or sink together",
    description:
      "Senior Strategist Milan Kendall Shah challenges the copycat playbook, and shares how to build a brand people actually notice.",
    image:
      "https://images.ctfassets.net/4rnblstkg79m/9eTETJjOjJxjLeD0fxljl/29f476528b41b61e5cf438ddfbc583ea/WolffOlins-team-11.jpg",
  },
  {
    id: 6,
    category: "Events",
    title: "Inside Fast Company Innovation Festival 2025",
    description:
      "Executive Strategy Director Brian Meyers shares his key takeaways from Fast Company Innovation Festival 2025.",
    image:
      "https://images.ctfassets.net/4rnblstkg79m/4vGUOyxX8SngK89rqi5Vus/255def83a223488b5d465ff9433c7d8f/WolffOlins-team-14.jpg",
  },
  {
    id: 7,
    category: "Clients",
    title:
      "New York Botanical Garden hires Wolff Olins for major brand refresh",
    description:
      "We're thrilled to announce that we are partnering with New York Botanical Garden to overhaul their brand identity ahead of a new era for the institution.",
    image:
      "https://images.ctfassets.net/4rnblstkg79m/3ODmURZt15vMq41NdMi5eD/33cdbbdeaa1861a13b1ab8f3aae95a2c/WolffOlins-team-16.jpg",
  },
];

const WolfNews = () => {
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
            style={styles.menuItem}
            onPress={() => {
              bottomSheetRef.current?.close();
              navigation.navigate("WolfAbout");
            }}
          >
            <Text style={styles.menuText}>About</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuItem, { backgroundColor: COLORS.gray2 }]}
          >
            <Text style={[styles.menuText, { fontFamily: "Inter-Bold" }]}>
              News
            </Text>
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

        <Text style={styles.headerTitle}>News</Text>

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
            The latest from our world and beyond.
          </Text>
          <Text style={styles.heroSubtitle}>
            Read, watch and go deeper on what's happening with us and our work.
          </Text>
        </View>

        {/* Filter Section */}
        <View style={styles.filterSection}>
          <Text style={styles.filterCount}>106 Results</Text>
          <View style={styles.filterTags}>
            <TouchableOpacity style={[styles.filterTag, styles.activeFilter]}>
              <Text style={[styles.filterText, styles.activeFilterText]}>
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterTag}>
              <Text style={styles.filterText}>Clients</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterTag}>
              <Text style={styles.filterText}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterTag}>
              <Text style={styles.filterText}>Inside</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterTag}>
              <Text style={styles.filterText}>Thinking</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* News Grid */}
        <View style={styles.newsGrid}>
          {newsData.map((article) => (
            <View key={article.id} style={styles.newsCard}>
              <Image source={{ uri: article.image }} style={styles.newsImage} />

              <View style={styles.newsContent}>
                <View style={styles.categoryContainer}>
                  <Text style={styles.categoryText}>{article.category}</Text>
                </View>

                <Text style={styles.newsTitle}>{article.title}</Text>
                <Text style={styles.newsDescription}>
                  {article.description}
                </Text>

                <TouchableOpacity style={styles.readMoreButton}>
                  <Text style={styles.readMoreText}>Full Story</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Load More Button */}
        <View style={styles.loadMoreSection}>
          <TouchableOpacity style={styles.loadMoreButton}>
            <Text style={styles.loadMoreText}>Load More Articles</Text>
          </TouchableOpacity>
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
    marginBottom: SIZES.h3,
  },
  heroSubtitle: {
    ...FONTS.body1,
    color: COLORS.gray,
    fontFamily: "Inter-Medium",
    lineHeight: 24,
  },
  filterSection: {
    paddingHorizontal: SIZES.width * 0.05,
    paddingVertical: SIZES.h3,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.gray2,
  },
  filterCount: {
    ...FONTS.body3,
    color: COLORS.black,
    fontFamily: "Inter-Medium",
    marginBottom: SIZES.h3,
  },
  filterTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: SIZES.h4,
  },
  filterTag: {
    paddingHorizontal: SIZES.h3,
    paddingVertical: SIZES.h5,
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.h5,
  },
  activeFilter: {
    backgroundColor: COLORS.black,
  },
  filterText: {
    ...FONTS.body4,
    color: COLORS.black,
    fontFamily: "Inter-Medium",
  },
  activeFilterText: {
    color: COLORS.white,
  },
  newsGrid: {
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h2,
  },
  newsCard: {
    marginBottom: SIZES.h1,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.h4,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  newsImage: {
    width: "100%",
    height: SIZES.height * 0.25,
    borderTopLeftRadius: SIZES.h4,
    borderTopRightRadius: SIZES.h4,
  },
  newsContent: {
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
  newsTitle: {
    ...FONTS.h4,
    color: COLORS.black,
    fontFamily: "Inter-Bold",
    marginBottom: SIZES.h4,
    lineHeight: 26,
  },
  newsDescription: {
    ...FONTS.body3,
    color: COLORS.gray,
    fontFamily: "Inter-Regular",
    lineHeight: 22,
    marginBottom: SIZES.h3,
  },
  readMoreButton: {
    alignSelf: "flex-start",
  },
  readMoreText: {
    ...FONTS.body3,
    color: COLORS.black,
    fontFamily: "Inter-Medium",
    textDecorationLine: "underline",
  },
  loadMoreSection: {
    paddingHorizontal: SIZES.width * 0.05,
    paddingVertical: SIZES.h1,
    alignItems: "center",
  },
  loadMoreButton: {
    borderWidth: 2,
    borderColor: COLORS.black,
    paddingHorizontal: SIZES.h1,
    paddingVertical: SIZES.h3,
    borderRadius: SIZES.h2,
  },
  loadMoreText: {
    ...FONTS.body3,
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

export default WolfNews;
