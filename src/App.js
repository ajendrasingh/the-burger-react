import React, { Component } from "react";
import Layout from "./components/Layouts/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";

class App extends Component {
  // state = { //added just to test to remove interceptors
  //   show: true,
  // };
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 5000);
  // }

  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/login" component={Auth}></Route>
        <Route path="/" exact component={BurgerBuilder}></Route>
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/orders" component={Orders}></Route>
          <Route path="/" exact component={BurgerBuilder}></Route>
          <Route path="/login" component={Auth}></Route>
          <Route path="/logout" component={Logout}></Route>
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div className="App">
        <div>
          {/* <Layout>{this.state.show ? <BurgerBuilder /> : null}</Layout> will use when have to remove unused axios interceptors in big application*/}
          <Layout>{routes}</Layout>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token != null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
