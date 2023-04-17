import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DashboardSlide = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.dashboardSlide}
      onPress={() => navigation.navigate("Dashboard")}
    >
      <View style={[styles.dashboardSlideChild, styles.groupChildShadowBox]} />
      <Image
        style={styles.dashboardSlideItem}
        resizeMode="cover"
        source={require("../assets/ellipse-31.png")}
      />
      <Image
        style={[styles.dashboardSlideInner, styles.childLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Text style={[styles.goodMorning, styles.madhureshTypo]}>
        Good morning!
      </Text>
      <View style={[styles.rectangleView, styles.groupChildLayout]} />
      <Text style={[styles.lastUpdate, styles.lastTypo]}>Last Update</Text>
      <Text style={[styles.am15April, styles.am15Typo]}>10 a.m, 15 April</Text>
      <Text style={[styles.gb128gb, styles.gb128gbClr]}>82 GB / 128GB</Text>
      <Image
        style={[styles.vectorIcon, styles.groupItemLayout]}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Text style={styles.documents}>Documents</Text>
      <Text style={[styles.gb, styles.gbTypo]}>12 GB</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
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
        <Text style={[styles.gb1, styles.gbTypo]}>12 GB</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.groupInner, styles.groupChildLayout]} />
        <Text style={[styles.lastUpdate1, styles.lastTypo]}>Last Update</Text>
        <Text style={[styles.am15April1, styles.am15Typo]}>
          10 a.m, 15 April
        </Text>
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <Text style={[styles.images, styles.imagesTypo]}>Others</Text>
        <Text style={[styles.gb1, styles.gbTypo]}>12 GB</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
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
        <Text style={[styles.gb1, styles.gbTypo]}>12 GB</Text>
      </View>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-5.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Text style={[styles.text, styles.textLayout]}>+</Text>
      <Text style={styles.availableStorage}>Available Storage</Text>
      <Image
        style={[styles.dashboardSlideChild1, styles.dashboardChildPosition1]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.dashboardSlideChild2, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.dashboardSlideChild3, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.dashboardSlideChild4, styles.dashboardChildPosition1]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <Text style={[styles.text1, styles.textLayout]}>80%</Text>
      <Text style={[styles.spaceUsed, styles.gb128gbClr]}>Space Used</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.ellipseParent}>
        <Image
          style={[styles.groupChild4, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={[styles.documentIcon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/document.png")}
        />
      </View>
      <View style={styles.ellipseParent}>
        <Image
          style={[styles.groupChild4, styles.groupChildPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={[styles.documentIcon, styles.iconChildLayout]}
          resizeMode="cover"
          source={require("../assets/document.png")}
        />
      </View>
      <Image
        style={[styles.dashboardSlideChild5, styles.childLayout1]}
        resizeMode="cover"
        source={require("../assets/ellipse-93.png")}
      />
      <Image
        style={[styles.dashboardSlideChild6, styles.dashboardChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-94.png")}
      />
      <Image
        style={[styles.dashboardSlideChild7, styles.dashboardChildPosition]}
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
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.degreesIcon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/300-degrees.png")}
      />
      <View style={styles.dashboardSlideChild8} />
      <View style={styles.dashboardSlideChild9} />
      <View style={[styles.ellipseContainer, styles.groupViewLayout]}>
        <Image
          style={[styles.groupChild6, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-96.png")}
        />
        <Image
          style={styles.documentIcon2}
          resizeMode="cover"
          source={require("../assets/document1.png")}
        />
      </View>
      <Image
        style={styles.dashboardSlideChild10}
        resizeMode="cover"
        source={require("../assets/group-10.png")}
      />
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <Image
          style={[styles.groupChild6, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-97.png")}
        />
        <Image
          style={styles.documentIcon2}
          resizeMode="cover"
          source={require("../assets/document1.png")}
        />
      </View>
      <Text style={[styles.madhuresh91394gmailcom, styles.logoutTypo]}>
        madhuresh91394@gmail.com
      </Text>
      <Text style={[styles.madhuresh, styles.madhureshPosition]}>
        Madhuresh
      </Text>
      <Image
        style={[styles.dashboardSlideChild11, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-98.png")}
      />
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() => navigation.navigate("SignPage")}
      >
        <View style={[styles.groupChild8, styles.groupLayout]} />
        <Image
          style={[styles.shutdownIcon, styles.logoutPosition]}
          resizeMode="cover"
          source={require("../assets/shutdown.png")}
        />
        <Text style={[styles.logout, styles.logoutPosition]}>Logout</Text>
      </Pressable>
      <Text style={[styles.trash, styles.trashTypo]}>Trash</Text>
      <Text style={[styles.recentFiles, styles.trashTypo]}>Recent Files</Text>
      <Text style={[styles.darkMode, styles.trashTypo]}>Dark Mode</Text>
      <Text style={[styles.editProfile, styles.trashTypo]}>Edit Profile</Text>
      <Text style={[styles.pushNotification, styles.trashTypo]}>
        Push Notification
      </Text>
      <Pressable
        style={[styles.slidButton2, styles.buttonLayout]}
        onPress={() => navigation.navigate("DarkDashboardSlide")}
      />
      <View style={styles.slideButton}>
        <View style={[styles.slideButtonChild, styles.buttonLayout]} />
        <Image
          style={[styles.slideButtonItem, styles.slideLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
      </View>
      <Image
        style={[styles.dashboardSlideChild12, styles.slideLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-15.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildShadowBox: {
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  childLayout1: {
    height: 70,
    width: 70,
    position: "absolute",
  },
  madhureshTypo: {
    height: 14,
    width: 135,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  groupChildLayout: {
    height: 141,
    width: 156,
    position: "absolute",
  },
  lastTypo: {
    height: 18,
    width: 78,
    textAlign: "center",
    color: Color.gray_300,
    fontSize: FontSize.size_xs,
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
    textAlign: "center",
    position: "absolute",
  },
  groupItemLayout: {
    height: 1,
    width: 126,
    position: "absolute",
  },
  gbTypo: {
    height: 15,
    width: 43,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
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
  rectanglePosition: {
    top: 529,
    height: 141,
    width: 156,
    position: "absolute",
  },
  textLayout: {
    height: 29,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  dashboardChildPosition1: {
    left: 35,
    top: 119,
    position: "absolute",
  },
  iconChildLayout: {
    width: 20,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildPosition: {
    left: -14,
    top: -13,
  },
  dashboardChildPosition: {
    top: 502,
    height: 70,
    width: 70,
    position: "absolute",
  },
  groupViewLayout: {
    height: 50,
    width: 50,
    left: 30,
    position: "absolute",
  },
  childLayout: {
    height: 80,
    width: 80,
    position: "absolute",
  },
  logoutTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  madhureshPosition: {
    left: 106,
    position: "absolute",
  },
  groupLayout: {
    height: 49,
    width: 190,
    position: "absolute",
  },
  logoutPosition: {
    top: 10,
    position: "absolute",
  },
  trashTypo: {
    left: 96,
    height: 20,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  buttonLayout: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderRadius: Border.br_21xl,
    height: 27,
    width: 64,
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  slideLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  dashboardSlideChild: {
    left: 18,
    backgroundColor: Color.royalblue,
    width: 354,
    height: 150,
    top: 105,
    position: "absolute",
    borderRadius: Border.br_xl,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  dashboardSlideItem: {
    top: 25,
    left: 41,
    height: 58,
    width: 58,
    position: "absolute",
  },
  dashboardSlideInner: {
    top: 17,
    left: 293,
  },
  goodMorning: {
    top: 38,
    left: 112,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.white,
    left: 30,
    top: 335,
    width: 156,
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
  },
  vectorIcon: {
    top: 405,
    left: 44,
  },
  documents: {
    top: 365,
    left: 54,
    height: 20,
    width: 107,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  gb: {
    top: 341,
    left: 127,
  },
  groupChild: {
    left: 0,
    top: 0,
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
  },
  groupItem: {
    top: 70,
    left: 14,
  },
  images: {
    width: 107,
  },
  gb1: {
    top: 6,
    left: 97,
  },
  rectangleParent: {
    left: 216,
    top: 335,
    width: 156,
  },
  groupInner: {
    left: 0,
    top: 0,
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
  groupChild2: {
    left: 0,
    top: 0,
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
  groupIcon: {
    top: 776,
    width: 425,
    height: 68,
    left: 0,
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
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    height: 29,
  },
  availableStorage: {
    fontSize: FontSize.size_11xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    width: 141,
    height: 75,
    top: 119,
    color: Color.white,
    left: 203,
    textAlign: "left",
    position: "absolute",
  },
  dashboardSlideChild1: {
    width: 120,
    height: 120,
  },
  dashboardSlideChild2: {
    top: 115,
    left: 85,
    height: 20,
  },
  dashboardSlideChild3: {
    left: 129,
    top: 138,
    height: 20,
  },
  dashboardSlideChild4: {
    height: 121,
    width: 121,
  },
  text1: {
    left: 62,
    fontSize: FontSize.size_9xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 65,
    top: 153,
  },
  spaceUsed: {
    top: 193,
    left: 65,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.josefinSansRegular,
    width: 61,
    height: 13,
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
  groupChild4: {
    height: 70,
    width: 70,
    position: "absolute",
  },
  documentIcon: {
    top: 4,
    left: 10,
    height: 30,
  },
  ellipseParent: {
    top: 319,
    left: 25,
    width: 40,
    height: 40,
    position: "absolute",
  },
  dashboardSlideChild5: {
    top: 306,
    left: 200,
  },
  dashboardSlideChild6: {
    left: 200,
  },
  dashboardSlideChild7: {
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
    top: "56.87%",
    right: "91.79%",
    bottom: "40.76%",
    left: "3.08%",
    width: "5.13%",
    height: "2.37%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon4: {
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
    height: 20,
  },
  dashboardSlideChild8: {
    left: 332,
    backgroundColor: Color.gainsboro,
    top: 0,
    width: 58,
    position: "absolute",
    height: 844,
  },
  dashboardSlideChild9: {
    top: -3,
    borderRadius: Border.br_11xl,
    borderStyle: "solid",
    borderColor: "#7288fa",
    borderRightWidth: 10,
    width: 331,
    left: 0,
    backgroundColor: Color.white,
    position: "absolute",
    height: 844,
  },
  groupChild6: {
    left: -14,
    top: -13,
  },
  documentIcon2: {
    top: 5,
    left: 13,
    height: 38,
    width: 25,
    position: "absolute",
  },
  ellipseContainer: {
    top: 138,
  },
  dashboardSlideChild10: {
    top: 285,
    left: 16,
    height: 240,
    width: 80,
    position: "absolute",
  },
  groupView: {
    top: 218,
  },
  madhuresh91394gmailcom: {
    top: 58,
    width: 176,
    height: 16,
    left: 106,
    position: "absolute",
    color: Color.gray_300,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
  },
  madhuresh: {
    top: 29,
    height: 14,
    width: 135,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  dashboardSlideChild11: {
    top: 13,
    left: 15,
  },
  groupChild8: {
    borderRadius: Border.br_5xl_5,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  shutdownIcon: {
    height: 30,
    width: 30,
    left: 22,
  },
  logout: {
    left: 70,
    color: Color.salmon,
    width: 62,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    height: 20,
    fontSize: FontSize.size_lg,
    top: 10,
  },
  groupPressable: {
    top: 725,
    left: 74,
  },
  trash: {
    top: 473,
    width: 121,
  },
  recentFiles: {
    top: 313,
    width: 121,
  },
  darkMode: {
    top: 393,
    width: 132,
  },
  editProfile: {
    top: 153,
    width: 121,
  },
  pushNotification: {
    top: 233,
    width: 170,
  },
  slidButton2: {
    top: 389,
    left: 306,
  },
  slideButtonChild: {
    left: 64,
    top: 0,
  },
  slideButtonItem: {
    left: 0,
    top: 0,
  },
  slideButton: {
    top: 229,
    left: 242,
    height: 27,
    width: 64,
    position: "absolute",
  },
  dashboardSlideChild12: {
    top: 391,
    left: 242,
  },
  dashboardSlide: {
    backgroundColor: "#f9fafc",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
    borderRadius: Border.br_xl,
  },
});

export default DashboardSlide;
