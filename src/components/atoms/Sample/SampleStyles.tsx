import React from 'react';
import styled from 'styled-components';
import { IStyledComponentProps } from 'styled-components-props';
import { prop, theme, palette } from 'styled-tools';

const StyledSample_01: React.FC = styled.div<IStyledComponentProps>`
  color: ${prop('color', 'red')};
  border: 1px solid ${({ borderColor }) => borderColor && palette(borderColor)};
  background: ${({ backgroundColor }) => theme(`palette.${backgroundColor}`, 'red')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledSample_01;
