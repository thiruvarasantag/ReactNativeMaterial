import React from 'react';
import { View, Text } from 'react-native';

const FunctionalComponent = (props) => {
  return (
    <View>
      <Text>{props.message}</Text>
    </View>
  );
};

export default FunctionalComponent;