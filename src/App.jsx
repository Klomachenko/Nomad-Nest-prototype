import { useNavigate } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2d9950;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.625rem;
`;

const Logo = styled.img`
  width: 2.5rem;
  height: 2.125rem;
  margin-top: 0.625rem;
`;

const MenuContainer = styled.div`
  width: 18.25rem;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.625rem;
  gap: 1.5625rem;
  padding-top: 1.5625rem;
  padding-bottom: 1.5625rem;
`;

const MenuListImg = styled.img`
  width: 15.8125rem;
  height: 5.9375rem;
  border-radius: 0.3125rem;
  cursor: pointer;
`;

function App() {
  const goToPage = (url) => {
    window.location.href = url;
  };

  return (
    <Container>
      <Logo src='src/assets/NomadNestLogo.png' alt='main-logo' />
      <MenuContainer>
        <MenuListImg
          src='src/assets/Airport-to-Gwangju.png'
          onClick={() =>
            goToPage(
              'https://proud-almanac-29b.notion.site/Airport-to-Gwangju-2567ca62579b4b06bcff00f39ae7970f?pvs=4'
            )
          }
        />
        <MenuListImg
          src='src/assets/Gwangju-to-CNU.png'
          onClick={() => goToPage('https://proud-almanac-29b.notion.site/')}
        />
        <MenuListImg src='src/assets/Dorm move-in.png' />
        <MenuListImg src='src/assets/Buy daily products.png' />
      </MenuContainer>
    </Container>
  );
}

export default App;
