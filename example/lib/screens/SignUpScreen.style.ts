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
  textInputStyle: TextStyle;
  signUpButtonContainer: ViewStyle;
  signUpButtonStyle: ViewStyle;
  signUpButtonTextStyle: TextStyle;
  buttonContainer: ViewStyle;
}

export const _bottomButtonContainer = (height): ViewStyle => ({
  position: 'absolute',
  bottom: 80,
  height,
  alignItems: 'center',
  justifyContent: 'space-around',
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
    height: ScreenHeight * 0.3,
    justifyContent: 'space-around',
    width: ScreenWidth * 0.85,
  },
  textInputStyle: {
    height: 75,
    fontSize: 16,
    paddingLeft: 32,
    backgroundColor: '#262A34',
    color: '#fff',
    borderRadius: 24,
  },
  signUpButtonContainer: {
    position: 'absolute',
    bottom: 32,
    width: ScreenWidth * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  signUpButtonStyle: {
    backgroundColor: '#5467FF',
    width: ScreenWidth * 0.85,
    height: 75,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonTextStyle: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 80,
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
