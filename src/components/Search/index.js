import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react';
import { books } from './data';

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Title = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  p, img {
    width: 200px;
  }

  &:hover {
    border: 1px solid white;
  }
`;

export default function Search() {
  const [booksList, setBooksList] = useState([]);

  return  (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
      <Input
        placeholder="Encontre sua próxima leitura"
        onBlur={(event) => {
          setBooksList(books.filter(book => book.name.toUpperCase().includes(event.target.value.toUpperCase())));
        }}  
      />
      { booksList.map(book => (
        <Result>
          <p>{ book.name }</p>
          <img src={ book.src } alt='Livro'/>
        </Result>
      )) }
    </SearchContainer>
  );
}