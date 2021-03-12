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
    fullNameOnChange: () => void,
    emailOnChange: () => void,
    singUpPasswordChangeText: () => void,
    handleSignUp: () => void
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
        fullNameOnChange,
        emailOnChange,
        singUpPasswordChangeText,
        handleSignUp
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
            <TouchableOpacity style={[styles.signUpButtonStyle, signUpButtonStyle]} onPress={handleSignUp}>
                <Text style={[styles.signUpButtonTextStyle, signUpButtonTextStyle]}>
                    {signUpButtonText}
                </Text>
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={styles.mainContainer}>
            {renderHeaderTextContainer()}
            {renderTextInputContainer()}
            {renderSignUpButton()}
        </View>
    );
};

export default SignUpScreen;
