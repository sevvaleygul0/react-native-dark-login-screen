import * as React from "react";
import { View, TextStyle, ViewStyle } from "react-native";
import styles from "./DarkLoginScreen.style";
import SignUpScreen from "./screens/sign-up/SignUpScreen";
import SignInScreen from "./screens/sign-in/SignInScreen";

interface DarkLoginScreenProps {
  titleText?: string;
  titleTextStyle?: TextStyle;
  descriptionText?: string;
  descriptionTextStyle?: TextStyle;
  usernamePlaceholder?: string;
  textInputStyle?: TextStyle;
  placeholderTextColor?: string;
  passwordTextInputStyle?: TextStyle;
  passwordPlaceholder?: string;
  forgotPasswordText?: string;
  forgotPasswordTextStyle?: TextStyle;
  signInButtonStyle?: ViewStyle;
  signInButtonText?: string;
  signInButtonTextStyle?: TextStyle;
  googleButtonStyle?: ViewStyle;
  googleButtonTextStyle?: TextStyle;
  googleButtonText?: string;
  facebookButtonStyle?: ViewStyle;
  facebookButtonTextStyle?: TextStyle;
  facebookButtonText?: string;
  enableGoogleLogin?: boolean;
  enableFacebookLogin?: boolean;
  signUpQuestionText?: string;
  signUpButtonText?: string;
  signUpTextStyle?: TextStyle;
  signUpButtonTextStyle?: TextStyle;
  signInQuestionText?: string;
  signInQuestionTextStyle?: TextStyle;
  enableForgotPassword?: boolean;
  enableAppleLogin?: boolean;
  appleButtonStyle?: ViewStyle;
  appleButtonText?: string;
  appleButtonTextStyle?: TextStyle;
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
}

const DarkLoginScreen = (props: DarkLoginScreenProps) => {
  const [newAccount, setNewAccount] = React.useState<boolean | undefined>(
    false,
  );

  const renderScreenChange = () => {
    if (!newAccount) {
      return (
        <SignInScreen
          {...props}
          onSignupPress={() => {
            props.handleSignUp && props.handleSignUp();
            setNewAccount(true);
          }}
        />
      );
    } else {
      return (
        <View style={styles.screenContainer}>
          <SignUpScreen {...props} handleSignIn={() => setNewAccount(false)} />
        </View>
      );
    }
  };

  return <View style={styles.mainContainer}>{renderScreenChange()}</View>;
};

export default DarkLoginScreen;
