import {
  getStatusBarHeight,
  isIPhoneNotchFamily,
} from "@freakycoder/react-native-helpers";
import React from "react";
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
import styles, { _bottomButtonContainer } from "./SignInScreen.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ISignInScreenProps {
  style?: CustomStyleProp;
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
  onSignupPress: () => void;
}

const SignInScreen: React.FC<ISignInScreenProps> = ({
  style,
  titleText = "Welcome Back!",
  titleTextStyle,
  descriptionText = "Please sign in to your account",
  descriptionTextStyle,
  usernamePlaceholder = "Username",
  textInputStyle,
  placeholderTextColor = "#6C6D72",
  passwordPlaceholder = "Password",
  passwordTextInputStyle,
  forgotPasswordText = "Forgot Password?",
  forgotPasswordTextStyle,
  signInButtonStyle,
  signInButtonText = "Sign In",
  signInButtonTextStyle,
  googleButtonStyle,
  googleButtonTextStyle,
  googleButtonText = "Sign In With Google",
  facebookButtonStyle,
  facebookButtonTextStyle,
  facebookButtonText = "Sign In With Facebook",
  enableGoogleLogin = true,
  enableFacebookLogin = true,
  signUpQuestionText = "Don't Have An Account ?",
  signUpButtonText = "Sign Up",
  signUpTextStyle,
  signUpButtonTextStyle,
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
        placeholderTextColor={placeholderTextColor}
        style={[styles.textInputStyle, textInputStyle]}
        onChangeText={usernameChangeText}
      />
      <TextInput
        placeholder={passwordPlaceholder}
        placeholderTextColor={placeholderTextColor}
        style={[styles.textInputStyle, passwordTextInputStyle]}
        secureTextEntry
        onChangeText={passwordChangeText}
      />
      {enableForgotPassword && (
        <TouchableOpacity
          style={styles.forgotButtonStyle}
          onPress={handleForgotPassword}
        >
          <Text
            style={[styles.forgotPasswordTextStyle, forgotPasswordTextStyle]}
          >
            {forgotPasswordText}
          </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={[styles.signInButtonStyle, signInButtonStyle]}
        onPress={handleSignInButton}
      >
        <Text style={[styles.signInButtonTextStyle, signInButtonTextStyle]}>
          {signInButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderLoginButtonsContainer = () => {
    let numberOfButton: number = 1;
    if (enableGoogleLogin) numberOfButton += 1;
    if (enableFacebookLogin) numberOfButton += 1;
    if (enableAppleLogin) numberOfButton += 1;
    return (
      <View>
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
        {enableAppleLogin && (
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
      </View>
    );
  };

  const renderSignUpButtonContainer = () => (
    <View style={styles.signUpButtonContainer}>
      <Text style={[styles.signUpTextStyle, signUpTextStyle]}>
        {signUpQuestionText}
      </Text>
      <TouchableOpacity
        style={styles.signUpButtonStyle}
        onPress={() => {
          onSignupPress && onSignupPress();
        }}
      >
        <Text style={[styles.signUpButtonTextStyle, signUpButtonTextStyle]}>
          {signUpButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.newAccountContainer}>
      <KeyboardAvoidingView
        enabled
        behavior="padding"
        style={styles.keyboardAvoidingViewStyle}
      >
        <SafeAreaView
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          {renderHeaderTextContainer()}
          {renderInputContainer()}
        </SafeAreaView>
        <View
          style={{
            position: "absolute",
            bottom: isIPhoneNotchFamily() ? getStatusBarHeight() : 8,
          }}
        >
          {renderLoginButtonsContainer()}
          {renderSignUpButtonContainer()}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignInScreen;
