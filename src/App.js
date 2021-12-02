import "./App.css";
import Header from "./components/Header";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";

//STYLES
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <div>
      <Toaster />
      <GlobalStyle />
      <Header />
      <Routes />
    </div>
  );
}

export default App;
