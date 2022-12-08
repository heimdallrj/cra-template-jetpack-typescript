import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion as Component, AccordionItem } from '@jetpack/react/generics';

export default {
  title: 'Components/Generics/Accordion',
  component: Component,
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Component>;

// eslint-disable-next-line no-empty-pattern
const Template: ComponentStory<typeof Component> = ({}) => {
  return (
    <Component>
      <AccordionItem summary='Item 1'>Item 1 Contents</AccordionItem>
      <AccordionItem summary='Item 2'>Item 2 Contents</AccordionItem>
      <AccordionItem summary='Item 3'>Item 3 Contents</AccordionItem>
    </Component>
  );
};

export const Story = Template.bind({});
