import * as React from "react";
import { Pressable, Image, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const EditProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.editProfile, styles.groupChildBg]}>
      <Pressable
        style={styles.editProfileInner}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <View style={styles.ellipseParent}>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={styles.backIcon}
            resizeMode="cover"
            source={require("../assets/back.png")}
          />
        </View>
      </Pressable>
      <Text style={styles.editProfile1}>Edit Profile</Text>
      <View style={[styles.rectangleParent, styles.groupViewLayout]}>
        <View style={[styles.groupItem, styles.groupChildShadowBox]} />
        <Text style={styles.fullName}>Full Name</Text>
        <Text style={[styles.madhureshRanjan, styles.textTypo]}>
          Madhuresh Ranjan
        </Text>
        <View style={[styles.groupInner, styles.groupChildShadowBox]} />
        <Text style={styles.fullName}>Full Name</Text>
        <Text style={[styles.madhureshRanjan, styles.textTypo]}>
          Madhuresh Ranjan
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
        <Text style={styles.fullName}>Full Name</Text>
        <Text style={[styles.madhureshRanjan, styles.textTypo]}>
          Madhuresh Ranjan
        </Text>
        <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
        <Text style={styles.fullName}>{`Email `}</Text>
        <Text style={[styles.madhuresh9134gmailcom, styles.textTypo]}>
          madhuresh9134@gmail.com
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
        <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
        <Text style={styles.fullName}>Full Name</Text>
        <Text style={[styles.madhureshRanjan, styles.textTypo]}>
          Madhuresh Ranjan
        </Text>
        <View style={[styles.groupChild3, styles.groupChildShadowBox]} />
        <Text style={styles.fullName}>Phone no.</Text>
        <Text style={[styles.text, styles.textTypo]}>913440414451</Text>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.groupChild4, styles.groupChildShadowBox]} />
        <Text style={styles.fullName}>Full Name</Text>
        <Text style={[styles.madhureshRanjan, styles.textTypo]}>
          Madhuresh Ranjan
        </Text>
        <View style={[styles.groupChild5, styles.groupChildShadowBox]} />
        <Text style={styles.fullName}>Sex</Text>
        <Text style={[styles.male, styles.maleTypo]}>Male</Text>
        <Text style={[styles.female, styles.maleTypo]}>Female</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupChild6Layout]}>
        <View style={[styles.groupChild6, styles.groupChild6Layout]} />
        <Text style={styles.clearTrash}>Clear Trash</Text>
      </View>
      <Image
        style={styles.editProfileChild}
        resizeMode="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Image
        style={[styles.editProfileItem, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildBg: {
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
  },
  groupViewLayout: {
    height: 73,
    width: 354,
    position: "absolute",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
  },
  textTypo: {
    height: 18,
    textAlign: "center",
    fontSize: FontSize.size_base,
    top: 37,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.black,
    position: "absolute",
  },
  maleTypo: {
    width: 92,
    height: 18,
    textAlign: "center",
    fontSize: FontSize.size_base,
    top: 37,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.black,
    position: "absolute",
  },
  groupChild6Layout: {
    height: 49,
    width: 190,
    position: "absolute",
  },
  ellipseIconLayout: {
    width: 14,
    top: 632,
    height: 14,
    position: "absolute",
  },
  groupChild: {
    top: -11,
    left: -15,
    width: 60,
    height: 60,
    position: "absolute",
  },
  backIcon: {
    top: 4,
    left: 5,
    width: 20,
    height: 20,
    position: "absolute",
  },
  ellipseParent: {
    left: 0,
    top: 0,
    height: 30,
    width: 30,
    position: "absolute",
  },
  editProfileInner: {
    top: 32,
    left: 24,
    height: 30,
    width: 30,
    position: "absolute",
  },
  editProfile1: {
    top: 36,
    left: 136,
    fontSize: FontSize.size_3xl,
    width: 117,
    height: 14,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  groupItem: {
    height: 73,
    width: 354,
    position: "absolute",
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
  },
  fullName: {
    top: 11,
    left: 36,
    fontSize: FontSize.size_sm,
    color: Color.gray_300,
    width: 118,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    height: 20,
    position: "absolute",
  },
  madhureshRanjan: {
    width: 159,
    left: 27,
  },
  groupInner: {
    height: 73,
    width: 354,
    position: "absolute",
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
  },
  rectangleParent: {
    top: 269,
    left: 18,
    width: 354,
  },
  rectangleView: {
    height: 73,
    width: 354,
    position: "absolute",
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
  },
  groupChild1: {
    height: 73,
    width: 354,
    position: "absolute",
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
  },
  madhuresh9134gmailcom: {
    width: 235,
    left: 27,
  },
  rectangleGroup: {
    top: 377,
    left: 18,
    width: 354,
  },
  groupChild2: {
    height: 73,
    width: 354,
    position: "absolute",
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
  },
  groupChild3: {
    height: 73,
    width: 354,
    position: "absolute",
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
  },
  text: {
    left: 29,
    width: 129,
  },
  rectangleContainer: {
    top: 485,
    left: 18,
    width: 354,
  },
  groupChild4: {
    height: 73,
    width: 354,
    position: "absolute",
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
  },
  groupChild5: {
    height: 73,
    width: 354,
    position: "absolute",
    backgroundColor: Color.white,
    borderRadius: Border.br_xl,
  },
  male: {
    left: 27,
  },
  female: {
    left: 198,
  },
  groupView: {
    top: 593,
    left: 18,
    width: 354,
  },
  groupChild6: {
    borderRadius: Border.br_5xl_5,
    backgroundColor: Color.royalblue,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
  },
  clearTrash: {
    top: 14,
    left: 48,
    fontSize: FontSize.size_lg,
    color: Color.white,
    width: 107,
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    height: 20,
    position: "absolute",
  },
  rectangleParent1: {
    top: 764,
    left: 100,
  },
  editProfileChild: {
    top: 72,
    left: 105,
    width: 180,
    height: 180,
    position: "absolute",
  },
  editProfileItem: {
    left: 54,
  },
  ellipseIcon: {
    left: 216,
  },
  editProfile: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default EditProfile;
