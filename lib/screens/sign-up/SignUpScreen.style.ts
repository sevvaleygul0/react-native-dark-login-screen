import {
  isAndroid,
  isIPhoneNotchFamily,
} from "@freakycoder/react-native-helpers";
import { ViewStyle, TextStyle, StyleSheet, Dimensions } from "react-native";
const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");

interface Style {
  mainContainer: ViewStyle;
  headerContainer: ViewStyle;
  titleTextStyle: TextStyle;
  descriptionTextStyle: TextStyle;
  textInputContainer: ViewStyle;
  textInputStyle: TextStyle;
  signUpButtonContainer: ViewStyle;
  signUpButtonStyle: ViewStyle;
  signUpButtonTextStyle: TextStyle;
  buttonContainer: ViewStyle;
  signInQuestionTextStyle: TextStyle;
  signInButtonStyle: ViewStyle;
  signInButtonTextStyle: TextStyle;
  signInButtonContainer: ViewStyle;
}

export default StyleSheet.create<Style>({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#181A1F",
  },
  headerContainer: {
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  titleTextStyle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
  },
  descriptionTextStyle: {
    fontSize: 15,
    color: "#696A6F",
  },
  textInputContainer: {
    marginTop: 32,
    width: ScreenWidth * 0.85,
  },
  textInputStyle: {
    height: isIPhoneNotchFamily() ? 60 : 55,
    marginBottom: 8,
    fontSize: 16,
    paddingLeft: 32,
    backgroundColor: "#262A34",
    color: "#fff",
    borderRadius: isIPhoneNotchFamily() ? 20 : 16,
  },
  signUpButtonContainer: {
    marginTop: isIPhoneNotchFamily()
      ? ScreenHeight * 0.34
      : isAndroid
      ? ScreenHeight * 0.32
      : ScreenHeight * 0.27,
    width: ScreenWidth * 0.9,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  signUpButtonStyle: {
    backgroundColor: "#5467FF",
    width: ScreenWidth * 0.85,
    height: isIPhoneNotchFamily() ? 60 : 55,
    borderRadius: isIPhoneNotchFamily() ? 20 : 16,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButtonTextStyle: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 70,
    height: 100,
    alignItems: "center",
    justifyContent: "space-around",
  },
  signInQuestionTextStyle: {
    fontSize: 14,
    color: "#fff",
  },
  signInButtonStyle: {
    height: 40,
    justifyContent: "center",
    marginLeft: 8,
  },
  signInButtonTextStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#519bf4",
  },
  signInButtonContainer: {
    marginTop: 8,
    width: ScreenWidth * 0.9,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
