import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Documents = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.documents}>
      <Text style={styles.documents1}>Documents</Text>
      <View style={[styles.rectangleParent, styles.adobeLayout]}>
        <View style={styles.childShadowBox} />
        <Text style={[styles.am15April, styles.am15AprilTypo]}>
          10 a.m, 15 April
        </Text>
        <Text style={[styles.figma, styles.figmaTypo]}>Figma</Text>
        <Text style={[styles.gb, styles.gbLayout]}>2 GB</Text>
      </View>
      <Text style={[styles.total12GbContainer, styles.ellipseParentPosition]}>
        <Text style={styles.total}>Total:</Text>
        <Text style={styles.gb1Typo}> 12 GB</Text>
      </Text>
      <View style={[styles.ellipseParent, styles.ellipseParentPosition]}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={styles.documentIcon}
          resizeMode="cover"
          source={require("../assets/document.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <View style={[styles.adobeXdParent, styles.adobeParentLayout]}>
          <View style={[styles.adobeXd, styles.adobeLayout]}>
            <View style={styles.childShadowBox} />
            <Text style={[styles.am15April, styles.am15AprilTypo]}>
              10 a.m, 15 April
            </Text>
            <Text style={[styles.adobeXd1, styles.figmaTypo]}>Adobe XD</Text>
            <Text style={[styles.gb2, styles.gbLayout]}>2 GB</Text>
          </View>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-91.png")}
          />
        </View>
        <View style={[styles.adobeXdGroup, styles.adobePosition]}>
          <View style={[styles.adobeXd, styles.adobeLayout]}>
            <View style={styles.childShadowBox} />
            <Text style={[styles.am15April, styles.am15AprilTypo]}>
              10 a.m, 15 April
            </Text>
            <Text style={[styles.adobeXd1, styles.figmaTypo]}>HTML</Text>
            <Text style={[styles.gb2, styles.gbLayout]}>2 GB</Text>
          </View>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-92.png")}
          />
        </View>
        <View style={[styles.adobeXdContainer, styles.adobePosition]}>
          <View style={[styles.adobeXdParent, styles.adobeParentLayout]}>
            <View style={styles.childShadowBox} />
            <Text style={[styles.am15April, styles.am15AprilTypo]}>
              10 a.m, 15 April
            </Text>
            <Text style={[styles.adobeXd1, styles.figmaTypo]}>CSS</Text>
            <Text style={[styles.gb2, styles.gbLayout]}>2 GB</Text>
          </View>
          <View style={[styles.adobeXd4, styles.adobeLayout]}>
            <View style={styles.childShadowBox} />
            <Text style={[styles.am15April, styles.am15AprilTypo]}>
              10 a.m, 15 April
            </Text>
            <Text style={[styles.adobeXd1, styles.figmaTypo]}>Wordpress</Text>
            <Text style={[styles.gb2, styles.gbLayout]}>2 GB</Text>
          </View>
          <Image
            style={[styles.groupChild1, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-93.png")}
          />
          <Image
            style={[styles.groupChild2, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-94.png")}
          />
        </View>
        <Image
          style={[styles.documentIcon1, styles.documentIconPosition1]}
          resizeMode="cover"
          source={require("../assets/document.png")}
        />
        <Image
          style={[styles.documentIcon2, styles.documentIconPosition]}
          resizeMode="cover"
          source={require("../assets/document.png")}
        />
        <Image
          style={[styles.documentIcon3, styles.documentIconPosition1]}
          resizeMode="cover"
          source={require("../assets/document.png")}
        />
        <Image
          style={[styles.documentIcon4, styles.documentIconPosition]}
          resizeMode="cover"
          source={require("../assets/document.png")}
        />
      </View>
      <View style={[styles.groupContainer, styles.groupParentPosition]}>
        <View style={[styles.adobeXdParent, styles.adobeParentLayout]}>
          <View style={[styles.adobeXd, styles.adobeLayout]}>
            <View style={styles.childShadowBox} />
            <Text style={[styles.am15April, styles.am15AprilTypo]}>
              10 a.m, 15 April
            </Text>
            <Text style={[styles.adobeXd1, styles.figmaTypo]}>JS</Text>
            <Text style={[styles.gb2, styles.gbLayout]}>2 GB</Text>
          </View>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-9.png")}
          />
        </View>
        <View style={[styles.adobeXdGroup, styles.adobePosition]}>
          <View style={[styles.adobeXd, styles.adobeLayout]}>
            <View style={styles.childShadowBox} />
            <Text style={[styles.am15April, styles.am15AprilTypo]}>
              10 a.m, 15 April
            </Text>
            <Text style={[styles.adobeXd1, styles.figmaTypo]}>PHP</Text>
            <Text style={[styles.gb2, styles.gbLayout]}>2 GB</Text>
          </View>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-91.png")}
          />
        </View>
        <View style={[styles.adobeXdParent2, styles.adobePosition]}>
          <View style={[styles.adobeXd, styles.adobeLayout]}>
            <View style={styles.childShadowBox} />
            <Text style={[styles.am15April, styles.am15AprilTypo]}>
              10 a.m, 15 April
            </Text>
            <Text style={[styles.adobeXd1, styles.figmaTypo]}>pdf</Text>
            <Text style={[styles.gb2, styles.gbLayout]}>2 GB</Text>
          </View>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-92.png")}
          />
        </View>
        <Image
          style={[styles.documentIcon1, styles.documentIconPosition1]}
          resizeMode="cover"
          source={require("../assets/document.png")}
        />
        <Image
          style={[styles.documentIcon2, styles.documentIconPosition]}
          resizeMode="cover"
          source={require("../assets/document.png")}
        />
        <Image
          style={[styles.documentIcon3, styles.documentIconPosition1]}
          resizeMode="cover"
          source={require("../assets/document.png")}
        />
      </View>
      <Image
        style={[styles.menuVerticalIcon, styles.menuIconLayout]}
        resizeMode="cover"
        source={require("../assets/menu-vertical.png")}
      />
      <Image
        style={[styles.menuVerticalIcon1, styles.menuIconLayout]}
        resizeMode="cover"
        source={require("../assets/menu-vertical.png")}
      />
      <Image
        style={[styles.menuVerticalIcon2, styles.menuIconLayout]}
        resizeMode="cover"
        source={require("../assets/menu-vertical.png")}
      />
      <Image
        style={[styles.menuVerticalIcon3, styles.menuIconLayout]}
        resizeMode="cover"
        source={require("../assets/menu-vertical.png")}
      />
      <Image
        style={[styles.menuVerticalIcon4, styles.menuIconPosition]}
        resizeMode="cover"
        source={require("../assets/menu-vertical.png")}
      />
      <Image
        style={[styles.menuVerticalIcon5, styles.menuIconPosition]}
        resizeMode="cover"
        source={require("../assets/menu-vertical.png")}
      />
      <Image
        style={[styles.menuVerticalIcon6, styles.menuIconLayout]}
        resizeMode="cover"
        source={require("../assets/menu-vertical.png")}
      />
      <Image
        style={[styles.menuVerticalIcon7, styles.menuIconLayout]}
        resizeMode="cover"
        source={require("../assets/menu-vertical.png")}
      />
      <Pressable
        style={[styles.documentsInner, styles.ellipseGroupLayout]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <View style={[styles.ellipseGroup, styles.ellipseGroupLayout]}>
          <Image
            style={styles.groupChild6}
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
    </View>
  );
};

const styles = StyleSheet.create({
  adobeLayout: {
    height: 141,
    width: 156,
  },
  am15AprilTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  figmaTypo: {
    height: 20,
    width: 107,
    fontSize: FontSize.size_lg,
    top: 65,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  gbLayout: {
    height: 15,
    width: 43,
    fontSize: FontSize.size_xs,
    top: 44,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  ellipseParentPosition: {
    left: 38,
    position: "absolute",
  },
  groupLayout: {
    height: 70,
    width: 70,
    position: "absolute",
  },
  groupParentPosition: {
    left: 28,
    position: "absolute",
  },
  adobeParentLayout: {
    left: 187,
    height: 141,
    width: 156,
  },
  groupPosition: {
    left: -4,
    height: 70,
    width: 70,
    position: "absolute",
  },
  adobePosition: {
    top: 177,
    position: "absolute",
  },
  documentIconPosition1: {
    left: 207,
    height: 30,
    width: 20,
    position: "absolute",
  },
  documentIconPosition: {
    left: 20,
    height: 30,
    width: 20,
    position: "absolute",
  },
  menuIconLayout: {
    height: 50,
    width: 30,
    position: "absolute",
  },
  menuIconPosition: {
    top: 632,
    height: 50,
    width: 30,
    position: "absolute",
  },
  ellipseGroupLayout: {
    width: 30,
    height: 30,
    position: "absolute",
  },
  documents1: {
    top: 30,
    fontSize: FontSize.size_3xl,
    width: 130,
    height: 14,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    left: 140,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    height: 141,
    width: 156,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  am15April: {
    top: 105,
    left: 22,
    width: 118,
    height: 18,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  figma: {
    left: 24,
  },
  gb: {
    left: 98,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  rectangleParent: {
    left: 28,
    position: "absolute",
    top: 104,
  },
  total: {
    fontFamily: FontFamily.interRegular,
  },
  gb1Typo: {
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  total12GbContainer: {
    top: 74,
    width: 103,
    height: 17,
    textAlign: "center",
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  groupItem: {
    top: -13,
    left: -14,
  },
  documentIcon: {
    left: 10,
    height: 30,
    width: 20,
    top: 4,
    position: "absolute",
  },
  ellipseParent: {
    top: 114,
    width: 40,
    height: 40,
  },
  adobeXd1: {
    left: 27,
  },
  gb2: {
    left: 97,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  adobeXd: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    top: -3,
  },
  adobeXdParent: {
    top: 0,
    position: "absolute",
  },
  adobeXdGroup: {
    left: 0,
    height: 141,
    width: 156,
  },
  adobeXd4: {
    top: 174,
    left: 0,
    position: "absolute",
  },
  groupChild1: {
    left: 183,
    top: -3,
  },
  groupChild2: {
    top: 171,
  },
  adobeXdContainer: {
    height: 315,
    width: 343,
    left: 0,
  },
  documentIcon1: {
    top: 14,
  },
  documentIcon2: {
    top: 192,
  },
  documentIcon3: {
    top: 191,
  },
  documentIcon4: {
    top: 365,
  },
  groupParent: {
    height: 492,
    width: 343,
    top: 104,
    left: 28,
  },
  adobeXdParent2: {
    left: 187,
    height: 141,
    width: 156,
  },
  groupContainer: {
    height: 318,
    top: 455,
    width: 343,
  },
  menuVerticalIcon: {
    top: 102,
    height: 50,
    left: 140,
  },
  menuVerticalIcon1: {
    top: 275,
    left: 140,
  },
  menuVerticalIcon2: {
    left: 138,
    top: 455,
  },
  menuVerticalIcon3: {
    top: 450,
    left: 327,
  },
  menuVerticalIcon4: {
    left: 327,
  },
  menuVerticalIcon5: {
    left: 140,
  },
  menuVerticalIcon6: {
    left: 327,
    top: 102,
    height: 50,
  },
  menuVerticalIcon7: {
    top: 276,
    left: 327,
  },
  groupChild6: {
    top: -11,
    left: -15,
    width: 60,
    height: 60,
    position: "absolute",
  },
  backIcon: {
    left: 5,
    width: 20,
    top: 4,
    height: 20,
    position: "absolute",
  },
  ellipseGroup: {
    left: 0,
    top: 0,
  },
  documentsInner: {
    top: 29,
    left: 33,
  },
  documents: {
    backgroundColor: Color.lavender,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default Documents;
