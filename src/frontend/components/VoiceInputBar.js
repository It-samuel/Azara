import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

const VoiceInputBar = () => {
  const [listening, setListening] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (listening) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 1.4,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      scaleAnim.setValue(1);
    }
  }, [listening]);

  return (
    <View style={styles.container}>
      {/* Left: Plus Button */}
      <TouchableOpacity style={styles.plusButton} onPress={() => {}}>
        <Feather name="plus" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Center: Speaker Button */}
      <TouchableOpacity
        onPress={() => setListening(!listening)}
        activeOpacity={0.8}
      >
        <Animated.View style={[styles.micButton, { transform: [{ scale: scaleAnim }] }]}>
          <FontAwesome
            name="microphone"
            size={32}
            color="#fff"
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default VoiceInputBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButton: {
    position: 'absolute',
    left: 30,
    backgroundColor: '#800080',
    borderRadius: 50,
    padding: 12,
  },
  micButton: {
    backgroundColor: '#800080',
    borderRadius: 50,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
