import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { space, color, typography } from 'styled-system';

const StyledView = styled.View`
  ${space}
  ${color}
`;

const StyledText = styled.Text`
  ${typography}
  ${color}
`;

const StyledSystemExample = () => {
  return (
    <StyledView p={2} bg="lightblue">
      <StyledText fontSize={20} fontWeight="bold" color="black">
        Hello, world!
      </StyledText>
    </StyledView>
  );
};

export default StyledSystemExample;
