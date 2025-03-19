import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions } from 'react-native';
import { useFonts, PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display';

const { width } = Dimensions.get('window');
const SplashScreen = () => {

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;
    const progressAnim = useRef(new Animated.Value(0)).current;
    const [showProgress, setShowProgress] = useState(false);

    useEffect(() => {
    console.log('UseEffect triggered, fontsLoaded:', fontsLoaded);
    if (fontsLoaded) {
      // Title animation
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 20,
          friction: 7,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Show progress after title animation
        setShowProgress(true);
        
        // Progress animation
        Animated.timing(progressAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }).start(() => {
          // Navigate to main app after animation
        //   setTimeout(() => {
        //     onFinish && onFinish();
        //   }, 500);
        });
      });
    }
  }, [fontsLoaded]);


    let [fontsLoaded] = useFonts({
        PlayfairDisplay_400Regular,
    });

     if (!fontsLoaded) {
    return null;
  }

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width * 0.8],
  });


  return (
     <View style={styles.container}>
      <Animated.View
        style={[
          styles.titleContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Text style={styles.title}>Azara</Text>
        <Text style={styles.subtitle}>Your Voice, Your Knowledge</Text>
      </Animated.View>

      {showProgress && (
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <Animated.View
              style={[
                styles.progressFill,
                { width: progressWidth },
              ]}
            />
          </View>
          <Text style={styles.loadingText}>Initializing...</Text>
        </View>
      )}
    </View>
  );
};

export default SplashScreen


const styles = StyleSheet.create({
     container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#800080', // Your original purple color
  },

    titleContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: 56,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: 18,
    color: '#e3f2fd',
    textAlign: 'center',
  },
  progressContainer: {
    position: 'absolute',
    bottom: 100,
    alignItems: 'center',
  },
  progressBar: {
    width: width * 0.8,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 2,
    marginBottom: 20,
  },
   progressFill: {
    height: '100%',
    backgroundColor: '#00e676',
    borderRadius: 2,
  },
  loadingText: {
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: 14,
    color: '#e3f2fd',
  },
})