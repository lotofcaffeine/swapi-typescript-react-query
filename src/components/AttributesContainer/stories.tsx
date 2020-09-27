import { Story, Meta } from '@storybook/react/types-6-0'
import AttributesContainer from '.'

import {createCharacter, createPlanet} from "utils/tests/utils"


const luke = createCharacter()
const planetLuke = createPlanet()

export default {
  title: 'AttributesContainer',
  component: AttributesContainer,
  argTypes: {
    character:{
      control: {
        type: 'object',
      },
    },
    planet:{
      control: {
        type: 'object',
      },
    }
  }
} as Meta

export const Default: Story = (args) => <AttributesContainer character={createCharacter()} planet={createPlanet()} {...args}/>

Default.args = {
  character: luke,
  planet: planetLuke
}

