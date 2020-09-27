import {  LiHTMLAttributes } from 'react'
import { useResourceQuery } from 'lib/SwReactQuery'
import { Film, Resource } from '../../models'
import * as S from './styles'
import { ResourceWithName } from 'models/ResourceWithName'

export type ResourceItemProps = {
  url: string
} &  LiHTMLAttributes<HTMLLIElement>

const ResourceItem = ({url}:ResourceItemProps) => {


const { isSuccess, data } = useResourceQuery<Resource>(url)
if(!data){
  return null
}

  return(
  <S.Wrapper>
    {isSuccess &&
    <p>{data?.type === 'films'?(data as Film).title:(data as ResourceWithName).name}</p>
    }
  </S.Wrapper>
 )
}

export default ResourceItem
