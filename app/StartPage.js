import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Use navigation hook from React Navigation

const StartPage = () => {
  const navigation = useNavigation();  // Hook to navigate

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DIET TRACKER</Text>
      <Text style={styles.tagline}>Smart tracking for a Smarter Diet</Text>
      <Pressable
        onPress={() => navigation.navigate('HomePage')}  // Navigate to HomePage
        style={styles.startButton}
      >
        <Text style={styles.startButtonText}>Start Now</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#4907a6', 
    margin: 10,
  },
  tagline: {
    fontSize: 20,
    fontWeight: '500',
  },
  startButton: {
    marginTop: 50,
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 50,
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default StartPage;
