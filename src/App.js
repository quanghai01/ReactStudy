import "./App.css";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
import Count from "./components/state/Count";

import Game from "./components/tictactoe/Game";

import Toggle from "./components/toggle/Toggle";
import Binding from "./components/two-way/Binding";
import Todo from "./components/two-way/Todo";
import Content from "./components/useEffect/Content";

import YoutubeList from "./components/youtube/YoutubeList";
function App() {
  return (
    <div className="">
      <Count></Count>
      <YoutubeList></YoutubeList>
      <Toggle></Toggle>

      <Game></Game>
      {/*  */}

      <Button>Primary</Button>
      <Button se>Secondary</Button>

      <CardList>{/* <Card></Card> */}</CardList>

      {/* f8 two-way */}

      <Binding></Binding>

      <Todo></Todo>

      <Content></Content>
    </div>
  );
}

export default App;
