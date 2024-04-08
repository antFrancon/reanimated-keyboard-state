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
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import Animated, {
  KeyboardState,
  SharedValue,
  runOnJS,
  useAnimatedKeyboard,
  useAnimatedProps,
  useAnimatedStyle,
} from 'react-native-reanimated';
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
        translucent
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
          <Toolbar />
          <TextInput placeholder="Type here..." style={styles.input} />
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

const Toolbar: React.FC = () => {
  const styles = StyleSheet.create({
    toolbar: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 100,
      backgroundColor: 'red',
      transform: [{translateY: -120}],
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const keyboard = useAnimatedKeyboard({isStatusBarTranslucentAndroid: true});
  const animatedProps = useAnimatedProps(() => ({
    pointerEvents: isKeyboardOpen(keyboard.state, keyboard.height)
      ? ('box-none' as const)
      : ('none' as const),
  }));
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: isKeyboardOpen(keyboard.state, keyboard.height) ? 1 : 0,
  }));

  return (
    <Animated.View
      style={[styles.toolbar, animatedStyle]}
      animatedProps={animatedProps}>
      <Text>Toolbar visible when keyboard is open</Text>
    </Animated.View>
  );
};

/* export */
export default App;

/* utils */
function isKeyboardOpen(
  state: SharedValue<KeyboardState>,
  height: SharedValue<number>,
): boolean {
  'worklet';
  runOnJS(debug)('Keyboard State', state.value);
  runOnJS(debug)('Keyboard Height', height.value);
  return (
    state.value === KeyboardState.OPEN || state.value === KeyboardState.OPENING
  );
}

/* debug */
function debug(label: string, value: string | number): void {
  console.log('🐞', label, ':', value);
}
