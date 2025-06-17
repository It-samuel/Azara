import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View >
      <View style={styles.container}>
        <Text >
          Welcome to Our App!
        </Text>

      </View>
    </View>
  )
}

export default SplashScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#800080',
        alignItems: 'center',
        justifyContent: 'center',
    },
})