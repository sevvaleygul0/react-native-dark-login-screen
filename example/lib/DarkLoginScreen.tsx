import * as React from 'react';
import { Text, View, TextInput, TextStyle, TouchableOpacity, ViewStyle, Image, Dimensions } from 'react-native';
const { height: ScreenHeight } = Dimensions.get('window');
import styles, { _bottomButtonContainer } from './DarkLoginScreen.style';
import SignUpScreen from './screens/SignUpScreen';



interface DarkLoginScreenProps {
    titleText: string,
    titleTextStyle: TextStyle,
    descriptionText: string,
    descriptionTextStyle: TextStyle,
    usernamePlaceholder: string,
    textInputStyle: TextStyle,
    placeholderTextColor: string,
    passwordTextInputStyle: TextStyle,
    passwordPlaceholder: string,
    forgotPasswordText: string,
    forgotPasswordTextStyle: TextStyle,
    signInButtonStyle: ViewStyle,
    signInButtonText: string,
    signInButtonTextStyle: TextStyle,
    googleButtonStyle: ViewStyle,
    googleButtonTextStyle: TextStyle,
    googleButtonText: string,
    facebookButtonStyle: ViewStyle,
    facebookButtonTextStyle: TextStyle,
    facebookButtonText: string,
    enableGoogleLogin: boolean,
    enableFacebookLogin: boolean,
    signUpQuestionText: string,
    signUpButtonText: string,
    signUpTextStyle: TextStyle,
    signUpButtonTextStyle: TextStyle,
    usernameChangeText: () => void,
    passwordChangeText: () => void,
    handleSignIn: () => void,
    handleGoogleLogIn: () => void,
    handleFacebookLogIn: () => void
}

const DarkLoginScreen = (props: DarkLoginScreenProps) => {
    const {
        titleText = "Welcome Back!",
        titleTextStyle,
        descriptionText = "Please sign in to your account",
        descriptionTextStyle,
        usernamePlaceholder = "Username",
        textInputStyle,
        placeholderTextColor = '#6C6D72',
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
        usernameChangeText,
        passwordChangeText,
        handleSignIn,
        handleGoogleLogIn,
        handleFacebookLogIn
    } = props;

    const [newAccount, setNewAccount] = React.useState<boolean | undefined>(false);

    const renderHeaderTextContainer = () => (
        <View style={styles.headerContainer}>
            <Text style={[styles.titleTextStyle, titleTextStyle]}>
                {titleText}
            </Text>
            <View style={{ marginTop: 16 }}>
                <Text style={[styles.descriptionTextStyle, descriptionTextStyle]}>
                    {descriptionText}
                </Text>
            </View>
        </View>
    )

    const renderInputContainer = () => (
        <View style={styles.textInputContainer}>
            <TextInput
                {...props}
                placeholder={usernamePlaceholder}
                placeholderTextColor={placeholderTextColor}
                style={[styles.textInputStyle, textInputStyle]}
                onChangeText={usernameChangeText} />
            <TextInput
                {...props}
                placeholder={passwordPlaceholder}
                placeholderTextColor={placeholderTextColor}
                style={[styles.textInputStyle, passwordTextInputStyle]}
                secureTextEntry
                onChangeText={passwordChangeText} />
            <TouchableOpacity style={styles.forgotButtonStyle}>
                <Text style={[styles.forgotPasswordTextStyle, forgotPasswordTextStyle]}>
                    {forgotPasswordText}
                </Text>
            </TouchableOpacity>
        </View>
    )

    const renderLoginButtonsContainer = () => {
        let height = ScreenHeight * 0.2
        if (enableFacebookLogin && enableGoogleLogin) height = ScreenHeight * 0.3
        return (
            <View style={_bottomButtonContainer(height)}>
                <TouchableOpacity style={[styles.signInButtonStyle, signInButtonStyle]} onPress={handleSignIn}>
                    <Text style={[styles.signInButtonTextStyle, signInButtonTextStyle]}>
                        {signInButtonText}
                    </Text>
                </TouchableOpacity>
                {enableGoogleLogin && (
                    <TouchableOpacity style={[styles.googleButtonStyle, googleButtonStyle]} onPress={handleGoogleLogIn}>
                        <Image source={require("./Logo/google.png")} style={styles.logoImageStyle} />
                        <Text style={[styles.googleButtonTextStyle, googleButtonTextStyle]}>{googleButtonText}</Text>
                    </TouchableOpacity>
                )}
                {enableFacebookLogin && (
                    <TouchableOpacity style={[styles.facebookButtonStyle, facebookButtonStyle]} onPress={handleFacebookLogIn}>
                        <Image source={require("./Logo/facebook.png")} style={styles.logoImageStyle} />
                        <Text style={[styles.facebookButtonTextStyle, facebookButtonTextStyle]}>{facebookButtonText}</Text>
                    </TouchableOpacity>
                )}
            </View>
        )
    }

    const renderSignUpButtonContainer = () => (
        <View style={styles.signUpButtonContainer}>
            <Text style={[styles.signUpTextStyle, signUpTextStyle]}>{signUpQuestionText}</Text>
            <TouchableOpacity style={styles.signUpButtonStyle} onPress={() => setNewAccount(true)}>
                <Text style={[styles.signUpButtonTextStyle, signUpButtonTextStyle]}>{signUpButtonText}</Text>
            </TouchableOpacity>
        </View>
    )

    const renderScreenChange = () => {
        if (!newAccount) {
            return (
                <View style={{ flex: 1 }}>
                    {renderHeaderTextContainer()}
                    {renderInputContainer()}
                    {renderLoginButtonsContainer()}
                    {renderSignUpButtonContainer()}
                </View>
            )
        }
        else {
            return (
                <View style={{ flex: 1 }}>
                    <SignUpScreen />
                </View>
            )
        }
    }

    return (
        <View style={styles.mainContainer}>{renderScreenChange()}</View>
    );
};

export default DarkLoginScreen;
