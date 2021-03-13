import React from 'react';
import { SafeAreaView, View, Image, Text, StatusBar } from 'react-native';

import DarkLoginScreen from './lib/DarkLoginScreen';



const App = () => {

  return (
    <DarkLoginScreen
      handleSignUpButton={() => console.log("sign up")}
      fullNameOnChange={(value: string) => console.log("HERE", value)}
    />
  );
};

export default App;
