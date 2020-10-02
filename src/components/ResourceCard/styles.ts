import styled from 'styled-components'
import {CardWrapper} from "components/Card/styles"
export const Wrapper = styled.div`
   ${CardWrapper}{
    margin-bottom:20px;
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    padding: 20px 0 20px 20px;
   }
`
export const ResourceChildren = styled.div`
   width: 100%;
`
