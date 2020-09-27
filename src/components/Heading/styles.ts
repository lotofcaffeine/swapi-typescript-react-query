import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps, LineColors } from '.'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.small};
  `,
  medium: (theme: DefaultTheme) => css`
   margin-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.xlarge};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxxlarge};
    }
    `}

  `,
    lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,
  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    display: inline-block;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 1px;
      bottom: 1px;
      background-color: ${theme.colors[lineColor]};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineColor,lineLeft, size, lineBottom }) => css`

    color: ${theme.colors[color!]};
    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)}
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
