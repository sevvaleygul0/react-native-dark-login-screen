import React from "react";
import DarkLoginScreen from "react-native-dark-login-screen";

const App = () => {
  return (
    <DarkLoginScreen
      handleSignInButton={() => console.log("sign in")}
      handleSignUpButton={() => console.log("sign up")}
      fullNameOnChange={(value: string) => console.log("full name", value)}
    />
  );
};

export default App;
