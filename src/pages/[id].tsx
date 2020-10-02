
import { useRouter } from 'next/router'
import { Character } from 'models'
import ViewContainer from 'components/ViewContainer'
import Heading from 'components/Heading'
import CharacterLoader from "components/CharacterLoader"
import ResourceCard from "components/ResourceCard"
import ResourceList from "components/ResourceList"
import React  from 'react'
import Button from "components/Button"
import { fetchResourceById } from 'lib/SwApi'


export default function CharacterPage({data}:{data:Character}) {
  const router = useRouter()
  if(router.isFallback)
    return <p>Loading...</p>
  return (
    <ViewContainer>

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

    </ViewContainer>
  )
}

export async function getStaticPaths(){

  const array = Array.from(Array(10).keys())
  const paths  =  array.map(id=>{
   return {params: {id: `${id+1}`}}
  })

  return{
    paths,
    fallback:true
  }
}

export async function getStaticProps(context:{params:{id:string}}) {

      const {id} = context.params
      const data = await fetchResourceById<Character>(id, "people")

  return{
     props: { data }
  }
}

