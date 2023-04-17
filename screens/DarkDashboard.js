import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const DarkDashboard = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.darkDashboard}
      onPress={() => navigation.navigate("DarkDashboardSlide")}
    >
      <View style={styles.darkDashboardChild} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/ellipse-98.png")}
        />
      </Pressable>
      <Image
        style={[styles.darkDashboardItem, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={styles.goodMorning}>Good morning!</Text>
      <View
        style={[styles.darkDashboardInner, styles.rectangleViewShadowBox]}
      />
      <Text style={[styles.lastUpdate, styles.lastTypo1]}>Last Update</Text>
      <Text style={[styles.am15April, styles.am15Typo1]}>10 a.m, 15 April</Text>
      <Text style={styles.gb128gb}>82 GB / 128GB</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout3]}
        resizeMode="cover"
        source={require("../assets/vector-11.png")}
      />
      <Text style={[styles.documents, styles.imagesTypo]}>Documents</Text>
      <Text style={[styles.gb, styles.gbTypo]}>12 GB</Text>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Text style={[styles.lastUpdate1, styles.lastTypo1]}>Last Update</Text>
      <Text style={[styles.am15April1, styles.am15Typo1]}>
        10 a.m, 15 April
      </Text>
      <Image
        style={[styles.darkDashboardChild1, styles.vectorIconLayout3]}
        resizeMode="cover"
        source={require("../assets/vector-11.png")}
      />
      <Text style={[styles.images, styles.imagesPosition]}>Images</Text>
      <Text style={[styles.gb1, styles.gbTypo]}>12 GB</Text>
      <View style={[styles.darkDashboardChild2, styles.darkChildShadowBox]} />
      <Text style={[styles.lastUpdate2, styles.lastTypo]}>Last Update</Text>
      <Text style={[styles.am15April2, styles.am15Typo]}>10 a.m, 15 April</Text>
      <Image
        style={[styles.darkDashboardChild3, styles.darkChildPosition2]}
        resizeMode="cover"
        source={require("../assets/vector-11.png")}
      />
      <Text style={[styles.others, styles.othersTypo]}>Others</Text>
      <Text style={[styles.gb2, styles.gb2Typo]}>12 GB</Text>
      <View style={[styles.darkDashboardChild4, styles.darkChildShadowBox]} />
      <Text style={[styles.lastUpdate3, styles.lastTypo]}>Last Update</Text>
      <Text style={[styles.am15April3, styles.am15Typo]}>10 a.m, 15 April</Text>
      <Image
        style={[styles.darkDashboardChild5, styles.darkChildPosition2]}
        resizeMode="cover"
        source={require("../assets/vector-11.png")}
      />
      <Text style={[styles.videoAudio, styles.othersTypo]}>Video, Audio</Text>
      <Text style={[styles.gb3, styles.gb2Typo]}>12 GB</Text>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-51.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Text style={[styles.text, styles.textLayout]}>+</Text>
      <Text style={styles.availableStorage}>Available Storage</Text>
      <Image
        style={[styles.darkDashboardChild6, styles.darkChildPosition1]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.darkDashboardChild7, styles.darkChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.darkDashboardChild8, styles.darkChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.darkDashboardChild9, styles.darkChildPosition1]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <Text style={[styles.text1, styles.textLayout]}>80%</Text>
      <Text style={styles.spaceUsed}>Space Used</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector3.png")}
      />
      <View style={styles.ellipseParent}>
        <Image
          style={[styles.groupChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={styles.documentIcon}
          resizeMode="cover"
          source={require("../assets/document.png")}
        />
      </View>
      <Image
        style={[styles.darkDashboardChild10, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-93.png")}
      />
      <Image
        style={[styles.darkDashboardChild11, styles.darkChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-94.png")}
      />
      <Image
        style={[styles.darkDashboardChild12, styles.darkChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-92.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.degreesIcon, styles.darkChildLayout]}
        resizeMode="cover"
        source={require("../assets/300-degrees.png")}
      />
      <Image
        style={[styles.historicalIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/historical.png")}
      />
      <Image
        style={[styles.peopleIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/people.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    height: 70,
    width: 70,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    height: 141,
    width: 156,
    backgroundColor: Color.gray_100,
    top: 335,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  lastTypo1: {
    height: 18,
    width: 78,
    fontSize: FontSize.size_xs,
    top: 418,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  am15Typo1: {
    width: 118,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    top: 440,
    height: 18,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  vectorIconLayout3: {
    height: 1,
    width: 126,
    top: 405,
    position: "absolute",
  },
  imagesTypo: {
    height: 20,
    top: 365,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  gbTypo: {
    height: 15,
    width: 43,
    top: 341,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.white,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  imagesPosition: {
    left: 240,
    width: 107,
  },
  darkChildShadowBox: {
    top: 529,
    height: 141,
    width: 156,
    backgroundColor: Color.gray_100,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  lastTypo: {
    top: 612,
    height: 18,
    width: 78,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.white,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  am15Typo: {
    top: 634,
    width: 118,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    height: 18,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  darkChildPosition2: {
    top: 599,
    height: 1,
    width: 126,
    position: "absolute",
  },
  othersTypo: {
    top: 559,
    height: 20,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  gb2Typo: {
    top: 535,
    height: 15,
    width: 43,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.white,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  textLayout: {
    height: 29,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  darkChildPosition1: {
    left: 35,
    top: 119,
    position: "absolute",
  },
  darkChildLayout: {
    width: 20,
    height: 20,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  darkChildPosition: {
    top: 502,
    height: 70,
    width: 70,
    position: "absolute",
  },
  iconPosition: {
    top: 797,
    height: 30,
    width: 30,
    position: "absolute",
  },
  darkDashboardChild: {
    top: 105,
    left: 18,
    backgroundColor: Color.royalblue,
    width: 354,
    height: 150,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 14,
    width: 80,
    height: 80,
    left: 30,
    position: "absolute",
  },
  darkDashboardItem: {
    top: 17,
    left: 293,
  },
  goodMorning: {
    top: 38,
    left: 112,
    width: 135,
    height: 14,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  darkDashboardInner: {
    left: 30,
  },
  lastUpdate: {
    left: 68,
  },
  am15April: {
    left: 52,
  },
  gb128gb: {
    top: 199,
    width: 117,
    left: 203,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    height: 18,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  vectorIcon: {
    left: 44,
  },
  documents: {
    width: 107,
    height: 20,
    left: 54,
    top: 365,
  },
  gb: {
    left: 127,
  },
  rectangleView: {
    left: 216,
  },
  lastUpdate1: {
    left: 254,
  },
  am15April1: {
    left: 238,
  },
  darkDashboardChild1: {
    left: 230,
  },
  images: {
    height: 20,
    top: 365,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    position: "absolute",
    left: 240,
  },
  gb1: {
    left: 313,
  },
  darkDashboardChild2: {
    left: 216,
  },
  lastUpdate2: {
    left: 254,
  },
  am15April2: {
    left: 238,
  },
  darkDashboardChild3: {
    left: 230,
  },
  others: {
    left: 240,
    width: 107,
  },
  gb2: {
    left: 313,
  },
  darkDashboardChild4: {
    left: 30,
  },
  lastUpdate3: {
    left: 68,
  },
  am15April3: {
    left: 52,
  },
  darkDashboardChild5: {
    left: 44,
  },
  videoAudio: {
    width: 116,
    left: 54,
    top: 559,
  },
  gb3: {
    left: 127,
  },
  groupIcon: {
    top: 776,
    left: 0,
    width: 425,
    height: 68,
    position: "absolute",
  },
  ellipseIcon: {
    top: 741,
    left: 152,
    width: 90,
    height: 90,
    position: "absolute",
  },
  text: {
    top: 758,
    left: 180,
    fontSize: FontSize.size_15xl,
    width: 30,
    height: 29,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  availableStorage: {
    fontSize: FontSize.size_11xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    width: 141,
    height: 75,
    top: 119,
    left: 203,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  darkDashboardChild6: {
    width: 120,
    height: 120,
  },
  darkDashboardChild7: {
    top: 115,
    left: 85,
  },
  darkDashboardChild8: {
    top: 138,
    left: 129,
  },
  darkDashboardChild9: {
    width: 121,
    height: 121,
  },
  text1: {
    top: 153,
    left: 62,
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 65,
  },
  spaceUsed: {
    top: 193,
    left: 65,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.josefinSansRegular,
    width: 61,
    height: 13,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  vectorIcon1: {
    top: "4.74%",
    right: "13.59%",
    bottom: "92.89%",
    left: "81.28%",
    width: "5.13%",
    height: "2.37%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  groupChild: {
    top: -13,
    left: -14,
  },
  documentIcon: {
    top: 4,
    left: 10,
    height: 30,
    width: 20,
    position: "absolute",
  },
  ellipseParent: {
    top: 319,
    left: 25,
    width: 40,
    height: 40,
    position: "absolute",
  },
  darkDashboardChild10: {
    top: 306,
    left: 200,
  },
  darkDashboardChild11: {
    left: 200,
  },
  darkDashboardChild12: {
    left: 14,
  },
  vectorIcon2: {
    height: "2.13%",
    width: "4.62%",
    top: "39.1%",
    right: "37.69%",
    bottom: "58.77%",
    left: "57.69%",
  },
  vectorIcon3: {
    top: "62.2%",
    right: "85.13%",
    bottom: "35.43%",
    left: "9.74%",
    width: "5.13%",
    height: "2.37%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  degreesIcon: {
    top: 525,
    left: 224,
  },
  historicalIcon: {
    left: 105,
  },
  peopleIcon: {
    left: 247,
  },
  darkDashboard: {
    backgroundColor: Color.gray_200,
    flex: 1,
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_xl,
    width: "100%",
  },
});

export default DarkDashboard;
