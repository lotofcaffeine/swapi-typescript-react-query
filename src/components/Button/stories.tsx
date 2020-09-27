import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    disabled:{
      type: "boolean"
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Gimmi more!'
}

export const Disabled: Story = (args) => <Button {...args} />

Disabled.args = {
  children: 'My job is done here',
  disabled: true
}
