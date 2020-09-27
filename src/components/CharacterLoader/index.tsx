import {Character, Planet} from "models"
import { useResourceQuery } from 'lib/SwReactQuery'
import AttributesContainer from "components/AttributesContainer"

export type CharacterLoaderProps ={
  character: Character
}

const CharacterLoader = ({ character }:CharacterLoaderProps) => {

  const {data: planet, isSuccess } = useResourceQuery<Planet>(character.homeworld,  {
    enabled: !!character
  })

  return (<>
  {isSuccess && <AttributesContainer character={character} planet={planet!}/>}
  </>)
}

export default CharacterLoader
