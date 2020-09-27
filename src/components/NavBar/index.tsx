import * as S from './styles'
import Logo from 'components/Logo'
import Link from 'next/link'

const NavBar = () => (
  <S.Wrapper>
    <S.LogoWrapper>
      <Link href="/">
        <S.Pair>
          <Logo />
          <label className="go-home">Home</label>
        </S.Pair>
      </Link>
    </S.LogoWrapper>
  </S.Wrapper>
)

export default NavBar
