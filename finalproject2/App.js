
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import store from './store';
import { Provider } from 'react-redux';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name='Screen1' component={Screen1} options={{ headerShown: false }} />
        <Stack.Screen name='Screen2' component={Screen2} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
