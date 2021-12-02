import "./App.css";
import Header from "./components/Header";
import Routes from "./routes";

//STYLES
import GlobalStyle from "./styles/globalStyles";

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
