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
import { shapescapeFooterData } from "../components/data";
import { COLORS, FONTS, images, SIZES } from "../constants";

const ShapeAbout = () => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef<any>(null);

  const teamMembers = {
    belgium: [
      {
        name: "Luigi Belli",
        image:
          "https://framerusercontent.com/images/skqVZH5btzgQopDGEFjkeVmI1co.png?scale-down-to=512&width=1000&height=1000",
      },
      {
        name: "Bram Wulteputte",
        image:
          "https://framerusercontent.com/images/J58AVEIufyb36SzwjGC0Og6Q6yg.png?scale-down-to=512&width=1000&height=1000",
      },
      {
        name: "Fabrizio La Rosa",
        image:
          "https://fasset.shapescape.com/images/yr9xfZT1qxMgb9UPEA2hDKOZfg.jpeg?lossless=1&width=420&height=420",
      },
    ],
    denmark: [
      {
        name: "Frederik Schunck",
        image:
          "https://fasset.shapescape.com/images/AOgWwz53UugW4HwTGv8sYPOIetg.jpg?width=640&height=1024",
      },
      {
        name: "Bram van Gent",
        image:
          "https://fasset.shapescape.com/images/BBogk0gq7KWsqLCiFcdwsBzGXxE.png?scale-down-to=512&width=1000&height=1000",
      },
      {
        name: "August Gade",
        image:
          "https://fasset.shapescape.com/images/b5LnymtFUeD78CmxccN7TjD9sY.png?scale-down-to=512&width=1000&height=1000",
      },
      {
        name: "Johannes Neumann",
        image:
          "https://fasset.shapescape.com/images/K5X2Cj7MYcGCCF5cJv9zseVTwqI.png?scale-down-to=512&width=1000&height=1000",
      },
    ],
  };

  const menuItems = [
    {
      title: "Home",
      onPress: () => navigation.navigate("ShapeScape" as never),
    },
    { title: "About", onPress: () => {} },
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

        {/* Header */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="white" />
          </TouchableOpacity>
          <Image
            source={{
              uri: "https://framerusercontent.com/images/3mHzuMg2QsYio7RkLzfPkhwMQdQ.png?scale-down-to=512&width=1200&height=1200",
            }}
            style={{ height: SIZES.h1, width: SIZES.h1, marginLeft: SIZES.h3 }}
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

        {/* Hero Section */}
        <View style={{ marginTop: SIZES.h1, alignItems: "center" }}>
          <Text style={{ ...FONTS.largeTitleBold, color: COLORS.white }}>
            About us
          </Text>
        </View>

        {/* Who We Are Section */}
        <View style={{ marginTop: SIZES.h1 * 1.5 }}>
          <Text
            style={{ ...FONTS.h1, color: COLORS.white, textAlign: "center" }}
          >
            Who we are
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.white,
              textAlign: "center",
              marginTop: SIZES.h3,
              lineHeight: SIZES.h2,
            }}
          >
            We blend gaming and education to create playful experiences in
            Minecraft. From Add-Ons enjoyed by millions to custom learning
            worlds for schools and institutions, we turn imagination into
            interactive adventures that inspire creativity and curiosity.
          </Text>
        </View>

        {/* Belgium Team */}
        <View style={{ marginTop: SIZES.h1 * 1.5 }}>
          <Text
            style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.h3 }}
          >
            Belgium
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.chocolateBackground,
              marginBottom: SIZES.h1,
            }}
          >
            Our Ghent-based crew is responsible for all of Shapescape's
            Education products and services
          </Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {teamMembers.belgium.map((member, index) => (
              <View key={index} style={styles.teamMember}>
                <Image
                  source={{ uri: member.image }}
                  style={styles.teamMemberImage}
                />
                <Text style={styles.teamMemberName}>{member.name}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Denmark Team */}
        <View style={{ marginTop: SIZES.h1 * 1.5 }}>
          <Text
            style={{ ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.h3 }}
          >
            Denmark
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.chocolateBackground,
              marginBottom: SIZES.h1,
            }}
          >
            Our team in Copenhagen designs and develops Shapescape's Minecraft
            Marketplace products
          </Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {teamMembers.denmark.map((member, index) => (
              <View key={index} style={styles.teamMember}>
                <Image
                  source={{ uri: member.image }}
                  style={styles.teamMemberImage}
                />
                <Text style={styles.teamMemberName}>{member.name}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Our Mission Section */}
        <View style={{ marginTop: SIZES.h1 * 2 }}>
          <Text
            style={{ ...FONTS.h1, color: COLORS.white, textAlign: "center" }}
          >
            Our mission
          </Text>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
              textAlign: "center",
              marginTop: SIZES.h3,
            }}
          >
            Making learning fun and inspiring
          </Text>

          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.white,
              textAlign: "center",
              marginTop: SIZES.h3,
              lineHeight: SIZES.h2,
            }}
          >
            We create immersive gaming experiences that spark curiosity, fuel
            creativity, and make education accessible to children everywhere.
          </Text>

          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.white,
              textAlign: "center",
              marginTop: SIZES.h3,
              lineHeight: SIZES.h2,
            }}
          >
            By combining the power of storytelling, game design, and education,
            we bring complex ideas to life.
          </Text>

          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.white,
              textAlign: "center",
              marginTop: SIZES.h3,
              lineHeight: SIZES.h2,
            }}
          >
            From imaginative adventures to hands-on learning worlds for
            classrooms, we believe play is one of the most powerful tools for
            discovery.
          </Text>

          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.white,
              textAlign: "center",
              marginTop: SIZES.h3,
              lineHeight: SIZES.h2,
            }}
          >
            Our work reaches millions of players and students, but our focus is
            always personal: helping each child connect, explore, and grow
            through experiences that stay with them long after they've logged
            out.
          </Text>

          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.white,
              textAlign: "center",
              marginTop: SIZES.h3,
              lineHeight: SIZES.h2,
            }}
          >
            If you're ready to reach a larger audience, we'd love to help.
          </Text>
        </View>

        <View style={{ marginBottom: SIZES.h2 * 2, marginTop: SIZES.h1 * 1.5 }}>
          {/* Ready to take action */}
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
              onPress={() => navigation.navigate("ShapeContact" as never)}
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

          {/* Footer */}
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

          {/* Footer links */}
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

          {/* Subscribe section */}
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

            {/* Input section */}
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

export default ShapeAbout;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.primary_1,
    paddingTop: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.05,
  },
  teamMember: {
    width: "48%",
    marginBottom: SIZES.h1,
    alignItems: "center",
  },
  teamMemberImage: {
    width: SIZES.width * 0.35,
    height: SIZES.width * 0.35,
    borderRadius: SIZES.h3,
    marginBottom: SIZES.h4,
  },
  teamMemberName: {
    ...FONTS.body3,
    color: COLORS.white,
    fontFamily: "Inter-Medium",
    textAlign: "center",
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
