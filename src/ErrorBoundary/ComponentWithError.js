import React from 'react';
import { View, Text } from 'react-native';
import ErrorBoundary from './ErrorBoundary';

const ComponentWithError = () => {
  throw new Error('Error occurred in ComponentWithError!');
};

const ErrorComponent = () => {
  return (
    <ErrorBoundary>
      <View>
        <Text>This is a regular component</Text>
        <ComponentWithError />
      </View>
    </ErrorBoundary>
  );
};

export default ErrorComponent;
