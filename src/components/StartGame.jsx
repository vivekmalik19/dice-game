import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/006/158/826/small_2x/dice-on-black-background-photo.jpg" />
      </div>
      <div className="content">
        <h1>WELCOME, LET'S START!!</h1>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 100vw;
  max-height; 100vh;
  background: black;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  

  .content {
    h1 {
    color: white;
      font-size: 76px;
      white-space: nowrap;
    }
  }
`;