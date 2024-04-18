import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  background-color: lightblue;
  padding: 10px;
`;

const StyledText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

const StyledComponentExample = () => {
  return (
    <StyledView>
      <StyledText>Hello, world!</StyledText>
    </StyledView>
  );
};

export default StyledComponentExample;
