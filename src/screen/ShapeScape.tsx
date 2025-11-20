import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
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
import { shapescapeData, shapescapeFooterData } from "../components/data";
import { COLORS, FONTS, images, SIZES } from "../constants";

const ShapeScape = () => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef<any>(null);

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
              flex: 1,
              marginLeft: SIZES.h3,
            }}
          >
            ShapeScape
          </Text>
          <TouchableOpacity onPress={handleOpenMenu}>
            <AntDesign name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* hero  */}
        <View style={{ marginTop: SIZES.h1, alignItems: "center" }}>
          <Text style={{ ...FONTS.largeTitleBold, color: COLORS.white }}>
            Serious topics
          </Text>
          <Text
            style={{ ...FONTS.h2, color: COLORS.white, marginTop: SIZES.h5 }}
          >
            Played by millions
          </Text>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.white,
              textAlign: "center",
              marginTop: SIZES.h4,
            }}
          >
            We help organizations turn their educational mission into powerful,
            playable experiences, reaching kids around the world through the
            games they already love.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ShapeContact" as never)}
            style={{
              height: SIZES.h1 * 1.5,
              width: SIZES.width * 0.4,
              backgroundColor: COLORS.secondary_1,
              borderRadius: SIZES.h1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: SIZES.h1,
            }}
          >
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.primary_1,
                fontFamily: "Inter-Medium",
              }}
            >
              Get in touch
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ShapeContact" as never)}
          >
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.white,
                marginTop: SIZES.h4,
                fontFamily: "Inter-Medium",
              }}
            >
              Or book a call
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: SIZES.h2 }}>
          {shapescapeData.map((data, index) => {
            return (
              <View key={index} style={{ marginBottom: SIZES.h1 * 1.5 }}>
                <Image
                  source={{ uri: data.img }}
                  style={{
                    width: SIZES.width * 0.9,
                    height: SIZES.height * 0.35,
                    borderRadius: SIZES.h4,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.h2,
                    color: COLORS.white,
                    marginTop: SIZES.base,
                  }}
                >
                  {data.title}
                </Text>
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.chocolateBackground,
                    marginTop: SIZES.base,
                  }}
                >
                  {data.desc}
                </Text>
              </View>
            );
          })}
        </View>

        {/* blog section */}
        <View style={{ marginBottom: SIZES.h2 }}>
          <View
            style={{
              height: SIZES.h1 * 1.8,
              width: SIZES.width * 0.5,
              backgroundColor: COLORS.gray6,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: SIZES.h4,
              alignSelf: "center",
              marginBottom: SIZES.h1,
            }}
          >
            <Text style={{ ...FONTS.body3, color: COLORS.gray2 }}>
              Resources & Insights
            </Text>
          </View>
          <Text style={{ ...FONTS.h2, color: COLORS.white }}>
            Our latest blog articles
          </Text>
          <Image
            source={{
              uri: "https://framerusercontent.com/images/4gVQgMduWWhsREaaP7ZR6gVTqBQ.png?width=800&height=450",
            }}
            style={{
              height: SIZES.height * 0.3,
              width: SIZES.width * 0.9,
              borderRadius: SIZES.h4,
              marginTop: SIZES.h4,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: SIZES.h3,
            }}
          >
            <View
              style={{
                height: SIZES.h1 * 1.25,
                width: SIZES.width * 0.3,
                backgroundColor: COLORS.cyan,
                borderRadius: SIZES.h4,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ ...FONTS.body3, color: COLORS.primary_1 }}>
                Education
              </Text>
            </View>
            <Text style={{ ...FONTS.body3, color: COLORS.cyan }}>
              July 25, 2024
            </Text>
          </View>
          {/* details */}
          <View style={{ marginTop: SIZES.h2 }}>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              Minecraft Education: Transforming How Kids Learn Through Play
            </Text>
            <Text
              style={{
                ...FONTS.body3c,
                color: COLORS.white,
                marginTop: SIZES.h4,
              }}
            >
              Minecraft Education is a version of Minecraft created to help
              students learn by doing. It's used in schools all over the world,
              turning lessons in science, math, all history into meaningful
              adventures.
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: SIZES.h1 * 1.4,
              width: SIZES.width * 0.35,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.cyan,
              alignSelf: "center",
              borderRadius: SIZES.h1,
              marginTop: SIZES.h2,
            }}
          >
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.primary_1,
                fontFamily: "Inter-Bold",
              }}
            >
              Show more
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: SIZES.h2 * 2 }}>
          {/* ready to take action */}
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
              Ready to take action?
            </Text>
            <Text
              style={{
                ...FONTS.body3a,
                color: COLORS.chocolateBackground,
                textAlign: "center",
                marginTop: SIZES.h2,
              }}
            >
              Book a free consultation to speak with our team and discuss your
              goals. Let's bring your ideas and goals to life.
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("ShapeBookCall" as never)}
              style={{
                height: SIZES.h1 * 1.5,
                width: SIZES.width * 0.5,
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
              <Text style={{ ...FONTS.body3, color: COLORS.primary_1 }}>
                Book a meeting
              </Text>
              <AntDesign name="arrow-right" size={16} color="black" />
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
          {/* footer */}
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: SIZES.h2,
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
          </View>
          {/* footer links */}
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
          {/* subscribe section  */}
          <View>
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              Subscribe to our newsletter
            </Text>
            <Text
              style={{ ...FONTS.body3c, color: COLORS.chocolateBackground }}
            >
              We can't promise a new email every week, but can promise we won't
              spam you until we have a great announcement to share
            </Text>
            {/* input section */}
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

export default ShapeScape;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.primary_1,
    paddingTop: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.05,
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
