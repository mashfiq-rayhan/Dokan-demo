import "./App.module.css";
import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "./Layout/Layout";
import Login from "./Containers/Login/Login";
import CustomerDashboard from "./Containers/Dashboards/CustomerDashboard/CustomerDashboard";
import PaymentAccount from "./Containers/Dashboards/CustomerDashboard/CustomerInformation/PaymentAccount";
import SellerDashboard from "./Containers/Dashboards/SellerDashboard/SellerDashboard";
import DeliveryDashboard from "./Containers/Dashboards/DeliveryDashboard/DeliveryDashboard";
import EditProfile from "./Containers/EditProfile/EditProfile";
import Home from "./Containers/Home/Home";
import Explore from "./Containers/Explore/Explore";
import Trending from "./Containers/Trending/Trending";
import Dokans from "./Containers/Dokans/Dokans";
// Test
import Test from "./Test/Test";

const App = (props) => {
	const authToken = useSelector((state) => state.auth.token);
	
	return (
    <Fragment>
      {/* {authToken ? ( */}
        <Router>
          <Switch>
            <Layout>
              <Route path="/login" component={Login} />
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/explore" component={Explore} />
              <Route path="/trending" component={Trending} />
              <Route path="/dokans" component={Dokans} />
              <Route path="/CustomerDashboard" component={CustomerDashboard} />
              <Route path="/PaymentAccount" component={PaymentAccount} />
              <Route path="/SellerDashboard" component={SellerDashboard} />
              <Route path="/DeliveryDashboard" component={DeliveryDashboard} />
              <Route path="/EditProfile" component={EditProfile} />
            </Layout>
          </Switch>
        </Router>
       {/* ) : (
        <Router>
          <Redirect to="/login" />
          <Route path="/login" component={Login} />
        </Router>
      )} */}
    </Fragment>

	// <Fragment>
	// 	<Router>
	// 	<Route path="/" component={Login} />
	// 	<Route path="/login" component={Login} />
  //   <Route path="/home" component={Home} />
	// 	</Router>
	// </Fragment>
  
  );
};

export default App;