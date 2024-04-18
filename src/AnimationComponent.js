import React, {useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

const AnimationComponent = () => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    const animation = Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });

    animation.start();
  }, [animatedValue]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            opacity: animatedValue, // Use animated value as style property
            transform: [
              {
                translateY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default AnimationComponent;
