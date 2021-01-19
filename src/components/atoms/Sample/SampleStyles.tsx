import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const StyledSample_01: React.FC = styled.div`
  color: ${prop('color', 'red')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledSample_01;
