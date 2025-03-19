import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) return 'Good morning';
    if (currentHour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{getGreeting()}, welcome back!</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  greeting: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
});
