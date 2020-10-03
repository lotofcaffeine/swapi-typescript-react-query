import { HTMLAttributes } from 'react'
import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  size?: 'small' | 'medium'| 'large'
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColors
  as?: React.ElementType
} & HTMLAttributes<HTMLHeadingElement>

const Heading = ({
  children,
  size = 'small',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  ...props
}: HeadingProps) => (
  <S.Wrapper size={size}
  lineLeft={lineLeft}
  lineBottom={lineBottom}
  lineColor={lineColor}
  {...props}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Heading
