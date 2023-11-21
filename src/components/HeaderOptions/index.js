import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Options = styled.ul`
  display: flex;
`;

const Option = styled.li`
  font-size: 16px;
  min-width: 120px;
  text-align: center;
  align-items: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const options = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'];

export default function HeaderOptions() {
  return (
    <Options>
      { options.map((item) => {
        return (<Link to={`/${item.toLowerCase()}`}><Option><p> {item} </p></Option></Link>);
      })}
    </Options>
  );
}