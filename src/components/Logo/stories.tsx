import { Story, Meta } from '@storybook/react/types-6-0'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color:{
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary'],
      },
    }
  }
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />

