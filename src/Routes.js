import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home.js";
import "../src/assets/css/general.css";
  

const Routes = () => {
	return (
		<>
			<BrowserRouter>
					<Switch>
                          <Route path="/" exact component={Home} />
					</Switch>
			</BrowserRouter>
		</>
	);
};

export default Routes;
