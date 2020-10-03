
import { useResourceQueryById } from 'lib/SwReactQuery'
import { useRouter } from 'next/router'
import { Character } from 'models'
import ViewContainer from 'components/ViewContainer'
import Heading from 'components/Heading'
import CharacterLoader from "components/CharacterLoader"
import ResourceCard from "components/ResourceCard"
import ResourceList from "components/ResourceList"
import React  from 'react'
import Button from "components/Button"

export default function CharacterPage() {
  const router = useRouter()
  const { id } = router.query
  const { isLoading, data , isError} = useResourceQueryById<Character>(
    id as string,
    'people', {
      enabled: !!id && Number.isInteger(id),
    }
  )
  console.log(isLoading, data, isError, "caralho")
  // useEffect(() => {

  //   if(id && Number.isInteger(id)) {
  //     setState(id as string)
  //   }
  // }, [id, state])

  // if(!id){
  //   return null;
  // }
  //  console.log("id", id)
  //  console.log("Number.isInteger", !Number.isInteger(id) )
  //  console.log(" Number(id) > 83",  Number(id) > 83)
  // if(isError || !(Number.isInteger(id))){
  //   console.log("entrou aqi")
  //   console.log(isError)
  //  router.push("/404")
  // }

  return (
    <ViewContainer>
      {isLoading ? (
       <Heading as="h1">Loading</Heading>
      ) : (
        <>
        <Heading as="h1" size="medium" lineBottom>{data?.name}</Heading>
        <ResourceCard title="Attributes">
          {data && <CharacterLoader character={data}/>}
        </ResourceCard>

        {!!data?.species.length &&<ResourceCard title="Species">
            <ResourceList info={data.species}/>
          </ResourceCard>}

        {!!data?.starships.length && <ResourceCard title="Starships">
            <ResourceList info={data.starships}/>
          </ResourceCard>}

         {!!data?.vehicles.length && <ResourceCard title="Vehicles">
              <ResourceList info={data.vehicles}/>
           </ResourceCard>}

        {!!data?.films.length && <ResourceCard title="Films">
              <ResourceList info={data.films}/>
          </ResourceCard>}
          <div>
          <Button onClick={() => router.back()}>Go back</Button>
          </div>

        </>
      )}

    </ViewContainer>
  )
}
