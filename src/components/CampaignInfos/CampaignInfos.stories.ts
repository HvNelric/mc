import type { Meta, StoryObj } from '@storybook/react';
import '../../index.scss';
import CampaignInfos from './CampaignInfos';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'CampaignInfos',
  component: CampaignInfos,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
}

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Test: Story = {
  args: {
    questionNumber: 45,
    dateEnd: new Date("11/27/2023")
  }
}

