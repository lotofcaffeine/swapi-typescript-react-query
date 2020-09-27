import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, size = 'medium', ...props }: ButtonProps) => (
  <S.Wrapper size={size} {...props}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
