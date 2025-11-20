import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
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
import { featuredNewsData } from "../components/data";
import { COLORS, FONTS, SIZES, images } from "../constants";

type RootStackParamList = {
  WolfWork: undefined;
  WolfAbout: undefined;
  WolfNews: undefined;
  WolfContact: undefined;
  Wolffins: undefined;
};

const Wolffins = () => {
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
            style={[
              {
                paddingVertical: SIZES.h3,
                paddingHorizontal: SIZES.h4,
                borderRadius: SIZES.h5,
                marginBottom: SIZES.h4,
                backgroundColor: COLORS.gray2,
              },
            ]}
          >
            <Text
              style={{
                ...FONTS.body2,
                color: COLORS.black,
                fontFamily: "Inter-Bold",
              }}
            >
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              paddingVertical: SIZES.h3,
              paddingHorizontal: SIZES.h4,
              borderRadius: SIZES.h5,
              marginBottom: SIZES.h4,
            }}
            onPress={() => {
              bottomSheetRef.current?.close();
              navigation.navigate("WolfWork");
            }}
          >
            <Text
              style={{
                ...FONTS.body2,
                color: COLORS.black,
                fontFamily: "Inter-Medium",
              }}
            >
              Work
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              paddingVertical: SIZES.h3,
              paddingHorizontal: SIZES.h4,
              borderRadius: SIZES.h5,
              marginBottom: SIZES.h4,
            }}
            onPress={() => {
              bottomSheetRef.current?.close();
              navigation.navigate("WolfAbout");
            }}
          >
            <Text
              style={{
                ...FONTS.body2,
                color: COLORS.black,
                fontFamily: "Inter-Medium",
              }}
            >
              About
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              paddingVertical: SIZES.h3,
              paddingHorizontal: SIZES.h4,
              borderRadius: SIZES.h5,
              marginBottom: SIZES.h4,
            }}
            onPress={() => {
              bottomSheetRef.current?.close();
              navigation.navigate("WolfNews");
            }}
          >
            <Text
              style={{
                ...FONTS.body2,
                color: COLORS.black,
                fontFamily: "Inter-Medium",
              }}
            >
              News
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              paddingVertical: SIZES.h3,
              paddingHorizontal: SIZES.h4,
              borderRadius: SIZES.h5,
              marginBottom: SIZES.h4,
            }}
            onPress={() => {
              bottomSheetRef.current?.close();
              navigation.navigate("WolfContact");
            }}
          >
            <Text
              style={{
                ...FONTS.body2,
                color: COLORS.black,
                fontFamily: "Inter-Medium",
              }}
            >
              Contact
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView style={styles.page}>
        <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"} />
        <View
          style={{
            paddingHorizontal: SIZES.width * 0.04,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: SIZES.h4,
          }}
        >
          <Text style={{ ...FONTS.h2, color: COLORS.black }}>Wolf Olins</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={() => bottomSheetRef.current?.open()}>
              <AntDesign
                name="menu"
                size={17}
                color="black"
                style={{ marginRight: SIZES.h3 }}
              />
            </TouchableOpacity>
            <Feather name="search" size={17} color="black" />
          </View>
        </View>
        <View>
          <Image
            source={{
              uri: "https://www.wolffolins.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4rnblstkg79m%2F18EG6DImEQoL7MiuPoPPLm%2Fcec721ff4fe2283746e5e8ea12022d1a%2F00_Lloyds_Website_Carousel.jpg&w=1920&q=75",
            }}
            style={{ width: SIZES.width, height: SIZES.height * 0.5 }}
          />
          <View
            style={{
              position: "absolute",
              bottom: SIZES.h5,
              paddingHorizontal: SIZES.width * 0.04,
            }}
          >
            <Text
              style={{
                ...FONTS.body2,
                color: COLORS.white,
                fontFamily: "Inter-Medium",
              }}
            >
              Lloyds
            </Text>
            <Text
              style={{
                ...FONTS.body1,
                color: COLORS.white,
                fontFamily: "Inter-Medium",
              }}
            >
              The people are the magic
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.white,
                fontFamily: "Inter-Medium",
              }}
            >
              01/12
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingTop: SIZES.h4,
            paddingHorizontal: SIZES.width * 0.05,
            marginBottom: SIZES.h1,
          }}
        >
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.black,
              fontFamily: "Inter-Regular",
              marginBottom: SIZES.h5,
            }}
          >
            Our Ambition
          </Text>
          <Text
            style={{
              ...FONTS.body1,
              color: COLORS.black,
              fontFamily: "Inter-Medium",
            }}
          >
            We create transformative brands that move{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              businesses, people
            </Text>{" "}
            and the{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              world forward
            </Text>
            .
          </Text>
          <Image
            source={images.wolf_1}
            style={{
              height: SIZES.height * 0.3,
              width: SIZES.width * 0.9,
              marginTop: SIZES.h2,
            }}
          />
          <View
            style={{
              height: 1,
              backgroundColor: COLORS.black,
              marginVertical: SIZES.h1,
            }}
          />
          <Text
            style={{
              ...FONTS.body1,
              color: COLORS.black,
              fontFamily: "Inter-Medium",
            }}
          >
            Selected Work
          </Text>

          {/* Selected Work Grid */}
          <View style={{ marginTop: SIZES.h2 }}>
            {/* Row 1 */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: SIZES.h4,
              }}
            >
              <View style={{ width: "48%" }}>
                <Image
                  source={images.wolf_2}
                  style={{
                    width: "100%",
                    height: SIZES.height * 0.25,
                    borderRadius: SIZES.h5,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    fontFamily: "Inter-Medium",
                    marginTop: SIZES.h4,
                  }}
                >
                  Sandals & Beaches Resorts
                </Text>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.gray,
                    marginTop: SIZES.h5,
                  }}
                >
                  Rooted In Caribbean Soul
                </Text>
              </View>
              <View style={{ width: "48%" }}>
                <Image
                  source={images.wolf_3}
                  style={{
                    width: "100%",
                    height: SIZES.height * 0.25,
                    borderRadius: SIZES.h5,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    fontFamily: "Inter-Medium",
                    marginTop: SIZES.h4,
                  }}
                >
                  Benefit
                </Text>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.gray,
                    marginTop: SIZES.h5,
                  }}
                >
                  Blazing new trails in beauty
                </Text>
              </View>
            </View>

            {/* Row 2 */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: SIZES.h4,
              }}
            >
              <View style={{ width: "48%" }}>
                <Image
                  source={images.wolf_4}
                  style={{
                    width: "100%",
                    height: SIZES.height * 0.25,
                    borderRadius: SIZES.h5,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    fontFamily: "Inter-Medium",
                    marginTop: SIZES.h4,
                  }}
                >
                  Decathlon
                </Text>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.gray,
                    marginTop: SIZES.h5,
                  }}
                >
                  Rewriting sport's playbook for billions of athletes
                </Text>
              </View>
              <View style={{ width: "48%" }}>
                <Image
                  source={images.wolf_5}
                  style={{
                    width: "100%",
                    height: SIZES.height * 0.25,
                    borderRadius: SIZES.h5,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    fontFamily: "Inter-Medium",
                    marginTop: SIZES.h4,
                  }}
                >
                  Lloyds
                </Text>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.gray,
                    marginTop: SIZES.h5,
                  }}
                >
                  A next step forward
                </Text>
              </View>
            </View>

            {/* Last Item Centered */}
            <View style={{ alignItems: "center", marginBottom: SIZES.h1 }}>
              <View style={{ width: "48%" }}>
                <Image
                  source={images.wolf_6}
                  style={{
                    width: "100%",
                    height: SIZES.height * 0.25,
                    borderRadius: SIZES.h5,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    fontFamily: "Inter-Medium",
                    marginTop: SIZES.h4,
                  }}
                >
                  New York Botanical Garden
                </Text>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.gray,
                    marginTop: SIZES.h5,
                  }}
                >
                  Renewing a New York institution
                </Text>
              </View>
            </View>
          </View>

          {/* Featured News Section */}
          <View
            style={{
              marginTop: SIZES.h1,
              marginBottom: SIZES.h1,
            }}
          >
            <Text
              style={{
                ...FONTS.body1,
                color: COLORS.black,
                fontFamily: "Inter-Medium",
                marginBottom: SIZES.h2,
              }}
            >
              Featured News
            </Text>

            {/* News Items Array */}
            {featuredNewsData.map((item, index) => (
              <View key={item.id} style={{ marginBottom: SIZES.h1 }}>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: "100%",
                    height: SIZES.height * 0.25,
                    borderRadius: SIZES.h5,
                  }}
                />
                <View
                  style={{
                    backgroundColor: COLORS.black,
                    paddingHorizontal: SIZES.h4,
                    paddingVertical: SIZES.h5,
                    borderRadius: SIZES.h5,
                    marginTop: -SIZES.h3,
                    marginHorizontal: SIZES.h4,
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.body5,
                      color: COLORS.white,
                      textTransform: "uppercase",
                    }}
                  >
                    {item.category}
                  </Text>
                </View>
                <Text
                  style={{
                    ...FONTS.body2,
                    color: COLORS.black,
                    fontFamily: "Inter-Medium",
                    marginTop: SIZES.h4,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    ...FONTS.body3a,
                    color: COLORS.gray,
                    marginTop: SIZES.h5,
                    lineHeight: 20,
                  }}
                >
                  {item.description}
                </Text>
                <TouchableOpacity style={{ marginTop: SIZES.h5 }}>
                  <Text
                    style={{
                      ...FONTS.body3c,
                      color: COLORS.gray,
                      textDecorationLine: "underline",
                    }}
                  >
                    Full Story
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                height: SIZES.h1 * 2,
                width: SIZES.width * 0.5,
                borderWidth: 2,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: SIZES.h1,
                alignSelf: "center",
              }}
            >
              <Text style={{ ...FONTS.body3a, color: "center" }}>See More</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Footer */}
        <View
          style={{
            marginTop: SIZES.h1,
            paddingTop: SIZES.h1,
            borderTopWidth: 1,
            borderTopColor: COLORS.gray2,
            backgroundColor: COLORS.yellow_1,
            paddingHorizontal: SIZES.width * 0.05,
          }}
        >
          <Text
            style={{
              ...FONTS.h1,
              color: COLORS.black,
              textAlign: "center",
              marginBottom: SIZES.h2,
            }}
          >
            2025
          </Text>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.black,
              textAlign: "center",
              marginBottom: SIZES.h1,
            }}
          >
            Wolff Olins
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.black,
              textAlign: "center",
              marginBottom: SIZES.h1,
            }}
          >
            Talk to us or ask us anything.
          </Text>

          {/* Footer Links */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: SIZES.h2,
              marginBottom: SIZES.h1 * 2,
            }}
          >
            {[
              "Contact Us",
              "Cookie Policy",
              "Privacy Notice",
              "LinkedIn",
              "Twitter",
              "Instagram",
              "YouTube",
              "Archive",
            ].map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: "48%",
                    marginBottom: SIZES.h4,
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.black,
                      textDecorationLine: "underline",
                    }}
                  >
                    {item}
                  </Text>
                </View>
              );
            })}
          </View>
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

export default Wolffins;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.h4,
  },
});
