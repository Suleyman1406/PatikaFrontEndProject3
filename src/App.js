import styled from "styled-components";
import CyrptoList from "./Components/CyrptoList";
import PageChanger from "./Components/PageChanger";
import Search from "./Components/Search";

const Container = styled.div`
  background-image: url("images/backgroundImage.jpg");
  background-color: #cccccc;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 450px) {
    padding: 30px 0;
  }
  @media only screen and (max-width: 350px) {
    padding: 10px 0;
  }
`;
const CryptoCard = styled.div`
  width: 60%;
  height: fit-content;
  z-index: 1000;
  background-color: #cfd8dc;
  border-radius: 5px;
  padding: 8px 20px;
  box-shadow: rgba(255, 255, 255, 1) 0px 3px 20px;
  transition: 0.5s all;
  @media only screen and (max-width: 1400px) {
    width: 80%;
  }
  @media only screen and (max-width: 950px) {
    width: 92%;
  }
  @media only screen and (max-width: 450px) {
    width: 85%;
  }
`;
function App() {
  return (
    <Container>
      <CryptoCard>
        <Search />
        <CyrptoList />
        <PageChanger />
      </CryptoCard>
    </Container>
  );
}

export default App;
