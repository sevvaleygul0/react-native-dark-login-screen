import * as React from "react";
import {
  Text,
  View,
  TextInput,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  SafeAreaView,
} from "react-native";
import styles from "./SignUpScreen.style";

interface SignUpScreenProps {
  signUpTitle?: string;
  signUpDescriptionText?: string;
  signUpTitleTextStyle?: TextStyle;
  signUpDescriptionTextStyle?: TextStyle;
  fullNamePlaceholderText?: string;
  placeholderTextColor?: string;
  textInputStyle?: TextStyle;
  emailPlaceholderText?: string;
  passwordPlaceholder?: string;
  passwordTextInputStyle?: TextStyle;
  signUpButtonText?: string;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  bottomQuestionTextStyle?: TextStyle;
  bottomQuestionButton?: ViewStyle;
  signInQuestionText?: string;
  bottomQuestionButtonTextStyle?: TextStyle;
  signInButtonText?: string;
  descriptionTextStyle?: TextStyle;
  titleTextStyle?: TextStyle;
  fullNameOnChange?: (fullName: string) => void;
  emailOnChange?: (email: string) => void;
  singUpPasswordChangeText?: (password: string) => void;
  handleSignUpButton?: () => void;
  handleSignIn?: () => void;
}

const SignUpScreen = (props: SignUpScreenProps) => {
  const {
    signUpTitle = "Create New Account",
    signUpDescriptionText = "Please fill in the form to continue",
    signUpTitleTextStyle,
    titleTextStyle,
    signUpDescriptionTextStyle,
    fullNamePlaceholderText = "Full Name",
    placeholderTextColor = "#6C6D72",
    textInputStyle,
    bottomQuestionButton,
    emailPlaceholderText = "Email Address",
    passwordPlaceholder = "Password",
    passwordTextInputStyle,
    signUpButtonText = "Sign Up",
    buttonStyle,
    buttonTextStyle,
    bottomQuestionTextStyle,
    signInQuestionText = "Have An Account?",
    bottomQuestionButtonTextStyle,
    signInButtonText = "Sign In",

    descriptionTextStyle,
    fullNameOnChange,
    emailOnChange,
    singUpPasswordChangeText,
    handleSignUpButton,
    handleSignIn,
  } = props;

  const renderHeaderTextContainer = () => (
    <View style={styles.headerContainer}>
      <Text style={[styles.titleTextStyle, titleTextStyle]}>{signUpTitle}</Text>
      <View style={{ marginTop: 16 }}>
        <Text style={[styles.descriptionTextStyle, descriptionTextStyle]}>
          {signUpDescriptionText}
        </Text>
      </View>
    </View>
  );

  const renderTextInputContainer = () => (
    <View style={styles.textInputContainer}>
      <TextInput
        {...props}
        placeholder={fullNamePlaceholderText}
        placeholderTextColor={placeholderTextColor}
        style={[styles.textInputStyle, textInputStyle]}
        onChangeText={fullNameOnChange}
      />
      <TextInput
        {...props}
        placeholder={emailPlaceholderText}
        placeholderTextColor={placeholderTextColor}
        style={[styles.textInputStyle, textInputStyle]}
        onChangeText={emailOnChange}
      />
      <TextInput
        {...props}
        placeholder={passwordPlaceholder}
        placeholderTextColor={placeholderTextColor}
        style={[styles.textInputStyle, textInputStyle]}
        secureTextEntry
        onChangeText={singUpPasswordChangeText}
      />
    </View>
  );

  const renderSignUpButton = () => (
    <TouchableOpacity
      style={[styles.signUpButtonStyle, buttonStyle]}
      onPress={handleSignUpButton}
    >
      <Text style={[styles.signUpButtonTextStyle, buttonTextStyle]}>
        {signUpButtonText}
      </Text>
    </TouchableOpacity>
  );

  const renderSignInTextContainer = () => (
    <View style={styles.bottomQuestionContainer}>
      <Text style={[styles.bottomQuestionTextStyle, bottomQuestionTextStyle]}>
        {signInQuestionText}
      </Text>
      <TouchableOpacity
        style={[styles.bottomQuestionButton, bottomQuestionButton]}
        onPress={() => handleSignIn && handleSignIn()}
      >
        <Text
          style={[
            styles.bottomQuestionButtonTextStyle,
            bottomQuestionButtonTextStyle,
          ]}
        >
          {signInButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      {renderHeaderTextContainer()}
      {renderTextInputContainer()}
      {renderSignUpButton()}
      {renderSignInTextContainer()}
    </>
  );
};

export default SignUpScreen;
