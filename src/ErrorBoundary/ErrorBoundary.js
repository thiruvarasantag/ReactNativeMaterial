import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    // Update state with the error and error info
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI when an error occurs
      return (
        <View>
          <Text>Error occurred!</Text>
          <Text>{this.state.error && this.state.error.toString()}</Text>
          <Text>{this.state.errorInfo.componentStack}</Text>
        </View>
      );
    }
    // Render the children normally if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
