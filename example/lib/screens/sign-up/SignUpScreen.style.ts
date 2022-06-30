import {
  getStatusBarHeight,
  isIPhoneNotchFamily,
} from "@freakycoder/react-native-helpers";
import { StyleSheet, Dimensions } from "react-native";
const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#181A1F",
  },
  headerContainer: {
    marginTop: getStatusBarHeight() ? 32 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  titleTextStyle: {
    fontSize: 24,
    color: "#fff",
  },
  descriptionTextStyle: {
    fontSize: 15,
    color: "#696A6F",
  },
  textInputContainer: {
    marginTop: 24,
    width: ScreenWidth * 0.9,
  },
  textInputStyle: {
    height: isIPhoneNotchFamily() ? 60 : 55,
    marginBottom: 8,
    fontSize: 16,
    paddingLeft: 20,
    backgroundColor: "#262A34",
    color: "#fff",
    borderRadius: isIPhoneNotchFamily() ? 20 : 16,
  },
  signUpButtonStyle: {
    width: ScreenWidth * 0.9,
    marginTop: 20,
    backgroundColor: "#5467FF",
    height: isIPhoneNotchFamily() ? 60 : 55,
    borderRadius: isIPhoneNotchFamily() ? 20 : 16,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButtonTextStyle: {
    fontSize: 14,
    color: "#fff",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 70,
    height: 100,
    alignItems: "center",
    justifyContent: "space-around",
  },
  bottomQuestionTextStyle: {
    fontSize: 14,
    color: "#fff",
  },
  bottomQuestionButton: {
    height: 40,
    justifyContent: "center",
    marginLeft: 8,
  },
  bottomQuestionButtonTextStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#519bf4",
  },
  bottomQuestionContainer: {
    width: ScreenWidth * 0.9,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: isIPhoneNotchFamily() ? getStatusBarHeight() : 8,
  },
});
