import * as React from "react";
import {
  View,
  TextStyle,
  ViewStyle,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./DarkLoginScreen.style";
import SignUpScreen from "./screens/sign-up/SignUpScreen";
import SignInScreen from "./screens/sign-in/SignInScreen";

interface DarkLoginScreenProps {
  textInputStyle?: TextStyle;
  titleText?: string;
  titleTextStyle?: TextStyle;
  descriptionText?: string;
  descriptionTextStyle?: TextStyle;
  usernamePlaceholder?: string;
  passwordPlaceholder?: string;
  forgotPasswordText?: string;
  forgotPasswordTextStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  signInButtonText?: string;
  buttonTextStyle?: TextStyle;
  googleButtonStyle?: ViewStyle;
  googleButtonTextStyle?: TextStyle;
  googleButtonText?: string;
  facebookButtonStyle?: ViewStyle;
  facebookButtonTextStyle?: TextStyle;
  facebookButtonText?: string;
  enableGoogleLogin?: boolean;
  enableFacebookLogin?: boolean;
  accountQuestionText?: string;
  enableAppleLogin?: boolean;
  appleButtonStyle?: ViewStyle;
  appleButtonText?: string;
  appleButtonTextStyle?: TextStyle;
  signUpTitle?: string;
  signUpDescriptionText?: string;
  fullNamePlaceholderText?: string;
  placeholderTextColor?: string;
  emailPlaceholderText?: string;
  signUpButtonText?: string;
  bottomQuestionTextStyle?: TextStyle;
  bottomQuestionButton?: ViewStyle;
  signInQuestionText?: string;
  bottomQuestionButtonTextStyle?: TextStyle;
  handleSignIn?: () => void;
  usernameChangeText?: (username: string) => void;
  passwordChangeText?: (password: string) => void;
  handleSignInButton?: () => void;
  handleGoogleLogIn?: () => void;
  handleFacebookLogIn?: () => void;
  handleForgotPassword?: () => void;
  fullNameOnChange?: (fullName: string) => void;
  singUpPasswordChangeText?: (password: string) => void;
  emailOnChange?: (email: string) => void;
  handleSignUp?: () => void;
  handleSignUpButton?: () => void;
  handleAppleLogIn?: () => void;
  onSignupPress: () => void;
}

const DarkLoginScreen = (props: DarkLoginScreenProps) => {
  const [newAccountScreen, setNewAccountScreen] = React.useState<boolean>(
    false,
  );

  return (
    <View style={styles.mainContainer}>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingViewStyle}
      >
        {!newAccountScreen ? (
          <SignInScreen
            {...props}
            onSignupPress={() => {
              props.handleSignUp && props.handleSignUp();
              setNewAccountScreen(true);
            }}
          />
        ) : (
          <SignUpScreen
            {...props}
            handleSignIn={() => setNewAccountScreen(false)}
          />
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default DarkLoginScreen;
