import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Home from "../pages/landing/Home";
import Promotions from "../pages/landing/Promotions";
import About from "../pages/landing/About";
import Product from "../pages/landing/Product";
import Pricing from "../pages/landing/Pricing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../features/dashboard/index";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/promotions" component={Promotions} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
        <Route path="/*" component={Login} />
        <Route path="/" exact component={Login} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
