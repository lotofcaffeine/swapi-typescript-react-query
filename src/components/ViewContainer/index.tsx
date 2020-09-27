import * as S from './styles'

const ViewContainer:React.FC = ({children}) => (
  <S.Wrapper>
    <S.Border>
    <S.InnerBorder>
      {children}
      </S.InnerBorder>
    </S.Border>
  </S.Wrapper>
)

export default ViewContainer
