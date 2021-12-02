import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Formatura from "../pages/Formatura";
import Casamento from "../pages/Casamento";
import Confraternizacao from "../pages/Confraternização";

const Routes = () => {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Formatura} path="/formatura" />
      <Route component={Casamento} path="/casamento" />
      <Route component={Confraternizacao} path="/confraternizacao" />
    </Switch>
  );
};

export default Routes;
