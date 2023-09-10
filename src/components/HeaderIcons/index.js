import perfil from '../../assets/perfil.svg';
import sacola from '../../assets/sacola.svg';
import styled from 'styled-components';

const Icons = styled.ul`
  display: flex;
  align-items: center;
`;
const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const icons = [perfil, sacola];

export default function HeaderIcon() {
  return (
    <Icons>
      { icons.map((icon) => {
        return (<Icon><img src={icon} alt='Ícone'></img></Icon>);
      }) }
    </Icons>
  );
}