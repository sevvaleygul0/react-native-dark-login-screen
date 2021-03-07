import * as React from 'react';
import { Text, View, StyleSheet, TextStyle } from 'react-native';
import styles from './DarkLoginScreen.style';


interface DarkLoginScreenProps {
    titleText: string,
    titleTextStyle: TextStyle,
    descriptionTextStyle: TextStyle
}

const DarkLoginScreen = (props: DarkLoginScreenProps) => {
    const {
        titleText = "Welcome Back!",
        titleTextStyle,
        descriptionTextStyle
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
    return (
        <View style={styles.mainContainer}>
            {renderHeaderTextContainer()}
        </View>
    );
};

export default DarkLoginScreen;
