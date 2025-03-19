import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/frontend/screens/SplashScreen';



export default function App() {
  return ( 
    <SafeAreaView>
       <StatusBar style="auto" />
      <Text>Azara</Text>
      
      <SplashScreen/>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    flex: 1,
  },
});
