import * as React from "react";
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SignPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signPage}>
      <Pressable style={[styles.rectangleParent, styles.groupChildLayout]}>
        <Pressable
          style={styles.groupChildLayout}
          barStyle="light-content"
          onPress={() => navigation.navigate("Dashboard")}
        />
        <Text style={styles.continueAsGuest}>Continue as guest</Text>
      </Pressable>
      <Image
        style={[styles.signPageChild, styles.signLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.signPageItem, styles.signLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.manageYourFiles, styles.weHaveCreatedClr]}>
        Manage your files the best way
      </Text>
      <Text style={[styles.weHaveCreated, styles.weHaveCreatedClr]}>
        We have created prefect place to store your all documents.
      </Text>
      <Image
        style={[styles.googleIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/google.png")}
      />
      <Image
        style={[styles.appleLogoIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/apple-logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 49,
    width: 324,
    position: "absolute",
  },
  signLayout: {
    height: 80,
    width: 80,
    top: 678,
    position: "absolute",
  },
  weHaveCreatedClr: {
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
    top: 698,
    position: "absolute",
  },
  continueAsGuest: {
    top: 14,
    left: 74,
    color: Color.black,
    width: 175,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  rectangleParent: {
    top: 609,
    left: 33,
  },
  signPageChild: {
    left: 88,
  },
  signPageItem: {
    left: 231,
  },
  manageYourFiles: {
    top: 275,
    left: 36,
    fontSize: FontSize.size_11xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtrabold,
    width: 205,
    height: 112,
  },
  weHaveCreated: {
    top: 416,
    left: 34,
    width: 281,
    height: 60,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    color: Color.white,
  },
  googleIcon: {
    left: 251,
  },
  appleLogoIcon: {
    left: 108,
  },
  signPage: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.royalblue,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default SignPage;
