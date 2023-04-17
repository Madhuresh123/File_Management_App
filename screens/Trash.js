import * as React from "react";
import { Text, StyleSheet, Pressable, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Trash = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.trash}>
      <Text style={[styles.trash1, styles.trashTypo]}>Trash</Text>
      <Pressable
        style={styles.trashInner}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.groupChild, styles.trashItemLayout]}
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
      <View style={styles.trashChild} />
      <Text style={[styles.trash2, styles.gbPosition]}>Trash</Text>
      <Text style={[styles.gb, styles.gbPosition]}>12 GB</Text>
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text style={[styles.clearTrash, styles.textClr]}>Clear Trash</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupViewLayout]}>
        <View style={[styles.groupInner, styles.groupViewLayout]} />
        <Image
          style={[styles.menuVerticalIcon, styles.dancevideoPosition]}
          resizeMode="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Text style={[styles.dancevideo, styles.dancevideoPosition]}>
          dance.video
        </Text>
        <Text style={styles.gb1000pm}>10 GB - 10:00pm, 10 Oct</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
        <View style={[styles.rectangleView, styles.groupViewLayout]} />
        <Image
          style={[styles.menuVerticalIcon, styles.dancevideoPosition]}
          resizeMode="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Text style={[styles.dancevideo, styles.dancevideoPosition]}>
          dance.video
        </Text>
        <Text style={styles.gb1000pm}>10 GB - 10:00pm, 10 Oct</Text>
      </View>
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.groupChild1, styles.groupViewLayout]} />
        <Image
          style={[styles.menuVerticalIcon, styles.dancevideoPosition]}
          resizeMode="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Text style={[styles.dancevideo, styles.dancevideoPosition]}>
          dance.video
        </Text>
        <Text style={styles.gb1000pm}>10 GB - 10:00pm, 10 Oct</Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupViewLayout]}>
        <View style={[styles.groupChild2, styles.groupViewLayout]} />
        <Image
          style={[styles.menuVerticalIcon, styles.dancevideoPosition]}
          resizeMode="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Text style={[styles.dancevideo, styles.dancevideoPosition]}>
          dance.video
        </Text>
        <Text style={styles.gb1000pm}>10 GB - 10:00pm, 10 Oct</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.groupViewLayout]}>
        <View style={[styles.groupChild3, styles.groupViewLayout]} />
        <Image
          style={[styles.menuVerticalIcon, styles.dancevideoPosition]}
          resizeMode="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Text style={[styles.dancevideo, styles.dancevideoPosition]}>
          dance.video
        </Text>
        <Text style={styles.gb1000pm}>10 GB - 10:00pm, 10 Oct</Text>
      </View>
      <View style={[styles.ellipseGroup, styles.ellipseParentLayout]}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <Image
          style={styles.documentIcon}
          resizeMode="cover"
          source={require("../assets/document.png")}
        />
      </View>
      <View style={[styles.ellipseContainer, styles.ellipseParentLayout]}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-91.png")}
        />
        <Image
          style={styles.documentIcon}
          resizeMode="cover"
          source={require("../assets/document.png")}
        />
      </View>
      <View style={[styles.ellipseParent1, styles.ellipseParentLayout]}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-92.png")}
        />
        <Image
          style={styles.documentIcon}
          resizeMode="cover"
          source={require("../assets/document.png")}
        />
      </View>
      <View style={[styles.ellipseParent2, styles.ellipseParentLayout]}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-93.png")}
        />
        <Image
          style={styles.documentIcon}
          resizeMode="cover"
          source={require("../assets/document.png")}
        />
      </View>
      <View style={[styles.ellipseParent3, styles.ellipseParentLayout]}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-94.png")}
        />
        <Image
          style={styles.documentIcon}
          resizeMode="cover"
          source={require("../assets/document.png")}
        />
      </View>
      <Image
        style={[styles.trashItem, styles.trashItemLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.trashIcon, styles.ellipseParentLayout]}
        resizeMode="cover"
        source={require("../assets/trash.png")}
      />
      <Image
        style={styles.trashChild1}
        resizeMode="cover"
        source={require("../assets/ellipse-95.png")}
      />
      <Text style={[styles.text, styles.textClr]}>40%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  trashTypo: {
    height: 14,
    width: 65,
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
  },
  trashItemLayout: {
    height: 60,
    width: 60,
    position: "absolute",
  },
  gbPosition: {
    left: 115,
    color: Color.black,
    position: "absolute",
  },
  groupItemLayout: {
    height: 49,
    width: 190,
    position: "absolute",
  },
  textClr: {
    color: Color.white,
    position: "absolute",
  },
  groupViewLayout: {
    height: 73,
    width: 354,
    position: "absolute",
  },
  dancevideoPosition: {
    top: 11,
    position: "absolute",
  },
  ellipseParentLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  trash1: {
    top: 27,
    left: 162,
    color: Color.black,
    position: "absolute",
  },
  groupChild: {
    top: -11,
    left: -15,
  },
  backIcon: {
    left: 5,
    height: 20,
    width: 20,
    top: 4,
    position: "absolute",
  },
  ellipseParent: {
    left: 0,
    top: 0,
    height: 30,
    width: 30,
    position: "absolute",
  },
  trashInner: {
    top: 30,
    left: 27,
    height: 30,
    width: 30,
    position: "absolute",
  },
  trashChild: {
    top: 101,
    height: 150,
    width: 354,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    left: 18,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  trash2: {
    top: 120,
    height: 14,
    width: 65,
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_3xl,
  },
  gb: {
    top: 151,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    width: 51,
    height: 17,
    textAlign: "center",
  },
  groupItem: {
    borderRadius: Border.br_5xl_5,
    backgroundColor: Color.royalblue,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
  },
  clearTrash: {
    top: 14,
    left: 48,
    width: 107,
    fontSize: FontSize.size_lg,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  rectangleParent: {
    top: 186,
    left: 100,
  },
  groupInner: {
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    backgroundColor: Color.white,
    height: 73,
    borderRadius: Border.br_xl,
  },
  menuVerticalIcon: {
    left: 309,
    height: 50,
    width: 30,
    top: 11,
  },
  dancevideo: {
    left: 79,
    width: 118,
    fontSize: FontSize.size_lg,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    color: Color.black,
  },
  gb1000pm: {
    top: 43,
    left: 78,
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.gray_300,
    width: 142,
    height: 18,
    textAlign: "center",
    position: "absolute",
  },
  rectangleGroup: {
    top: 292,
    left: 18,
    height: 73,
  },
  rectangleView: {
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    backgroundColor: Color.white,
    height: 73,
    borderRadius: Border.br_xl,
  },
  rectangleContainer: {
    top: 396,
    left: 18,
    height: 73,
  },
  groupChild1: {
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    backgroundColor: Color.white,
    height: 73,
    borderRadius: Border.br_xl,
  },
  groupView: {
    top: 500,
    left: 18,
    height: 73,
  },
  groupChild2: {
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    backgroundColor: Color.white,
    height: 73,
    borderRadius: Border.br_xl,
  },
  rectangleParent1: {
    top: 604,
    left: 18,
    height: 73,
  },
  groupChild3: {
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    backgroundColor: Color.white,
    height: 73,
    borderRadius: Border.br_xl,
  },
  rectangleParent2: {
    top: 708,
    left: 18,
    height: 73,
  },
  ellipseIcon: {
    top: -13,
    left: -14,
    width: 70,
    height: 70,
    position: "absolute",
  },
  documentIcon: {
    left: 10,
    width: 20,
    top: 4,
    height: 30,
    position: "absolute",
  },
  ellipseGroup: {
    top: 304,
    left: 32,
    width: 40,
  },
  ellipseContainer: {
    top: 412,
    left: 32,
    width: 40,
  },
  ellipseParent1: {
    top: 521,
    left: 32,
    width: 40,
  },
  ellipseParent2: {
    top: 621,
    left: 32,
    width: 40,
  },
  ellipseParent3: {
    top: 725,
    left: 32,
    width: 40,
  },
  trashItem: {
    top: 116,
    left: 37,
  },
  trashIcon: {
    top: 126,
    left: 47,
  },
  trashChild1: {
    top: 111,
    left: 274,
    width: 66,
    height: 64,
    position: "absolute",
  },
  text: {
    top: 132,
    left: 285,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 46,
    height: 21,
    textAlign: "center",
  },
  trash: {
    backgroundColor: Color.lavender,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default Trash;
