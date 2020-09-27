import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'
type WrapperProps = Pick<ButtonProps, 'size'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  disabled: (theme: DefaultTheme) => css`
    background: ${theme.colors.gray};
    transition: filter 250ms ease-in-out;
    cursor: not-allowed;

`

}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #ff5f5f 0%, #f231a5 50%);
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    transition: background 250ms ease-in-out;
     outline: 2px solid transparent;
    ${!!size && wrapperModifiers[size](theme)};
    ${!!disabled && wrapperModifiers.disabled(theme)};
    &:hover{
      filter: brightness(150%);
    }
  `}
`
