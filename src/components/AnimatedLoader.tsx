import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

type AnimatedLoaderProps = {
  visible: boolean;
};

export const AnimatedLoader: React.FC<AnimatedLoaderProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <View style={styles.loaderContainer}>
      <LottieView
        source={require('@assets/animations/loader.json')}
        autoPlay
        loop
        style={styles.loader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  loader: {
    width: 200,
    height: 200,
  },
});