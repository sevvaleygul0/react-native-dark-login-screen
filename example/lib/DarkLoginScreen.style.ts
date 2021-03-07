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
}

export default StyleSheet.create<Style>({
  mainContainer: {
    backgroundColor: '#181A1F',
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
  },
  descriptionTextStyle: {
    fontSize: 16,
    color: '#696A6F',
  },
  textInputContainer: {
    height: ScreenHeight * 0.2,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  usernameTextInputStyle: {
    width: ScreenWidth * 0.85,
    height: 75,
    fontSize: 16,
    paddingLeft: 32,
    backgroundColor: '#262A34',
    color: '#fff',
    borderRadius: 24,
  },
});
