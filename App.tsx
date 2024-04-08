/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor,
    },
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
      padding: 16,
    },
    input: {
      height: 40,
      paddingHorizontal: 8,
      borderRadius: 4,
      borderColor: 'gray',
      borderWidth: 1,
    },
  });

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}>
        <Header />
        <View style={styles.content}>
          <TextInput placeholder="Type here..." style={styles.input} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
