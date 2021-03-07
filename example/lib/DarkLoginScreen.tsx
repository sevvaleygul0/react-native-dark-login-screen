import * as React from 'react';
import { Text, View, TextInput, TextStyle, TouchableOpacity } from 'react-native';
import styles from './DarkLoginScreen.style';


interface DarkLoginScreenProps {
    titleText: string,
    titleTextStyle: TextStyle,
    descriptionTextStyle: TextStyle,
    usernamePlaceholder: string,
    usernameTextInputStyle: TextStyle,
    placeholderTextColor: string,
    passwordTextInputStyle: TextStyle,
    passwordPlaceholder: string,
    forgotPasswordText: string,
    forgotPasswordTextStyle: TextStyle,
    usernameChangeText: () => void,
    passwordChangeText: () => void
}

const DarkLoginScreen = (props: DarkLoginScreenProps) => {
    const {
        titleText = "Welcome Back!",
        titleTextStyle,
        descriptionTextStyle,
        usernamePlaceholder = "Username",
        usernameTextInputStyle,
        placeholderTextColor = '#6C6D72',
        passwordPlaceholder = "Password",
        passwordTextInputStyle,
        forgotPasswordText = "Forgot Password?",
        forgotPasswordTextStyle,
        usernameChangeText,
        passwordChangeText
    } = props;
    const renderHeaderTextContainer = () => (
        <View style={styles.headerContainer}>
            <Text style={[styles.titleTextStyle, titleTextStyle]}>
                {titleText}
            </Text>
            <View style={{ marginTop: 16 }}>
                <Text style={[styles.descriptionTextStyle, descriptionTextStyle]}>
                    Please sign in to your account
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
                style={[styles.usernameTextInputStyle, usernameTextInputStyle]}
                onChangeText={usernameChangeText} />
            <TextInput
                {...props}
                placeholder={passwordPlaceholder}
                placeholderTextColor={placeholderTextColor}
                style={[styles.usernameTextInputStyle, passwordTextInputStyle]}
                secureTextEntry
                onChangeText={passwordChangeText} />
            <TouchableOpacity style={styles.forgotButtonStyle}>
                <Text style={[styles.forgotPasswordTextStyle, forgotPasswordTextStyle]}>
                    {forgotPasswordText}
                </Text>
            </TouchableOpacity>
        </View>
    )
    return (
        <View style={styles.mainContainer}>
            {renderHeaderTextContainer()}
            {renderInputContainer()}
        </View>
    );
};

export default DarkLoginScreen;
