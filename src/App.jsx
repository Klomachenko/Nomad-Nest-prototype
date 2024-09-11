import './App.css';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0064ff;
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
      <Logo
        src='https://i.ibb.co/b7Q9QYZ/Nomad-Nest-logo-white.png'
        alt='main-logo'
      />
      <MenuContainer>
        <MenuListImg
          src='https://i.ibb.co/Xzk5RBp/CNU-Sport-Center.png'
          onClick={() =>
            goToPage(
              'https://proud-almanac-29b.notion.site/How-to-use-Sport-Center-2b9cd4f803aa4793a0eb66a23f25fb8f?pvs=4'
            )
          }
        />
        <MenuListImg
          src='https://i.ibb.co/Y0sTwmJ/Airport-to-Gwangju.png'
          onClick={() =>
            goToPage(
              'https://proud-almanac-29b.notion.site/Airport-to-Gwangju-2567ca62579b4b06bcff00f39ae7970f?pvs=4'
            )
          }
        />
        <MenuListImg
          src='https://i.ibb.co/QJmD6qF/Gwangju-to-CNU.png'
          onClick={() => goToPage('https://proud-almanac-29b.notion.site/')}
        />
        <MenuListImg
          src='https://i.ibb.co/4T7Wzkj/Dorm-move-in.png'
          onClick={() =>
            goToPage(
              'https://proud-almanac-29b.notion.site/Dormitory-move-in-19957d10c49f4e2db038c755057e39d4?pvs=4'
            )
          }
        />
        <MenuListImg
          src='https://i.ibb.co/H2LPZRW/Buy-daily-products.png'
          onClick={() =>
            goToPage(
              'https://proud-almanac-29b.notion.site/Buy-daily-necessities-d8696737c1ea46e7a548747ad9f8256c?pvs=4'
            )
          }
        />
      </MenuContainer>
    </Container>
  );
}

export default App;
