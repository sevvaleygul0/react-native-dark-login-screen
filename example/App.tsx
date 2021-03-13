import React from 'react';
import { SafeAreaView, View, Image, Text, StatusBar } from 'react-native';

import DarkLoginScreen from 'react-native-dark-login-screen';



const App = () => {

  return (
    <DarkLoginScreen
      handleSignUpButton={() => console.log("sign up")}
      fullNameOnChange={(value: string) => console.log("full name", value)}
    />
  );
};

export default App;
