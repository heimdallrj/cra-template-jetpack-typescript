import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Design System/Canvas',
  argTypes: {},
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<any>;

const Template: ComponentStory<any> = ({ children, ...args }: any) => {
  return (
    <div>
      <div>
        <h1>h1 Header</h1>
        <h2>h2 Header</h2>
        <h3>h3 Header</h3>
        <h4>h4 Header</h4>
        <h5>h5 Header</h5>
        <h6>h6 Header</h6>
      </div>

      <div>
        <p>
          <strong>
            Important text: in bibendum vestibulum lacinia. Nulla varius mi et
            eros porttitor, eget tempor mi pulvinar. Donec molestie et neque
            quis gravida.
          </strong>{' '}
          Donec ut tellus dictum, aliquam libero vitae, aliquam ipsum. Duis
          posuere finibus sem ut posuere.{' '}
          <b>
            Bold text: cras quis lorem eget sapien ornare sodales a et enim.
            Aliquam mattis vel ex non mollis.
          </b>{' '}
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos.{' '}
          <mark>
            Marked text: aliquam condimentum urna iaculis consectetur lobortis.
            Sed gravida arcu at magna cursus, in eleifend massa dapibus.
            Praesent fermentum, augue sed tempor aliquet, odio dolor blandit
            dui, ac vulputate orci tellus sit amet purus.
          </mark>{' '}
          Maecenas non leo tortor.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
          lectus.{' '}
          <del>
            Deleted text: pellentesque risus lectus, elementum non leo et,
            eleifend vehicula mauris.
          </del>{' '}
          Phasellus{' '}
          <ins>
            Inserted text: posuere imperdiet risus, sed maximus quam. Integer
            laoreet fermentum venenatis.
          </ins>{' '}
          Curabitur eu span luctus nibh.{' '}
          <u>
            Underline text: donec ornare metus nec posuere small vestibulum.
            Morbi vel sagittis nisl.
          </u>{' '}
          Sed facilisis posuere libero, a blandit elit ornare vitae. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Curabitur vitae velit quam.{' '}
          <em>Emphasized text: nullam ac dapibus tellus.</em> Aenean interdum
          vestibulum pulvinar. Integer commodo a mauris sit amet convallis.{' '}
          <i>
            Italic: phasellus ultricies ex mattis, ultrices ex a, malesuada
            neque. Nunc odio odio, tincidunt sit amet velit a, finibus facilisis
            lectus.
          </i>{' '}
          Nam id erat turpis.
        </p>

        <p>
          Nullam <span>span: Inline container</span> vitae leo{' '}
          <sup>Superscript</sup> risus blandit pharetra at <sub>Subscript</sub>{' '}
          non nisi. Sed fermentum metus sed aliquet efficitur. Nulla sodales
          sapien massa, ut facilisis dui iaculis ut.{' '}
          <small>
            Smaller text: sed libero eros, facilisis non tempor suscipit,
            interdum eu leo.
          </small>{' '}
          Praesent a porta nibh. Pellentesque ac leo eget arcu vehicula semper.
          Morbi in dolor lectus. Vivamus pharetra dolor eu urna egestas
          vehicula. Suspendisse efficitur massa leo, sed feugiat risus egestas
          quis. Fusce sit amet purus libero.{' '}
          <big>Donec sed leo eget metus congue blandit.</big> Phasellus ultrices
          lobortis arcu non ultrices. Nullam sed odio est. Etiam vitae fringilla
          urna.
        </p>
      </div>
    </div>
  );
};

export const Story = Template.bind({});
Story.args = {};
