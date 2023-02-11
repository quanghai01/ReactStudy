import "./App.css";
import Button from "./components/button/Button";

import Count from "./components/state/Count";

import Game from "./components/tictactoe/Game";

import Toggle from "./components/toggle/Toggle";
import Binding from "./components/two-way/Binding";
import Todo from "./components/two-way/Todo";
import Content from "./components/useEffect/Content";
import FakeContent from "./components/FakeChat/FakeContent";
import YoutubeList from "./components/youtube/YoutubeList";
import UseRef from "./components/useRef/UseRef";
import CBContent from "./components/useCallback/CBContent";
import MemoContent from "./components/useMemo/MemoContent";
import UseReducer from "./components/useMemo/useReducer/UseReducer";
import UseContext from "./components/context/Usecontext";
import Imperative from "./components/useImperativeHandle/Imperative";
function App() {
  return (
    <div className="" style={{ padding: "0 20px" }}>
      <Count></Count>
      <YoutubeList></YoutubeList>
      <Toggle></Toggle>

      <Game></Game>
      {/*  */}

      <Button>Primary</Button>
      <Button se>Secondary</Button>

      {/* f8 two-way */}

      <Binding></Binding>

      <Todo></Todo>

      <Content></Content>

      <FakeContent></FakeContent>
      <UseRef></UseRef>
      <CBContent></CBContent>

      {/* useMemo */}
      <MemoContent></MemoContent>

      {/* UseReducer */}
      <UseReducer></UseReducer>

      {/* Context */}

      <UseContext></UseContext>

      {/* useImperative */}
      <Imperative></Imperative>
    </div>
  );
}

export default App;
