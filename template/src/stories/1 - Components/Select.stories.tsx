import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '@jetpack/react';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {},
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: any) => {
  return <Select {...args} />;
};

export const Story = Template.bind({});
Story.args = {
  label: 'Number',
  value: '3',
  options: [
    { value: '1', label: 'one' },
    { value: '2', label: 'two' },
    { value: '3', label: 'three' },
    { value: '4', label: 'four' },
  ],
};
