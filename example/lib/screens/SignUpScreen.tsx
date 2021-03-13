import * as React from 'react';
import { Text, View, TextInput, TextStyle, TouchableOpacity, ViewStyle, Image, Dimensions } from 'react-native';
const { height: ScreenHeight } = Dimensions.get('window');
import styles, { _bottomButtonContainer } from './SignUpScreen.style';


interface SignUpScreenProps {
    signUpTitle?: string,
    signUpDescriptionText?: string,
    signUpTitleTextStyle?: TextStyle,
    signUpDescriptionTextStyle?: TextStyle
    fullNamePlaceholderText?: string,
    placeholderTextColor?: string
    textInputStyle?: TextStyle,
    emailPlaceholderText?: string,
    passwordPlaceholder?: string,
    passwordTextInputStyle?: TextStyle,
    signUpButtonText?: string,
    signUpButtonStyle?: ViewStyle,
    signUpButtonTextStyle?: TextStyle,
    signInQuestionTextStyle?: TextStyle,
    signInQuestionText: string,
    signInButtonTextStyle?: TextStyle,
    signInButtonText?: string,
    fullNameOnChange: (fullName: string) => void,
    emailOnChange: (email: string) => void,
    singUpPasswordChangeText: (password: string) => void,
    handleSignUpButton: () => void,
    handleSignIn: () => void
}

const SignUpScreen = (props: SignUpScreenProps) => {
    const {
        signUpTitle = "Create New Account",
        signUpDescriptionText = "Please fill in the form to continue",
        signUpTitleTextStyle,
        signUpDescriptionTextStyle,
        fullNamePlaceholderText = "Full Name",
        placeholderTextColor = "#6C6D72",
        textInputStyle,
        emailPlaceholderText = "Email Address",
        passwordPlaceholder = "Password",
        passwordTextInputStyle,
        signUpButtonText = "Sign Up",
        signUpButtonStyle,
        signUpButtonTextStyle,
        signInQuestionTextStyle,
        signInQuestionText = "Have An Account?",
        signInButtonTextStyle,
        signInButtonText = "Sign In",
        fullNameOnChange,
        emailOnChange,
        singUpPasswordChangeText,
        handleSignUpButton,
        handleSignIn
    } = props;


    const renderHeaderTextContainer = () => (
        <View style={styles.headerContainer}>
            <Text style={[styles.titleTextStyle, signUpTitleTextStyle]}>
                {signUpTitle}
            </Text>
            <View style={{ marginTop: 16 }}>
                <Text style={[styles.descriptionTextStyle, signUpDescriptionTextStyle]}>
                    {signUpDescriptionText}
                </Text>
            </View>
        </View>
    )

    const renderTextInputContainer = () => (
        <View style={styles.textInputContainer}>
            <TextInput
                {...props}
                placeholder={fullNamePlaceholderText}
                placeholderTextColor={placeholderTextColor}
                style={[styles.textInputStyle, textInputStyle]}
                onChangeText={fullNameOnChange} />
            <TextInput
                {...props}
                placeholder={emailPlaceholderText}
                placeholderTextColor={placeholderTextColor}
                style={[styles.textInputStyle, textInputStyle]}
                onChangeText={emailOnChange} />
            <TextInput
                {...props}
                placeholder={passwordPlaceholder}
                placeholderTextColor={placeholderTextColor}
                style={[styles.textInputStyle, passwordTextInputStyle]}
                secureTextEntry
                onChangeText={singUpPasswordChangeText} />
        </View>
    )

    const renderSignUpButton = () => (
        <View style={styles.signUpButtonContainer}>
            <TouchableOpacity style={[styles.signUpButtonStyle, signUpButtonStyle]} onPress={handleSignUpButton}>
                <Text style={[styles.signUpButtonTextStyle, signUpButtonTextStyle]}>
                    {signUpButtonText}
                </Text>
            </TouchableOpacity>
        </View>
    )

    const renderSignInTextContainer = () => (
        <View style={styles.signInButtonContainer}>
            <Text style={[styles.signInQuestionTextStyle, signInQuestionTextStyle]}>{signInQuestionText}</Text>
            <TouchableOpacity style={styles.signInButtonStyle} onPress={() => handleSignIn && handleSignIn()}>
                <Text style={[styles.signInButtonTextStyle, signInButtonTextStyle]}>{signInButtonText}</Text>
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={styles.mainContainer}>
            {renderHeaderTextContainer()}
            {renderTextInputContainer()}
            {renderSignUpButton()}
            {renderSignInTextContainer()}
        </View>
    );
};

export default SignUpScreen;
