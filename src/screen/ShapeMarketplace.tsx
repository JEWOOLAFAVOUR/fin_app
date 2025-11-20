import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
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
import { COLORS, FONTS, images, SIZES } from "../constants";

const ShapeMarketplace = () => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef<any>(null);

  const marketplaceItems = [
    {
      title: "Bosses Add-On",
      image:
        "https://framerusercontent.com/images/4gVQgMduWWhsREaaP7ZR6gVTqBQ.png?width=800&height=450",
      category: "Adventure",
      description:
        "Epic boss battles and challenging encounters for Minecraft Education",
    },
    {
      title: "The Extinct - DINOSAURS Add-On",
      image:
        "https://framerusercontent.com/images/J58AVEIufyb36SzwjGC0Og6Q6yg.png?scale-down-to=512&width=1000&height=1000",
      category: "Education",
      description:
        "Explore prehistoric worlds and learn about dinosaurs in an immersive experience",
    },
    {
      title: "Smurfs DLC",
      image:
        "https://framerusercontent.com/images/skqVZH5btzgQopDGEFjkeVmI1co.png?scale-down-to=512&width=1000&height=1000",
      category: "Family",
      description:
        "Join the beloved Smurfs characters in their magical village adventures",
    },
    {
      title: "Dragons Add-On",
      image:
        "https://framerusercontent.com/images/KuRhSfCb6pVKfz9UhMhKIQl5GhE.png?scale-down-to=512&width=1000&height=1000",
      category: "Fantasy",
      description:
        "Tame and ride dragons in epic fantasy adventures through mystical realms",
    },
  ];

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
    { title: "Marketplace", onPress: () => {} },
    { title: "Blog", onPress: () => navigation.navigate("ShapeBlog" as never) },
    {
      title: "Contact",
      onPress: () => navigation.navigate("ShapeBookCall" as never),
    },
  ];

  const handleOpenMenu = () => {
    bottomSheetRef.current?.open();
  };

  const handleCloseMenu = () => {
    bottomSheetRef.current?.close();
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
            Marketplace
          </Text>
        </View>

        {/* Subtitle */}
        <View style={{ marginTop: SIZES.h2, alignItems: "center" }}>
          <Text style={{ ...FONTS.h2, color: COLORS.white }}>
            Our Marketplace Experiences
          </Text>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.white,
              textAlign: "center",
              marginTop: SIZES.h4,
            }}
          >
            Discover our work for the Minecraft Marketplace
          </Text>
        </View>

        {/* Marketplace Items Grid */}
        <View style={{ marginTop: SIZES.h1 }}>
          {marketplaceItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.marketplaceCard}>
              <Image
                source={{ uri: item.image }}
                style={styles.marketplaceImage}
              />
              <View style={styles.marketplaceContent}>
                <View
                  style={[
                    styles.categoryTag,
                    {
                      backgroundColor:
                        item.category === "Adventure"
                          ? COLORS.secondary_1
                          : item.category === "Education"
                          ? COLORS.cyan
                          : item.category === "Family"
                          ? COLORS.yellow_1
                          : COLORS.green,
                    },
                  ]}
                >
                  <Text style={styles.categoryText}>{item.category}</Text>
                </View>
                <Text style={styles.marketplaceTitle}>{item.title}</Text>
                <Text style={styles.marketplaceDescription}>
                  {item.description}
                </Text>
                <View style={styles.exploreContainer}>
                  <Text style={styles.exploreText}>Explore</Text>
                  <AntDesign name="right" size={16} color={COLORS.white} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Ready to create section */}
        <View style={{ marginTop: SIZES.h1 * 2, marginBottom: SIZES.h2 }}>
          <View
            style={{
              backgroundColor: COLORS.gray6,
              marginHorizontal: SIZES.width * 0.005,
              paddingVertical: SIZES.h1,
              paddingHorizontal: SIZES.h1,
              borderRadius: SIZES.h4,
            }}
          >
            <Text
              style={{
                ...FONTS.h1,
                color: COLORS.white,
                textAlign: "center",
              }}
            >
              Ready to create your own?
            </Text>
            <Text
              style={{
                ...FONTS.body3a,
                color: COLORS.chocolateBackground,
                textAlign: "center",
                marginTop: SIZES.h2,
              }}
            >
              Partner with us to bring your educational content to millions of
              players worldwide through the Minecraft Marketplace.
            </Text>
            <TouchableOpacity
              style={{
                height: SIZES.h1 * 1.5,
                width: SIZES.width * 0.6,
                justifyContent: "space-evenly",
                alignItems: "center",
                backgroundColor: COLORS.secondary_1,
                alignSelf: "center",
                borderRadius: SIZES.h1,
                marginTop: SIZES.h1,
                flexDirection: "row",
                paddingHorizontal: SIZES.width * 0.05,
                marginBottom: SIZES.h3,
              }}
            >
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.primary_1,
                  fontFamily: "Inter-Medium",
                }}
              >
                Start your project
              </Text>
              <AntDesign name="right" size={16} color="black" />
            </TouchableOpacity>
            <Image
              source={images.booking_img}
              style={{
                height: SIZES.height * 0.4,
                width: SIZES.width * 0.8,
                borderRadius: SIZES.h4,
              }}
            />
          </View>
        </View>

        {/* Footer */}
        <View style={{ marginBottom: SIZES.h2 * 2 }}>
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

          <View>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.gray,
                marginTop: SIZES.h2,
              }}
            >
              Subscribe to our newsletter
            </Text>
            <Text
              style={{
                ...FONTS.body5,
                color: COLORS.gray2,
                marginTop: SIZES.h5,
              }}
            >
              We can't promise a new email every week, but can promise we won't
              spam you until we have a great announcement to share
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: SIZES.h4,
                borderWidth: 1,
                borderColor: COLORS.gray6,
                borderRadius: SIZES.h4,
                paddingHorizontal: SIZES.h4,
                paddingVertical: SIZES.h5,
              }}
            >
              <Text style={{ ...FONTS.body4, color: COLORS.gray, flex: 1 }}>
                Enter your email
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.secondary_1,
                  paddingHorizontal: SIZES.h4,
                  paddingVertical: SIZES.h5,
                  borderRadius: SIZES.h5,
                }}
              >
                <Text
                  style={{
                    ...FONTS.body5,
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

export default ShapeMarketplace;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.primary_1,
    paddingTop: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.05,
  },
  marketplaceCard: {
    backgroundColor: COLORS.gray6,
    borderRadius: SIZES.h4,
    marginBottom: SIZES.h2,
    overflow: "hidden",
  },
  marketplaceImage: {
    width: "100%",
    height: SIZES.height * 0.25,
    resizeMode: "cover",
  },
  marketplaceContent: {
    padding: SIZES.h3,
  },
  categoryTag: {
    alignSelf: "flex-start",
    paddingHorizontal: SIZES.h4,
    paddingVertical: SIZES.h5,
    borderRadius: SIZES.h4,
    marginBottom: SIZES.h3,
  },
  categoryText: {
    ...FONTS.body5,
    color: COLORS.primary_1,
    fontFamily: "Inter-Medium",
  },
  marketplaceTitle: {
    ...FONTS.h3,
    color: COLORS.white,
    marginBottom: SIZES.h3,
    fontFamily: "Inter-Bold",
  },
  marketplaceDescription: {
    ...FONTS.body4,
    color: COLORS.gray,
    marginBottom: SIZES.h3,
    lineHeight: SIZES.h4 * 1.4,
  },
  exploreContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.h4,
  },
  exploreText: {
    ...FONTS.body4,
    color: COLORS.white,
    marginRight: SIZES.h5,
    fontFamily: "Inter-Medium",
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
