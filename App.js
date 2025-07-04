import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import SplashScreen from './src/frontend/screens/SplashScreen';
import HomeScreen from './src/frontend/screens/HomeScreen';
import RootNav from './src/frontend/navigations/rootNav';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <RootNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // optional default background
  },
});
