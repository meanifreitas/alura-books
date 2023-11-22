import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavorites } from '../services/favorites';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vw;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`;

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function fetchFavorites() {
    setFavorites(await getFavorites());
  }
  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <AppContainer>
      {favorites.map((favorite) => {
        return (<p>{favorite.name}</p>)
      })}
    </AppContainer>
  );
}

export default Favorites;