import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/MenuMinuman";
import Kontak from "./Page/Kontak";

const Routing = () => (

	<Router>
		<div>
		<Route path="/" exact component={ App } />
		<Route path="/menumakanan" component={ MenuMakanan } />
		<Route path="/menuminuman" component={ MenuMinuman } />
		<Route path="/kontak" component={ Kontak } />
		</div>
	</Router>

);

export default Routing;

