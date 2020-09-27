import * as S from './styles'
import { HTMLAttributes, LiHTMLAttributes } from 'react'

type CardTypes =
| HTMLAttributes<HTMLDivElement>
| LiHTMLAttributes<HTMLLIElement>
| HTMLAttributes<HTMLUListElement>

export type CardProps = {
  as?: React.ElementType
} & CardTypes

const Card = ({ children, ...props }: CardProps) => (
  <S.CardWrapper {...props}>{children}</S.CardWrapper>
)

export default Card
