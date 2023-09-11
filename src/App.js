import Header from './components/Header/index.js';
import Search from './components/Search/index.js';
import Latest from './components/Latest/index.js';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vw;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <Latest />
    </AppContainer>
  );
}

export default App;