import React, { useState, useCallback } from 'react';
import { View, Button, Text } from 'react-native';

const CallBackComponent = () => {
  const [count, setCount] = useState(0);

  // Define a memoized increment function using useCallback
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency array: only re-create the function if `count` changes

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Count: {count}</Text>
      {/* Pass the memoized function to the child component */}
      <CounterButton onPress={increment} />
    </View>
  );
};

const CounterButton = ({ onPress }) => {
  return (
    <Button title="Increment" onPress={onPress} />
  );
};

export default CallBackComponent;
