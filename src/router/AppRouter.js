import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "../utils/privateRoute";
import PublicRoute from "../utils/PublicRoute";

// import Home from "../pages/landing/Home";
import About from "../pages/landing/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Tour from "../pages/Tour";
import App from "../features/app/index";
import ProductSpotlight from "../features/productSpotlight/index";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/app" component={App} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/register" component={Register} />
        <PublicRoute path="/tour" component={Tour} />
        <Route path="/blog" component={About} />
        <Route path="/product-spotlight" component={ProductSpotlight} />
        <PublicRoute path="/*" component={Login} />
        <PublicRoute path="/" exact component={Login} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
