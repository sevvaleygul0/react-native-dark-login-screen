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
});
