import styled, { css } from 'styled-components'

export const Wrapper = styled.ul`
 ${({ theme}) => css`
  font-size: ${theme.font.sizes.large};
 `}
  list-style: none;
  margin-bottom: 30px;
  li + li {
    margin-top: 20px;
  }

  a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    padding: 30px;
    color: white;
    background-color: rgb(25, 25, 25);
    transition: filter 250ms ease-in-out;
    }
  }
  a:hover {
    filter: brightness(120%);
  }
`
