import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { LogoProps } from '.'

export const logoWrapper = styled.div<LogoProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
    width: 11rem;
    height: 3.3rem;
    svg {
      width: 15rem;
      height: 6rem;
    }
    ${media.lessThan('medium')`
      width:6rem;
      svg{
        height: 7rem;
        width:8rem;
      } `}
`  }

`
