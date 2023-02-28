import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Margin,
  FontSize,
  FontFamily,
  Border,
  Color,
  Padding,
} from "../GlobalStyles";

const AndroidLarge1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.androidLarge1, styles.kabanParentFlexBox]}>
      <View style={[styles.kabanParent, styles.kabanParentFlexBox]}>
        <Text style={[styles.kaban, styles.kabanFlexBox]}>
          <Text style={styles.kabanTxt}>
            <Text style={styles.ka}>Ka</Text>
            <Text style={styles.ban}>Ban</Text>
            <Text style={styles.text}>.</Text>
          </Text>
        </Text>
        <Image
          style={[styles.undrawEngineeringTeamA7n2Icon, styles.mt37]}
          resizeMode="cover"
          source={require("../assets/undraw-engineering-team-a7n2-1-1.png")}
        />
        <View style={styles.mt37}>
          <Text
            style={[
              styles.tutajWleciNasze,
              styles.signUpWithTypo,
              styles.kabanFlexBox,
            ]}
          >
            Tutaj wleci nasze motto
          </Text>
          <Text
            style={[styles.letsMakeManaging, styles.mt1, styles.text1Layout]}
          >
            Lets make managing your projects easier
          </Text>
        </View>
        <View style={styles.mt37}>
          <Pressable onPress={() => navigation.navigate("AndroidLarge3")}>
            <Text style={[styles.text1Typo, styles.text1Layout]}>
              <Text style={styles.kabanTxt}>
                <Text style={styles.alreadyHaveAnAccount}>
                  <Text style={styles.alreadyHaveAn}>
                    Already have an account?
                  </Text>
                  <Text>{` `}</Text>
                </Text>
                <Text style={styles.logIn}>
                  <Text style={styles.logIn1}>Log In.</Text>
                </Text>
              </Text>
            </Text>
          </Pressable>
          <Pressable
            style={[styles.rectangleParent, styles.mt33]}
            onPress={() => navigation.navigate("AndroidLarge2")}
          >
            <View style={[styles.groupChild, styles.groupLayout]} />
            <Text
              style={[
                styles.signUpWith,
                styles.signUpWithPosition,
                styles.text1Typo,
                styles.signUpWithTypo,
              ]}
            >
              Sign up with email.
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.mt40]}>
        <View style={styles.signUpWithPosition}>
          <Image
            style={styles.groupLayout}
            resizeMode="cover"
            source={require("../assets/rectangle-1.png")}
          />
          <Text style={styles.signUpWith1}>Sign up with Google.</Text>
        </View>
        <Image
          style={styles.logosgoogleIcon}
          resizeMode="cover"
          source={require("../assets/logosgoogleicon.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt1: {
    marginTop: 1,
  },
  mt33: {
    marginTop: 33,
  },
  mt37: {
    marginTop: Margin.m_lg,
  },
  mt40: {
    marginTop: 40,
  },
  kabanParentFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  kabanFlexBox: {
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    alignItems: "center",
  },
  signUpWithTypo: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
  },
  text1Layout: {
    height: 47,
    width: 248,
  },
  groupLayout: {
    borderRadius: Border.br_lg,
    left: 0,
    top: 0,
    position: "absolute",
    height: 46,
    width: 248,
  },
  signUpWithPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 46,
    width: 248,
  },
  text1Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
  },
  ka: {
    color: Color.darkslategray,
  },
  ban: {
    color: Color.crimson_100,
  },
  text: {
    color: Color.lightslategray_200,
  },
  kabanTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  kaban: {
    fontWeight: "800",
    fontFamily: FontFamily.latoExtrabold,
    width: 89,
  },
  undrawEngineeringTeamA7n2Icon: {
    width: 219,
    height: 132,
    overflow: "hidden",
  },
  tutajWleciNasze: {
    width: 255,
    height: 49,
    color: Color.darkslategray,
  },
  letsMakeManaging: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    width: 248,
    color: Color.black,
    fontFamily: FontFamily.latoRegular,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  alreadyHaveAn: {
    color: Color.black,
  },
  alreadyHaveAnAccount: {
    fontFamily: FontFamily.latoRegular,
  },
  logIn1: {
    fontWeight: "600",
    fontFamily: FontFamily.latoSemibold,
  },
  logIn: {
    textDecoration: "underline",
    color: Color.crimson_200,
  },
  groupChild: {
    backgroundColor: Color.darkslategray,
  },
  signUpWith: {
    color: "#edf2f4",
    justifyContent: "center",
  },
  rectangleParent: {
    height: 46,
    width: 248,
  },
  kabanParent: {
    justifyContent: "center",
  },
  signUpWith1: {
    left: 26,
    width: 215,
    top: 0,
    position: "absolute",
    height: 46,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    color: Color.darkslategray,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logosgoogleIcon: {
    top: 10,
    left: 20,
    width: 28,
    height: 28,
    position: "absolute",
    overflow: "hidden",
  },
  androidLarge1: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    paddingHorizontal: 49,
    paddingVertical: Padding.p_md,
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidLarge1;
