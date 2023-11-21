import Logo from '../../components/Logo/index.js';
import HeaderOptions from '../../components/HeaderOptions/index.js';
import HeaderIcons from '../../components/HeaderIcons/index.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link to='/'><Logo /></Link >
      <HeaderOptions />
      <HeaderIcons />
    </HeaderContainer>
  );
}