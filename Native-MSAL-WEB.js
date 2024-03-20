import React, { createContext, useState, useEffect } from 'react';
import PublicClientApplication  from 'react-native-msal';

import { msalConfig } from './msalConfig';
import { Button, Text, View } from 'react-native';

// export const AuthContext = createContext();

const App = () => {

  const [account, setAccount] = useState(null);
  const [appState, setAppState] = useState('loading');
  const [msalClient, setMsalClient] = useState(null);

  const client = new PublicClientApplication(msalConfig);

  // useEffect(() => {
  //   const createClient = async () => {
  //     const client = new PublicClientApplication(msalConfig);
  //     console.log(client)
  //     setMsalClient(client);
      
  //   };
  //   createClient();
  // }, []);

  const onSignIn = async () => {
    try {
      const response = await client.acquireToken({
        // scopes:['openid', 'profile', 'offline_access']
      })
      setAccount(response.account);
      console.log(response.account)
    } catch (error) {
      console.log(error);
    }
  };

  const onSignOut = async () => {
    try {
      await client.signOut()
      setAccount(null);
    } catch (error) {8
      console.log(error);
    }
  };

  const value = {
    account,
    onSignIn,
    onSignOut,
  };

  return (
    // <AuthContext.Provider value={value}>
    //   {appState === "loading" ? (
    //     <Loading />
    //   ) : (
    //     children
    //   )}
    // </AuthContext.Provider>
    // <>
    // {/* <Button title='Login' onPress={onSignIn}></Button>
    // <Text>{account}</Text> */}
    // </>
    <View>
    {account ? (
      <View>
        <Text style={{color:'white'}}>Welcome, {account.username}!</Text>
        <Button title="Logout" onPress={onSignOut} />
      </View>
    ) : (
      <Button title="Login" onPress={onSignIn} />
    )}
  </View>
  );
};

export default App;