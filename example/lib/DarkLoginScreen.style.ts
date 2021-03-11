import {
  ViewStyle,
  ImageStyle,
  TextStyle,
  StyleSheet,
  Dimensions,
} from 'react-native';
const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('window');

interface Style {
  mainContainer: ViewStyle;
  headerContainer: ViewStyle;
  titleTextStyle: TextStyle;
  descriptionTextStyle: TextStyle;
  textInputContainer: ViewStyle;
  usernameTextInputStyle: TextStyle;
  forgotPasswordTextStyle: TextStyle;
  forgotButtonStyle: ViewStyle;
  signInButtonStyle: ViewStyle;
  signInButtonTextStyle: TextStyle;
  logoImageStyle: ImageStyle;
  googleButtonStyle: ViewStyle;
  googleButtonTextStyle: TextStyle;
  facebookButtonStyle: ViewStyle;
  facebookButtonTextStyle: TextStyle;
}

export const _bottomButtonContainer = (height): ViewStyle => ({
  position: 'absolute',
  bottom: 32,
  height,
  alignItems: 'center',
  justifyContent: 'space-around',
  // borderColor: '#fff',
  // borderWidth: 1,
});

export default StyleSheet.create<Style>({
  mainContainer: {
    backgroundColor: '#181A1F',
    alignItems: 'center',
    flex: 1,
  },
  headerContainer: {
    height: ScreenHeight * 0.28,
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
    height: ScreenHeight * 0.25,
    justifyContent: 'space-around',
    width: ScreenWidth * 0.85,
  },
  usernameTextInputStyle: {
    height: 75,
    fontSize: 16,
    paddingLeft: 32,
    backgroundColor: '#262A34',
    color: '#fff',
    borderRadius: 24,
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
    height: 75,
    borderRadius: 24,
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
    height: 75,
    borderRadius: 24,
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
    height: 75,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  facebookButtonTextStyle: {
    color: '#FFF',
    fontWeight: '600',
  },
});
