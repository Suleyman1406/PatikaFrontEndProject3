import styled from "styled-components";
import CyrptoList from "./Components/CryptoTable/CryptoTable";
import Footer from "./Components/Footer/Footer";
import PageChanger from "./Components/PageChanger/PageChanger";
import Search from "./Components/Search/Search";

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
  flex-direction: column;
  padding: 50px 0 0;
  @media only screen and (max-width: 450px) {
    padding: 30px 0 0;
  }
  @media only screen and (max-width: 350px) {
    padding: 10px 0 0;
  }
`;
const CryptoCard = styled.div`
  width: 60%;
  height: fit-content;
  z-index: 1000;
  background-color: rgba(207, 216, 220);
  border-radius: 5px;
  padding: 8px 20px;
  box-shadow: rgba(255, 255, 255, 1) 0px 3px 20px;
  transition: 0.5s all;
  margin-bottom: 50px;
  @media only screen and (max-width: 1400px) {
    width: 80%;
  }
  @media only screen and (max-width: 950px) {
    width: 85%;
  }
  @media only screen and (max-width: 400px) {
    width: 80%;
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
      <Footer />
    </Container>
  );
}

export default App;
