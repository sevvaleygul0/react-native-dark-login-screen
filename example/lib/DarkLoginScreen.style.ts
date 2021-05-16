import {
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  isAndroid,
  isIPhoneNotchFamily,
} from '@freakycoder/react-native-helpers';
const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('window');

interface Style {
  mainContainer: ViewStyle;
  headerContainer: ViewStyle;
  titleTextStyle: TextStyle;
  descriptionTextStyle: TextStyle;
  textInputContainer: ViewStyle;
  textInputStyle: TextStyle;
  forgotPasswordTextStyle: TextStyle;
  forgotButtonStyle: ViewStyle;
  signInButtonStyle: ViewStyle;
  signInButtonTextStyle: TextStyle;
  logoImageStyle: ImageStyle;
  googleButtonStyle: ViewStyle;
  googleButtonTextStyle: TextStyle;
  facebookButtonStyle: ViewStyle;
  facebookButtonTextStyle: TextStyle;
  signUpButtonContainer: ViewStyle;
  signUpButtonStyle: ViewStyle;
  signUpTextStyle: TextStyle;
  signUpButtonTextStyle: TextStyle;
  appleButtonStyle: ViewStyle;
  appleButtonTextStyle: TextStyle;
}

const calculateMarginTop = (numberOfButton) => {
  if (numberOfButton === 1) return ScreenHeight * 0.3;
  else if (numberOfButton === 2) return ScreenHeight * 0.2;
  else if (numberOfButton === 3)
    return isIPhoneNotchFamily()
      ? ScreenHeight * 0.17
      : isAndroid
      ? ScreenHeight * 0.15
      : ScreenHeight * 0.08;
};

export const _bottomButtonContainer = (numberOfButton: number): ViewStyle => ({
  marginTop: calculateMarginTop(numberOfButton),
});

export default StyleSheet.create<Style>({
  mainContainer: {
    backgroundColor: '#181A1F',
    alignItems: 'center',
    flex: 1,
  },
  headerContainer: {
    height: ScreenHeight * 0.27,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTextStyle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
  },
  descriptionTextStyle: {
    fontSize: 15,
    color: '#696A6F',
  },
  textInputContainer: {
    width: ScreenWidth * 0.85,
  },
  textInputStyle: {
    height: isIPhoneNotchFamily() ? 60 : 50,
    marginBottom: 8,
    fontSize: 16,
    paddingLeft: 32,
    backgroundColor: '#262A34',
    color: '#fff',
    borderRadius: isIPhoneNotchFamily() ? 20 : 16,
  },
  forgotPasswordTextStyle: {
    color: '#6C6D72',
  },
  forgotButtonStyle: {
    height: 30,
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  signInButtonStyle: {
    backgroundColor: '#5467FF',
    width: ScreenWidth * 0.85,
    height: isIPhoneNotchFamily() ? 60 : 50,
    borderRadius: isIPhoneNotchFamily() ? 20 : 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonTextStyle: {
    color: '#fff',
    fontWeight: '600',
  },
  logoImageStyle: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  googleButtonStyle: {
    backgroundColor: '#FFFFFF',
    width: ScreenWidth * 0.85,
    height: isIPhoneNotchFamily() ? 60 : 50,
    marginTop: 8,
    borderRadius: isIPhoneNotchFamily() ? 20 : 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  googleButtonTextStyle: {
    color: '#181A1F',
    fontWeight: '600',
  },
  facebookButtonStyle: {
    backgroundColor: '#3A579B',
    width: ScreenWidth * 0.85,
    height: isIPhoneNotchFamily() ? 60 : 50,
    marginTop: 8,
    borderRadius: isIPhoneNotchFamily() ? 20 : 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  facebookButtonTextStyle: {
    color: '#FFF',
    fontWeight: '600',
  },
  signUpButtonContainer: {
    marginTop: 8,
    width: ScreenWidth * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  signUpButtonStyle: {
    height: 40,
    justifyContent: 'center',
    marginLeft: 8,
  },
  signUpTextStyle: {
    fontSize: 14,
    color: '#fff',
  },
  signUpButtonTextStyle: {
    fontSize: 14,
    color: '#4251BC',
  },
  appleButtonStyle: {
    backgroundColor: '#FFFFFF',
    width: ScreenWidth * 0.85,
    height: isIPhoneNotchFamily() ? 60 : 50,
    marginTop: 8,
    borderRadius: isIPhoneNotchFamily() ? 20 : 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  appleButtonTextStyle: {
    color: '#181A1F',
    fontWeight: '600',
  },
});
