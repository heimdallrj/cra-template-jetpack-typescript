import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '@jetpack/react';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control: { type: 'select' },
      options: [
        'b',
        'del',
        'div',
        'em',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'i',
        'ins',
        'mark',
        'p',
        'span',
        'sub',
        'sup',
        'small',
        'strong',
      ],
    },
  },
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = ({ children, ...args }: any) => {
  return (
    <div>
      <div style={{ background: 'rgb(242 240 240)', padding: '25px' }}>
        <Text {...args}>{children}</Text>
      </div>

      <div>
        <Text variant='h1'>h1 Heading</Text>
        <Text variant='h2'>h2 Heading</Text>
        <Text variant='h3'>h3 Heading</Text>
        <Text variant='h4'>h4 Heading</Text>
        <Text variant='h5'>h5 Heading</Text>
        <Text variant='h6'>h6 Heading</Text>
      </div>

      <Text variant='div'>
        <Text variant='p'>
          Lorem ipsum dolor sit amet, <Text variant='b'>Bold text</Text>{' '}
          consectetur adipiscing elit. <Text variant='del'>Deleted text</Text>{' '}
          Duis sit amet facilisis lectus. Pellentesque risus lectus, elementum
          non leo et, <Text variant='em'>Emphasized text</Text> eleifend
          vehicula <Text variant='i'>Italic text</Text> mauris. Phasellus{' '}
          <Text variant='ins'>Inserted text</Text>posuere imperdiet risus, sed
          maximus quam. Integer laoreet <Text variant='mark'>Marked text</Text>{' '}
          fermentum venenatis. Curabitur eu luctus nibh. Donec ornare{' '}
          <Text variant='span'>Inline container</Text> metus nec posuere
          vestibulum. <Text variant='sub'>Subscript text</Text> Morbi vel
          sagittis nisl. Sed facilisis posuere libero, a blandit elit{' '}
          <Text variant='sup'>Superscript text</Text> ornare vitae. Vestibulum
          ante <Text variant='u'>Underline text</Text> ipsum primis{' '}
          <Text variant='small'>Smaller text</Text> in faucibus orci luctus et
          ultrices posuere cubilia curae; Curabitur vitae velit quam. Nullam ac
          dapibus tellus. <Text variant='strong'>Important text</Text> Aenean
          interdum vestibulum pulvinar. Integer commodo a mauris{' '}
          <Text variant='big'>Important text</Text> sit amet convallis.
          Phasellus ultricies ex mattis, ultrices ex a, malesuada neque. Nunc
          odio odio, tincidunt sit amet velit a, finibus facilisis lectus. Nam
          id erat turpis.
        </Text>
      </Text>
    </div>
  );
};

export const Story = Template.bind({});
Story.args = {
  children: 'Hello World!',
  variant: 'p',
};
