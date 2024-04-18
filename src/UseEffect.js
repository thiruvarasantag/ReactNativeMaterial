import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  // This effect will run after every render
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <View>
      <Text>Elapsed Time: {seconds} seconds</Text>
      <Button title="Reset Timer" onPress={() => setSeconds(0)} />
    </View>
  );
};

export default TimerComponent;