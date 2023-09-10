import styled from 'styled-components';

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
`;

const options = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

export default function HeaderOptions() {
  return (
    <Options>
      { options.map((item) => {
        return (<Option><p> {item} </p></Option>);
      })}
    </Options>
  );
}