import React, { useState, useMemo } from 'react';
import { View, Text, Button } from 'react-native';

const Fibonacci = ({ n }) => {
  const calculateFibonacci = (num) => {
    if (num <= 1) return num;
    return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
  };

  // Memoize the calculation
  const fibonacciValue = useMemo(() => calculateFibonacci(n), [n]);

  return (
    <View>
      <Text>
        Fibonacci of {n} is {fibonacciValue}
      </Text>
    </View>
  );
};

const MemoComponent = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Fibonacci n={count} />
      <Button title="Increment" onPress={increment} />
    </View>
  );
};

export default MemoComponent;
