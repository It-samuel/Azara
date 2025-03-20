import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts, PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display';
import VoiceInputBar from '../components/VoiceInputBar';


const HomeScreen = () => {

    const [fontsLoaded] = useFonts({
        PlayfairDisplay_400Regular,
      });

  const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) return 'Good morning';
    if (currentHour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{getGreeting()}, welcome back!</Text>
      <VoiceInputBar />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf6',
  },
  greeting: {
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginHorizontal: 12,
    marginTop: 24,
  },
});
