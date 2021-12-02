import "./App.css";
import Header from "./components/Header";
import Routes from "./routes";

//STYLES
import GlobalStyle from "./styles/globalStyles";
import { Container } from "@mui/material";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes />
    </div>
  );
}

export default App;
