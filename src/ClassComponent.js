import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ClassComponent extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.message}</Text>
      </View>
    );
  }
}

export default ClassComponent;