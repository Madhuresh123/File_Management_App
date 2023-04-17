import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const DarkDashboardSlide = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.darkDashboardSlide}
      onPress={() => navigation.navigate("DarkDashboard")}
    >
      <View
        style={[
          styles.darkDashboardSlideChild,
          styles.rectanglePressableShadowBox,
        ]}
      />
      <Image
        style={[styles.darkDashboardSlideItem, styles.groupItemLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-98.png")}
      />
      <Image
        style={[styles.darkDashboardSlideInner, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Text style={[styles.goodMorning, styles.madhureshTypo]}>
        Good morning!
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Text style={[styles.lastUpdate, styles.lastTypo]}>Last Update</Text>
      <Text style={[styles.am15April, styles.am15Typo1]}>10 a.m, 15 April</Text>
      <Text style={styles.gb128gb}>82 GB / 128GB</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout3]}
        resizeMode="cover"
        source={require("../assets/vector-11.png")}
      />
      <Text style={styles.documents}>Documents</Text>
      <Text style={[styles.gb, styles.gbTypo]}>12 GB</Text>
      <View
        style={[styles.darkDashboardSlideChild1, styles.rectangleViewShadowBox]}
      />
      <Text style={[styles.lastUpdate1, styles.lastTypo]}>Last Update</Text>
      <Text style={[styles.am15April1, styles.am15Typo1]}>
        10 a.m, 15 April
      </Text>
      <Image
        style={[styles.darkDashboardSlideChild2, styles.vectorIconLayout3]}
        resizeMode="cover"
        source={require("../assets/vector-11.png")}
      />
      <Text style={[styles.images, styles.imagesPosition]}>Images</Text>
      <Text style={[styles.gb1, styles.gbTypo]}>12 GB</Text>
      <View
        style={[styles.darkDashboardSlideChild3, styles.darkChildShadowBox]}
      />
      <Text style={[styles.am15April2, styles.am15Typo]}>10 a.m, 15 April</Text>
      <Image
        style={[styles.darkDashboardSlideChild4, styles.darkChildPosition2]}
        resizeMode="cover"
        source={require("../assets/vector-11.png")}
      />
      <Text style={[styles.others, styles.othersTypo]}>Others</Text>
      <Text style={[styles.gb2, styles.gb2Typo]}>12 GB</Text>
      <View
        style={[styles.darkDashboardSlideChild5, styles.darkChildShadowBox]}
      />
      <Text style={[styles.lastUpdate2, styles.lastTypo]}>Last Update</Text>
      <Text style={[styles.am15April3, styles.am15Typo]}>10 a.m, 15 April</Text>
      <Image
        style={[styles.darkDashboardSlideChild6, styles.darkChildPosition2]}
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
        style={[styles.darkDashboardSlideChild7, styles.darkChildPosition1]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.darkDashboardSlideChild8, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.darkDashboardSlideChild9, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.darkDashboardSlideChild10, styles.trashLayout]}
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
          style={[styles.groupChild, styles.groupPosition]}
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
        style={[styles.darkDashboardSlideChild11, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-93.png")}
      />
      <Image
        style={[styles.darkDashboardSlideChild12, styles.darkChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-94.png")}
      />
      <Image
        style={[styles.darkDashboardSlideChild13, styles.darkChildPosition]}
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
        style={[styles.degreesIcon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/300-degrees.png")}
      />
      <View
        style={[styles.darkDashboardSlideChild14, styles.darkChildLayout]}
      />
      <View style={[styles.slideParent, styles.slideLayout]}>
        <View style={[styles.slide, styles.slideLayout]} />
        <View style={[styles.ellipseGroup, styles.groupParentLayout]}>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-96.png")}
          />
          <Image
            style={[styles.documentIcon1, styles.groupChild6Layout]}
            resizeMode="cover"
            source={require("../assets/document1.png")}
          />
        </View>
        <View style={[styles.ellipseContainer, styles.groupParentLayout]}>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-97.png")}
          />
          <Image
            style={[styles.documentIcon1, styles.groupChild6Layout]}
            resizeMode="cover"
            source={require("../assets/document1.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-99.png")}
          />
          <Image
            style={[styles.documentIcon1, styles.groupChild6Layout]}
            resizeMode="cover"
            source={require("../assets/document1.png")}
          />
        </View>
        <View style={[styles.ellipseParent1, styles.groupParentLayout]}>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-910.png")}
          />
          <Image
            style={[styles.documentIcon1, styles.groupChild6Layout]}
            resizeMode="cover"
            source={require("../assets/document1.png")}
          />
        </View>
        <View style={[styles.ellipseParent2, styles.groupParentLayout]}>
          <Image
            style={[styles.groupItem, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-911.png")}
          />
          <Image
            style={[styles.documentIcon1, styles.groupChild6Layout]}
            resizeMode="cover"
            source={require("../assets/document1.png")}
          />
        </View>
        <Text style={[styles.editProfile, styles.trashLayout]}>
          Edit Profile
        </Text>
        <Text style={[styles.pushNotification, styles.trashTypo]}>
          Push Notification
        </Text>
        <Text style={[styles.recentFiles, styles.trashLayout]}>
          Recent Files
        </Text>
        <Text style={[styles.darkMode, styles.trashTypo]}>Dark Mode</Text>
        <Text style={[styles.trash, styles.trashLayout]}>Trash</Text>
        <Pressable
          style={[
            styles.rectanglePressable,
            styles.rectanglePressableShadowBox,
          ]}
          onPress={() => navigation.navigate("SignPage")}
        />
        <Image
          style={[styles.shutdownIcon, styles.logoutPosition]}
          resizeMode="cover"
          source={require("../assets/shutdown.png")}
        />
        <Text style={[styles.logout, styles.logoutTypo]}>Logout</Text>
        <Image
          style={[styles.groupChild4, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-98.png")}
        />
        <Text style={[styles.madhuresh, styles.madhureshPosition]}>
          Madhuresh
        </Text>
        <Text style={[styles.madhuresh91394gmailcom, styles.madhureshPosition]}>
          madhuresh91394@gmail.com
        </Text>
      </View>
      <View
        style={[styles.darkDashboardSlideChild15, styles.darkChildLayout]}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={styles.groupChildLayout} />
        <Image
          style={[styles.groupChild6, styles.groupChild6Layout]}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.navigate("DashboardSlide")}
      >
        <View style={styles.groupChildLayout} />
        <Image
          style={[styles.groupChild6, styles.groupChild6Layout]}
          resizeMode="cover"
          source={require("../assets/ellipse-15.png")}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rectanglePressableShadowBox: {
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  groupItemLayout: {
    height: 80,
    width: 80,
  },
  childLayout: {
    height: 70,
    width: 70,
  },
  madhureshTypo: {
    height: 14,
    width: 135,
    top: 38,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  rectangleViewShadowBox: {
    height: 141,
    width: 156,
    top: 335,
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
    height: 18,
    width: 78,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.white,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  am15Typo1: {
    width: 118,
    fontFamily: FontFamily.interRegular,
    top: 440,
    fontSize: FontSize.size_base,
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
  },
  iconChildLayout: {
    width: 20,
    position: "absolute",
  },
  trashLayout: {
    width: 121,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPosition: {
    left: -14,
    top: -13,
    position: "absolute",
  },
  darkChildPosition: {
    top: 502,
    height: 70,
    width: 70,
    position: "absolute",
  },
  darkChildLayout: {
    width: 58,
    position: "absolute",
    height: 844,
  },
  slideLayout: {
    width: 331,
    top: 0,
    position: "absolute",
    height: 844,
  },
  groupParentLayout: {
    height: 50,
    width: 50,
    left: 34,
    position: "absolute",
  },
  groupChild6Layout: {
    width: 25,
    position: "absolute",
  },
  trashTypo: {
    fontSize: FontSize.size_base,
    left: 100,
    height: 20,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  logoutPosition: {
    top: 744,
    position: "absolute",
  },
  logoutTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  madhureshPosition: {
    left: 110,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  rectangleLayout: {
    height: 27,
    width: 64,
    position: "absolute",
  },
  darkDashboardSlideChild: {
    top: 105,
    left: 18,
    backgroundColor: Color.royalblue,
    width: 354,
    height: 150,
    borderRadius: Border.br_xl,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  darkDashboardSlideItem: {
    top: 14,
    left: 30,
    position: "absolute",
  },
  darkDashboardSlideInner: {
    top: 17,
    left: 293,
    position: "absolute",
  },
  goodMorning: {
    left: 112,
    textAlign: "left",
    color: Color.white,
    width: 135,
    top: 38,
    position: "absolute",
  },
  rectangleView: {
    left: 30,
  },
  lastUpdate: {
    left: 68,
    height: 18,
    width: 78,
    top: 418,
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
    height: 20,
    width: 107,
    left: 54,
    top: 365,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  gb: {
    left: 127,
  },
  darkDashboardSlideChild1: {
    left: 216,
  },
  lastUpdate1: {
    left: 254,
    top: 418,
  },
  am15April1: {
    left: 238,
  },
  darkDashboardSlideChild2: {
    left: 230,
  },
  images: {
    height: 20,
    top: 365,
    left: 240,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  gb1: {
    left: 313,
  },
  darkDashboardSlideChild3: {
    left: 216,
  },
  am15April2: {
    left: 238,
  },
  darkDashboardSlideChild4: {
    left: 230,
  },
  others: {
    left: 240,
    width: 107,
  },
  gb2: {
    left: 313,
  },
  darkDashboardSlideChild5: {
    left: 30,
  },
  lastUpdate2: {
    top: 612,
    left: 68,
    height: 18,
    width: 78,
  },
  am15April3: {
    left: 52,
  },
  darkDashboardSlideChild6: {
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
    left: 203,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  darkDashboardSlideChild7: {
    width: 120,
    height: 120,
    position: "absolute",
  },
  darkDashboardSlideChild8: {
    top: 115,
    left: 85,
    height: 20,
  },
  darkDashboardSlideChild9: {
    top: 138,
    left: 129,
    height: 20,
  },
  darkDashboardSlideChild10: {
    height: 121,
    left: 35,
    top: 119,
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
    height: 70,
    width: 70,
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
  darkDashboardSlideChild11: {
    top: 306,
    left: 200,
    position: "absolute",
  },
  darkDashboardSlideChild12: {
    left: 200,
  },
  darkDashboardSlideChild13: {
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
    height: 20,
  },
  darkDashboardSlideChild14: {
    top: -4,
    left: 332,
    backgroundColor: Color.gray_300,
  },
  slide: {
    borderRadius: Border.br_11xl,
    borderStyle: "solid",
    borderColor: "#7288fa",
    borderRightWidth: 10,
    left: 0,
    backgroundColor: Color.gray_100,
    top: 0,
  },
  groupItem: {
    height: 80,
    width: 80,
  },
  documentIcon1: {
    top: 5,
    left: 13,
    height: 38,
  },
  ellipseGroup: {
    top: 147,
  },
  ellipseContainer: {
    top: 227,
  },
  groupView: {
    top: 307,
  },
  ellipseParent1: {
    top: 387,
  },
  ellipseParent2: {
    top: 467,
  },
  editProfile: {
    top: 162,
    left: 100,
    height: 20,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  pushNotification: {
    top: 242,
    width: 170,
    left: 100,
    height: 20,
    position: "absolute",
  },
  recentFiles: {
    top: 322,
    left: 100,
    height: 20,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  darkMode: {
    top: 402,
    width: 132,
    left: 100,
    height: 20,
    position: "absolute",
  },
  trash: {
    top: 482,
    left: 100,
    height: 20,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  rectanglePressable: {
    top: 734,
    left: 78,
    borderRadius: Border.br_5xl_5,
    backgroundColor: Color.white,
    width: 190,
    height: 49,
  },
  shutdownIcon: {
    left: 100,
    height: 30,
    width: 30,
  },
  logout: {
    left: 148,
    color: Color.salmon,
    width: 62,
    top: 744,
    position: "absolute",
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
  },
  groupChild4: {
    top: 22,
    left: 19,
    position: "absolute",
  },
  madhuresh: {
    height: 14,
    width: 135,
    top: 38,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    left: 110,
  },
  madhuresh91394gmailcom: {
    top: 67,
    width: 176,
    height: 16,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    left: 110,
  },
  slideParent: {
    left: -1,
  },
  darkDashboardSlideChild15: {
    top: -5,
    left: 330,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  groupChildLayout: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_21xl,
    left: 64,
    height: 27,
    width: 64,
    top: 0,
    position: "absolute",
  },
  groupChild6: {
    top: 1,
    left: 38,
    height: 25,
  },
  rectangleParent: {
    top: 237,
    left: 242,
  },
  rectangleGroup: {
    top: 398,
    left: 241,
  },
  darkDashboardSlide: {
    backgroundColor: Color.gray_200,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
    borderRadius: Border.br_xl,
  },
});

export default DarkDashboardSlide;
