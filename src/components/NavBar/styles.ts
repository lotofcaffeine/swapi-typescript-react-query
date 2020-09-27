import {logoWrapper as logo} from "components/Logo/styles"
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.menu`
  ${() => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  `}
  background-color: rgb(30,30,30);
  z-index: 20;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

`
export const LogoWrapper = styled.div`

  width: 98%;
  max-width: 768px;
  margin: 0 auto;
  position: relative;

`

export const Pair = styled.a`
  display: flex;
  flex-direction: column;
  width: 15%;
  align-items: center;
  transition: filter 250ms ease-in-out;
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0;
  `}
  .go-home{
    position: absolute;
    padding-top: 55px;
    padding-left: 35px;
  }
  ${media.lessThan('medium')`
  .go-home{
    padding-top: 60px;
    padding-left: 20px;
  }
  `}

  &:hover{
    ${logo}{
      filter: brightness(150%);
    }
  }
`
