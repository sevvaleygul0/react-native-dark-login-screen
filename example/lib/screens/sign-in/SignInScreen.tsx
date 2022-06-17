import * as React from "react";
import {
  getStatusBarHeight,
  isAndroid,
  isIPhoneNotchFamily,
} from "@freakycoder/react-native-helpers";
import {
  View,
  StyleProp,
  Image,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextInput,
  TextStyle,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
/**
 * ? Local Imports
 */
import styles from "./SignInScreen.style";
import { Platform } from "react-native";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ISignInScreenProps {
  style?: CustomStyleProp;
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
  signUpButtonText?: string;
  bottomQuestionTextStyle?: TextStyle;
  bottomQuestionButtonTextStyle?: TextStyle;
  signInQuestionText?: string;
  signInQuestionTextStyle?: TextStyle;
  enableForgotPassword?: boolean;
  enableAppleLogin?: boolean;
  appleButtonStyle?: ViewStyle;
  appleButtonText?: string;
  appleButtonTextStyle?: TextStyle;

  bottomQuestionButton?: ViewStyle;
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

const SignInScreen: React.FC<ISignInScreenProps> = ({
  style,
  titleText = "Welcome Back!",
  titleTextStyle,
  descriptionText = "Please sign in to your account",
  descriptionTextStyle,
  usernamePlaceholder = "Username",
  passwordPlaceholder = "Password",
  textInputStyle,
  forgotPasswordText = "Forgot Password?",
  forgotPasswordTextStyle,
  buttonStyle,
  signInButtonText = "Sign In",
  buttonTextStyle,
  googleButtonStyle,
  googleButtonTextStyle,
  googleButtonText = "Sign In With Google",
  facebookButtonStyle,
  facebookButtonTextStyle,
  facebookButtonText = "Sign In With Facebook",
  enableGoogleLogin = true,
  enableFacebookLogin = true,
  accountQuestionText = "Don't Have An Account ?",
  signUpButtonText = "Sign Up",
  bottomQuestionTextStyle,

  bottomQuestionButton,
  bottomQuestionButtonTextStyle,
  enableForgotPassword = true,
  enableAppleLogin = true,
  appleButtonStyle,
  appleButtonText = "Sign In With Apple",
  appleButtonTextStyle,
  usernameChangeText,
  passwordChangeText,
  handleSignInButton,
  handleGoogleLogIn,
  handleFacebookLogIn,
  handleForgotPassword,
  handleSignUp,
  handleAppleLogIn,
  onSignupPress,
}) => {
  const renderHeaderTextContainer = () => (
    <View style={styles.headerContainer}>
      <Text style={[styles.titleTextStyle, titleTextStyle]}>{titleText}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={[styles.descriptionTextStyle, descriptionTextStyle]}>
          {descriptionText}
        </Text>
      </View>
    </View>
  );

  const renderInputContainer = () => (
    <View style={styles.textInputContainer}>
      <TextInput
        placeholder={usernamePlaceholder}
        placeholderTextColor="#6C6D72"
        style={[styles.textInputStyle, textInputStyle]}
        onChangeText={usernameChangeText}
      />
      <TextInput
        placeholder={passwordPlaceholder}
        placeholderTextColor="#6C6D72"
        style={[styles.textInputStyle, textInputStyle]}
        secureTextEntry
        onChangeText={passwordChangeText}
      />
      <TouchableOpacity
        style={styles.forgotButtonStyle}
        onPress={handleForgotPassword}
      >
        <Text style={[styles.forgotPasswordTextStyle, forgotPasswordTextStyle]}>
          {forgotPasswordText}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.signInButtonStyle, buttonStyle]}
        onPress={handleSignInButton}
      >
        <Text style={[styles.signInButtonTextStyle, buttonTextStyle]}>
          {signInButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderLoginButtonsContainer = () => (
    <>
      {enableGoogleLogin && (
        <TouchableOpacity
          style={[styles.googleButtonStyle, googleButtonStyle]}
          onPress={handleGoogleLogIn}
        >
          <Image
            source={require("../../local-assets/google.png")}
            style={styles.logoImageStyle}
          />
          <Text style={[styles.googleButtonTextStyle, googleButtonTextStyle]}>
            {googleButtonText}
          </Text>
        </TouchableOpacity>
      )}
      {enableFacebookLogin && (
        <TouchableOpacity
          style={[styles.facebookButtonStyle, facebookButtonStyle]}
          onPress={handleFacebookLogIn}
        >
          <Image
            source={require("../../local-assets/facebook.png")}
            style={styles.logoImageStyle}
          />
          <Text
            style={[styles.facebookButtonTextStyle, facebookButtonTextStyle]}
          >
            {facebookButtonText}
          </Text>
        </TouchableOpacity>
      )}
      {enableAppleLogin && !isAndroid && (
        <TouchableOpacity
          style={[styles.appleButtonStyle, appleButtonStyle]}
          onPress={handleAppleLogIn}
        >
          <Image
            source={require("../../local-assets/apple.png")}
            style={styles.logoImageStyle}
          />
          <Text style={[styles.appleButtonTextStyle, appleButtonTextStyle]}>
            {appleButtonText}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );

  const rendersignUpQuestionButtonContainer = () => (
    <View style={styles.bottomQuestionContainer}>
      <Text style={[styles.bottomQuestionTextStyle, bottomQuestionTextStyle]}>
        {accountQuestionText}
      </Text>
      <TouchableOpacity
        style={[styles.bottomQuestionButton, bottomQuestionButton]}
        onPress={onSignupPress}
      >
        <Text
          style={[
            styles.bottomQuestionButtonTextStyle,
            bottomQuestionButtonTextStyle,
          ]}
        >
          {signUpButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      {renderHeaderTextContainer()}
      {renderInputContainer()}
      <View
        style={{
          position: "absolute",
          bottom: isIPhoneNotchFamily() ? getStatusBarHeight() : 8,
        }}
      >
        {renderLoginButtonsContainer()}
        {rendersignUpQuestionButtonContainer()}
      </View>
    </>
  );
};

export default SignInScreen;
