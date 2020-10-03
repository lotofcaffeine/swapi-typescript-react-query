import * as S from './styles'
import Card from 'components/Card'
import Link from 'next/link'
import { Character } from 'models'
import { HTMLAttributes } from 'react'

export type DataContainerProps = {
  items: Character[]
} & HTMLAttributes<HTMLUListElement>

const DataContainer = ({ items }: DataContainerProps) => (
  <S.Wrapper>
    {items?.map((item: Character) => (
      <Card as="li" key={item.name}>
        <Link href={`/characters/${item.id}`}>
          <a>{item.name}</a>
        </Link>
      </Card>
    ))}
  </S.Wrapper>
)

export default DataContainer
