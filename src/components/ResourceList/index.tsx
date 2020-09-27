import * as S from './styles'
import { HTMLAttributes } from 'react'
import ResourceItem from "components/ResourceItem"


export type ResourceListProps = {
  info: string[]
} & HTMLAttributes<HTMLUListElement>

const ResourceList = ({info}:ResourceListProps) => (
  <S.Wrapper>
    {info.map(url =><ResourceItem key={url} url={url} />)}
  </S.Wrapper>
)

export default ResourceList
