import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { StatusBar } from 'expo-status-bar';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';
import { Link } from 'expo-router';

export default function App() {
  return (

    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.boldTitle}>Aora!</ThemedText>
        <HelloWave />
        <StatusBar style='auto' />
        <Link href="/profile" style={{color: 'blue'}}>Go to your Profile</Link>
      </ThemedView>

    </ParallaxScrollView>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  boldTitle: {
    fontWeight: 'bold', // Makes the font more bold
    fontSize: 30, // Optional: Adjust the font size if needed
  },

  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
