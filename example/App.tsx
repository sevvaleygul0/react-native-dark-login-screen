import React from 'react';
import DarkLoginScreen from './lib/DarkLoginScreen';

const App = () => {
  return (
    <DarkLoginScreen
      enableAppleLogin={false}
      // enableGoogleLogin={false}
      // enableFacebookLogin={false}
      handleSignInButton={() => console.log('sign in')}
      handleSignUpButton={() => console.log('sign up')}
      fullNameOnChange={(value: string) => console.log('full name', value)}
    />
  );
};

export default App;
