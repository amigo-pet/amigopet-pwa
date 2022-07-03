import { Header } from "@components/common/header/header";
import { Main } from "@components/common/main/main";
import { Routes } from "./routes/route";

function App() {
  return (
    <>
      <Header>Hello World</Header>
      <Main>
        <Routes />
      </Main>
    </>
  );
}

export default App;
