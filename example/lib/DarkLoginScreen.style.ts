import {
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  isAndroid,
  isIPhoneNotchFamily,
} from "@freakycoder/react-native-helpers";
const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("window");

const calculateMarginTop = (numberOfButton) => {
  if (numberOfButton === 1) return ScreenHeight * 0.35;
  else if (numberOfButton === 2) return ScreenHeight * 0.25;
  else if (numberOfButton === 3)
    return isIPhoneNotchFamily()
      ? ScreenHeight * 0.22
      : isAndroid
      ? ScreenHeight * 0.2
      : ScreenHeight * 0.13;
  else if (numberOfButton === 4)
    return isIPhoneNotchFamily()
      ? ScreenHeight * 0.15
      : isAndroid
      ? ScreenHeight * 0.13
      : ScreenHeight * 0.08;
};

export const _bottomButtonContainer = (numberOfButton: number): ViewStyle => ({
  marginTop: calculateMarginTop(numberOfButton),
});

export default StyleSheet.create({
  keyboardAvoidingViewStyle: {
    flex: 1,
  },
  mainContainer: {
    backgroundColor: "#181A1F",
    alignItems: "center",
    flex: 1,
    paddingTop:40
  },
});
