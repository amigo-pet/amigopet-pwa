import { Main } from "@components/common/main/main";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./global";
import { Routes } from "./routes/route";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Routes />
      </Main>
    </ThemeProvider>
  );
}

export default App;
