import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.dashboard}
      onPress={() => navigation.navigate("DashboardSlide")}
    >
      <View style={styles.dashboardChild} />
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
      <Text style={[styles.goodMorning, styles.documentsTypo]}>
        Good morning!
      </Text>
      <Pressable
        style={[styles.dashboardItem, styles.dashboardItemLayout]}
        onPress={() => navigation.navigate("Documents")}
      />
      <Text style={[styles.lastUpdate, styles.lastTypo]}>Last Update</Text>
      <Text style={[styles.am15April, styles.am15Typo]}>10 a.m, 15 April</Text>
      <Text style={[styles.gb128gb, styles.gb128gbClr]}>82 GB / 128GB</Text>
      <Image
        style={[styles.dashboardInner, styles.groupItemLayout]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Text style={[styles.documents, styles.documentsTypo]}>Documents</Text>
      <Text style={[styles.gb, styles.gbLayout]}>12 GB</Text>
      <View style={[styles.rectangleParent, styles.dashboardItemLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.lastUpdate1, styles.lastTypo]}>Last Update</Text>
        <Text style={[styles.am15April1, styles.am15Typo]}>
          10 a.m, 15 April
        </Text>
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Text style={[styles.images, styles.imagesTypo]}>Images</Text>
        <Text style={[styles.gb1, styles.gb1Typo]}>12 GB</Text>
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.rectanglePosition]}
        onPress={() => navigation.navigate("Trash")}
      >
        <View style={[styles.groupInner, styles.groupChildPosition]} />
        <Text style={[styles.lastUpdate1, styles.lastTypo]}>Last Update</Text>
        <Text style={[styles.am15April1, styles.am15Typo]}>
          10 a.m, 15 April
        </Text>
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Text style={[styles.images, styles.imagesTypo]}>Trash</Text>
        <Text style={[styles.gb1, styles.gb1Typo]}>12 GB</Text>
      </Pressable>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={[styles.rectangleView, styles.groupChildPosition]} />
        <Text style={[styles.lastUpdate1, styles.lastTypo]}>Last Update</Text>
        <Text style={[styles.am15April1, styles.am15Typo]}>
          10 a.m, 15 April
        </Text>
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Text style={[styles.videoAudio, styles.imagesTypo]}>Video, Audio</Text>
        <Text style={[styles.gb1, styles.gb1Typo]}>12 GB</Text>
      </View>
      <Text style={[styles.availableStorage, styles.gb128gbClr]}>
        Available Storage
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.dashboardChild1, styles.dashboardChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.dashboardChild2, styles.dashboardChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.dashboardChild3, styles.ellipseIconPosition]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <Text style={[styles.text, styles.textLayout]}>80%</Text>
      <Text style={[styles.spaceUsed, styles.gb128gbClr]}>Space Used</Text>
      <Image
        style={[styles.groupIcon, styles.groupChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-42.png")}
      />
      <View style={[styles.ellipseParent, styles.ellipseLayout]}>
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={[styles.documentIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/document.png")}
        />
      </View>
      <Image
        style={[styles.dashboardChild4, styles.groupChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-43.png")}
      />
      <Image
        style={[styles.dashboardChild5, styles.groupChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-44.png")}
      />
      <View style={[styles.ellipseGroup, styles.ellipseLayout]}>
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-94.png")}
        />
        <Image
          style={[styles.degreesIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/300-degrees.png")}
        />
      </View>
      <Image
        style={[styles.dashboardChild6, styles.groupChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-48.png")}
      />
      <View style={styles.ellipseContainer}>
        <Image
          style={styles.groupChild4}
          resizeMode="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Text style={[styles.text1, styles.textLayout]}>+</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  documentsTypo: {
    color: Color.black,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  dashboardItemLayout: {
    height: 141,
    width: 156,
    top: 335,
    position: "absolute",
  },
  lastTypo: {
    height: 18,
    width: 78,
    color: Color.gray_300,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  am15Typo: {
    width: 118,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    height: 18,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  gb128gbClr: {
    color: Color.white,
    position: "absolute",
  },
  groupItemLayout: {
    height: 1,
    width: 126,
    position: "absolute",
  },
  gbLayout: {
    height: 15,
    width: 43,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.black,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  imagesTypo: {
    left: 24,
    top: 30,
    height: 20,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  gb1Typo: {
    top: 6,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  rectanglePosition: {
    top: 529,
    height: 141,
    width: 156,
    position: "absolute",
  },
  ellipseIconPosition: {
    left: 35,
    top: 117,
    position: "absolute",
  },
  dashboardChildLayout: {
    width: 20,
    height: 20,
    position: "absolute",
  },
  textLayout: {
    height: 29,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  groupChildLayout: {
    height: 70,
    width: 70,
    position: "absolute",
  },
  ellipseLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  iconPosition: {
    left: 10,
    width: 20,
    position: "absolute",
  },
  dashboardChild: {
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
    top: 105,
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
  goodMorning: {
    top: 38,
    left: 112,
    width: 135,
    height: 14,
    textAlign: "left",
  },
  dashboardItem: {
    backgroundColor: Color.white,
    height: 141,
    width: 156,
    top: 335,
    left: 30,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
  },
  lastUpdate: {
    top: 418,
    left: 68,
  },
  am15April: {
    top: 440,
    left: 52,
  },
  gb128gb: {
    top: 199,
    width: 117,
    left: 203,
    color: Color.white,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    height: 18,
    textAlign: "center",
  },
  dashboardInner: {
    top: 405,
    left: 44,
  },
  documents: {
    top: 365,
    left: 54,
    height: 20,
    width: 107,
    textAlign: "left",
  },
  gb: {
    top: 341,
    left: 127,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    height: 15,
    width: 43,
  },
  groupChild: {
    top: 0,
    left: 0,
    height: 141,
    width: 156,
    backgroundColor: Color.white,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
  },
  lastUpdate1: {
    top: 83,
    left: 38,
  },
  am15April1: {
    left: 22,
    top: 105,
    width: 118,
  },
  groupItem: {
    top: 70,
    left: 14,
  },
  images: {
    width: 107,
  },
  gb1: {
    left: 97,
    height: 15,
    width: 43,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.black,
    position: "absolute",
  },
  rectangleParent: {
    left: 216,
    height: 141,
    width: 156,
    top: 335,
  },
  groupInner: {
    top: 0,
    left: 0,
    height: 141,
    width: 156,
    backgroundColor: Color.white,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
  },
  rectangleGroup: {
    left: 216,
  },
  rectangleView: {
    top: 0,
    left: 0,
    height: 141,
    width: 156,
    backgroundColor: Color.white,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
  },
  videoAudio: {
    width: 116,
  },
  rectangleContainer: {
    left: 30,
  },
  availableStorage: {
    top: 119,
    fontSize: FontSize.size_11xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    width: 141,
    height: 75,
    left: 203,
    color: Color.white,
    textAlign: "left",
  },
  ellipseIcon: {
    width: 120,
    height: 120,
  },
  dashboardChild1: {
    top: 113,
    left: 85,
  },
  dashboardChild2: {
    top: 136,
    left: 129,
  },
  dashboardChild3: {
    width: 121,
    height: 121,
  },
  text: {
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
    color: Color.white,
    textAlign: "center",
  },
  groupIcon: {
    top: 17,
    left: 293,
  },
  groupChild2: {
    top: -13,
    left: -14,
  },
  documentIcon: {
    top: 4,
    height: 30,
  },
  ellipseParent: {
    top: 319,
    left: 25,
  },
  dashboardChild4: {
    top: 306,
    left: 200,
  },
  dashboardChild5: {
    top: 502,
    left: 14,
  },
  degreesIcon: {
    top: 10,
    height: 20,
  },
  ellipseGroup: {
    top: 515,
    left: 214,
  },
  dashboardChild6: {
    top: 776,
    width: 425,
    height: 68,
  },
  groupChild4: {
    top: -11,
    left: -13,
    width: 90,
    height: 90,
    position: "absolute",
  },
  text1: {
    left: 15,
    fontSize: FontSize.size_15xl,
    width: 30,
    top: 6,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  ellipseContainer: {
    top: 752,
    left: 165,
    width: 60,
    height: 60,
    position: "absolute",
  },
  dashboard: {
    backgroundColor: Color.lavender,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_xl,
  },
});

export default Dashboard;
