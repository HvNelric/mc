import type { Meta, StoryObj } from '@storybook/react';

import Btn from './Btn';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Button/Btn',
  component: Btn,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof Btn>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Href: Story = {
  args: {
    label: 'href',
    href: 'https://www.google.fr'
  },
};

export const Bouton: Story = {
  args: {
    label: 'Bouton',
    fn: () => console.log('Bouton')
  },
};