import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const HelloStory: Story = {
  args: {
    children: 'Hello',
  },
};

export const StyledHello: Story = {
  args: {
    // 다른 스토리의 args 가져와 사용하기
    ...HelloStory.args,
    styles: {
      backgroundColor: 'skyblue',
    },
  },
};
