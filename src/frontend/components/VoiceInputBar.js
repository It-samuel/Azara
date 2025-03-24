import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, Alert } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

const VoiceInputBar = () => {
  const [listening, setListening] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // Animate mic when listening
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

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // accept any file type
        copyToCacheDirectory: true,
        multiple: false,
      });

      if (result.type === 'success') {
        console.log('Picked file:', result);
        Alert.alert('File Selected', `Name: ${result.name}`);
        // You can now send `result.uri` to your backend or process it further
      }
    } catch (error) {
      console.error('File picking error:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Plus Button */}
      <TouchableOpacity style={styles.plusButton} onPress={pickFile}>
        <Feather name="plus" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Mic Button */}
      <TouchableOpacity
        onPress={() => setListening(!listening)}
        activeOpacity={0.8}
      >
        <Animated.View style={[styles.micButton, { transform: [{ scale: scaleAnim }] }]}>
          <FontAwesome name="microphone" size={32} color="#fff" />
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
