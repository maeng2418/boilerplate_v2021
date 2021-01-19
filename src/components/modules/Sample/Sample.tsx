import React from 'react';
import styles from './Sample.module.scss';
import classNames from 'classnames/bind';
import StyledSample_01 from './SampleStyles';

const cx = classNames.bind(styles);

const Sample: React.FC = (props) => {
  return (
    <div className={cx('sample')}>
      <StyledSample_01 {...props}>샘플 모듈</StyledSample_01>
    </div>
  );
};

export default Sample;
