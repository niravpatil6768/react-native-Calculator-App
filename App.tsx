/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Switch,
  useColorScheme,
 
  View,
  
} from 'react-native';
import { useState } from 'react';
//import Calculator from './android/app/src/components/calculator/calculator';
import { ThemeContext } from './android/app/src/context/ThemeContext';
import { myColors } from './android/app/src/styles/Colors';
import Button from './android/app/src/components/Button';
import Keyboard from './android/app/src/components/Keyboard';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [theme, setTheme] = useState('light');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'rgb(214,214,214)',
  };

  function alert(arg0: string) {
    throw new Error('Function not implemented.');
  }

  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme === 'light' ? styles.container: [ styles.container, {backgroundColor: '#000'}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View >
        <Switch value={theme === 'light'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}/>
       <Keyboard/>
      </View>
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'sans-serif',
    backgroundColor: myColors.light,
    display: 'flex',
    justifyContent: 'flex-start'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue', // You can customize the color as needed
  },
});

export default App;
