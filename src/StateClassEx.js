import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class StateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <View>
        <Text>Count: {this.state.count}</Text>
        <Button
          title="Increment"
          onPress={() => this.setState({ count: this.state.count + 1 })}
        />
      </View>
    );
  }
}

export default StateComponent;