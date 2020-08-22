import React, { Component } from "react";
import Layout from "./components/Layouts/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  // state = { //added just to test to remove interceptors
  //   show: true,
  // };
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 5000);
  // }
  render() {
    return (
      <div className="App">
        <div>
          {/* <Layout>{this.state.show ? <BurgerBuilder /> : null}</Layout> will use when have to remove unused axios interceptors in big application*/}
          <Layout>
            <BurgerBuilder />
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
