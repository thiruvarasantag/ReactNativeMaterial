import { useState, useRef } from 'react';
import { Button, Text } from 'react-native';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <Text>Time passed: {secondsPassed.toFixed(3)}</Text>
      <Button onClick={handleStart}>
        Start
      </Button>
      <Button onClick={handleStop}>
        Stop
      </Button>
    </>
  );
}
