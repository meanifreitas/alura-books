import { books } from './data.js';
import styled from 'styled-components';
import { Title } from '../Title/index.js';
import Card from '../Card/index.js';
import livro2 from '../../assets/livro2.png';

const LatestContainer = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NewestContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

export default function Latest() {
  return (
    <LatestContainer>
      <Title color='#EB9B00'>ÚLTIMOS LANÇAMENTOS</Title>
      <NewestContainer>
        { books.map((book) => {
          return <img src={ book.src } alt='Livro'/>
        })}
      </NewestContainer>
      <Card
        title='Talvez você goste'
        subtitle='Angular 11'
        description='Construindo uma aplicação integrada com o Google'
        img={ livro2 }/>
    </LatestContainer>
  );
}