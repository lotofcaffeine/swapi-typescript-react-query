import Card from "components/Card"
import Heading from "components/Heading"
import * as S from './styles'
import { HTMLAttributes } from 'react'


type ResourceCardProps = {
  title:string
}&  HTMLAttributes<HTMLDivElement>

const ResourceCard = ({children, title}:ResourceCardProps) => (
  <S.Wrapper>
     <Card>
     <Heading as="h2" lineColor="secondary" lineLeft >{title}</Heading>
     <S.ResourceChildren>
     {children}
     </S.ResourceChildren>
    </Card>
  </S.Wrapper>
)

export default ResourceCard
