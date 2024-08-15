import Form from '.';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

const meta: Meta<typeof Form> = {
  component: Form,
  title: 'Auth/Form',
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {};

export const OnlyIdinput: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const idInput = canvas.getByTestId('id-input');
    const submitButton = canvas.getByTestId('submit-button');
    await userEvent.type(canvas.getByTestId('id-input'), 'test');
    expect(submitButton).toBeDisabled();
  },
};
// export const OnlyPasswordInput: Story = {};
// export const BothInput: Story = {};

// export const WrongId: Story = {};
// export const WrongPassword: Story = {};
// export const WrongBoth: Story = {};
