import React from 'react';
import StyledSample_01 from './SampleStyles';

const Sample: React.FC = (props) => {
  return (
    <div>
      <StyledSample_01 {...props}>샘플 모듈</StyledSample_01>
    </div>
  );
};

export default Sample;
