import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Author } from './screens/Author';
import { Load } from './screens/Load';
import React, { useState, useEffect } from 'react';
import { Navigation } from './screens/Navigation';
import { UserContext } from './screens/userContext';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Load />;
  }

  return (
    <UserContext.Provider value={{user, setUser}}>
      <SafeAreaView style={styles.container}>
        <StatusBar style={Platform.OS === 'android' ? 'light' : 'dark'} />
        <Navigation/>
      </SafeAreaView>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});