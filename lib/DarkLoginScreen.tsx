import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  Image,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import styles, {_bottomButtonContainer} from './DarkLoginScreen.style';
import SignUpScreen from './screens/SignUpScreen';

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
}

const DarkLoginScreen = (props: DarkLoginScreenProps) => {
  const {
    titleText = 'Welcome Back!',
    titleTextStyle,
    descriptionText = 'Please sign in to your account',
    descriptionTextStyle,
    usernamePlaceholder = 'Username',
    textInputStyle,
    placeholderTextColor = '#6C6D72',
    passwordPlaceholder = 'Password',
    passwordTextInputStyle,
    forgotPasswordText = 'Forgot Password?',
    forgotPasswordTextStyle,
    signInButtonStyle,
    signInButtonText = 'Sign In',
    signInButtonTextStyle,
    googleButtonStyle,
    googleButtonTextStyle,
    googleButtonText = 'Sign In With Google',
    facebookButtonStyle,
    facebookButtonTextStyle,
    facebookButtonText = 'Sign In With Facebook',
    enableGoogleLogin = true,
    enableFacebookLogin = true,
    signUpQuestionText = "Don't Have An Account ?",
    signUpButtonText = 'Sign Up',
    signUpTextStyle,
    signUpButtonTextStyle,
    enableForgotPassword = true,
    usernameChangeText,
    passwordChangeText,
    handleSignInButton,
    handleGoogleLogIn,
    handleFacebookLogIn,
    handleForgotPassword,
    handleSignUp,
  } = props;

  const [newAccount, setNewAccount] = React.useState<boolean | undefined>(
    false,
  );

  const renderHeaderTextContainer = () => (
    <View style={styles.headerContainer}>
      <Text style={[styles.titleTextStyle, titleTextStyle]}>{titleText}</Text>
      <View style={{marginTop: 16}}>
        <Text style={[styles.descriptionTextStyle, descriptionTextStyle]}>
          {descriptionText}
        </Text>
      </View>
    </View>
  );

  const renderInputContainer = () => (
    <View style={styles.textInputContainer}>
      <TextInput
        {...props}
        placeholder={usernamePlaceholder}
        placeholderTextColor={placeholderTextColor}
        style={[styles.textInputStyle, textInputStyle]}
        onChangeText={usernameChangeText}
      />
      <TextInput
        {...props}
        placeholder={passwordPlaceholder}
        placeholderTextColor={placeholderTextColor}
        style={[styles.textInputStyle, passwordTextInputStyle]}
        secureTextEntry
        onChangeText={passwordChangeText}
      />
      {enableForgotPassword && (
        <TouchableOpacity
          style={styles.forgotButtonStyle}
          onPress={handleForgotPassword}>
          <Text
            style={[styles.forgotPasswordTextStyle, forgotPasswordTextStyle]}>
            {forgotPasswordText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const renderLoginButtonsContainer = () => {
    let numberOfButton: number = 1;
    if (enableGoogleLogin) numberOfButton += 1;
    if (enableFacebookLogin) numberOfButton += 1;
    return (
      <View style={_bottomButtonContainer(numberOfButton)}>
        <TouchableOpacity
          style={[styles.signInButtonStyle, signInButtonStyle]}
          onPress={handleSignInButton}>
          <Text style={[styles.signInButtonTextStyle, signInButtonTextStyle]}>
            {signInButtonText}
          </Text>
        </TouchableOpacity>
        {enableGoogleLogin && (
          <TouchableOpacity
            style={[styles.googleButtonStyle, googleButtonStyle]}
            onPress={handleGoogleLogIn}>
            <Image
              source={require('./Logo/google.png')}
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
            onPress={handleFacebookLogIn}>
            <Image
              source={require('./Logo/facebook.png')}
              style={styles.logoImageStyle}
            />
            <Text
              style={[styles.facebookButtonTextStyle, facebookButtonTextStyle]}>
              {facebookButtonText}
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
          handleSignUp && handleSignUp();
          setNewAccount(true);
        }}>
        <Text style={[styles.signUpButtonTextStyle, signUpButtonTextStyle]}>
          {signUpButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderScreenChange = () => {
    if (!newAccount) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <KeyboardAvoidingView
            style={{flex: 1, alignItems: 'center'}}
            behavior="padding"
            enabled>
            {renderHeaderTextContainer()}
            {renderInputContainer()}
            {renderLoginButtonsContainer()}
            {renderSignUpButtonContainer()}
          </KeyboardAvoidingView>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SignUpScreen {...props} handleSignIn={() => setNewAccount(false)} />
        </View>
      );
    }
  };

  return <View style={styles.mainContainer}>{renderScreenChange()}</View>;
};

export default DarkLoginScreen;
