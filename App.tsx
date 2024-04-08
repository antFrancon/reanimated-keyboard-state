/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

  const styles = StyleSheet.create({
    root: {flex: 1, backgroundColor},
    container: {flex: 1},
  });

  return (
    <SafeAreaProvider style={styles.root} initialMetrics={initialWindowMetrics}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />
      <SafeAreaView style={styles.container}>
        <AppContent isDarkMode={isDarkMode} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

interface AppContentProps {
  isDarkMode: boolean;
}

const AppContent: React.FC<AppContentProps> = ({isDarkMode}) => {
  const styles = StyleSheet.create({
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

  const topInset = useSafeAreaInsets().top;
  const keyboardVerticalOffset = topInset + 8;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={keyboardVerticalOffset}>
          <TextInput placeholder="Type here..." style={styles.input} />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

export default App;
