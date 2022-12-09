import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button as Component } from '../../../@jetpack/react/generics';

export default {
  title: 'Components/Generics/Button',
  component: Component,
  argTypes: {},
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = ({
  children,
  ...args
}: any) => {
  return <Component {...args}>{children}</Component>;
};

export const Story = Template.bind({});
Story.args = {
  children: 'Hello',
};
