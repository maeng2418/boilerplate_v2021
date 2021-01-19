import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import Sample from './Sample';

export default {
  title: 'Sample',
  component: Sample,
} as Meta;

const Template: Story = (args) => <Sample {...args} />;

export const Sample_01 = Template.bind({});
Sample_01.args = {
  // props를 넣어주세요.
};
