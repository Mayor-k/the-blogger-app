import Topbar from "./Components/Topbar/Topbar";
import Home from "./Components/Pages/home/Home";
import Login from "./Components/Pages/login/Login";
import Write from "./Components/write/Write";
import Settings from "./Components/Pages/settings/Settings";
import Single from "./Components/Pages/Single/Single";
import Register from "./Components/Pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "././Components/context/Context";

function App() {
	const { user } = useContext(Context);
	return (
		<Router>
			<Topbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/register" element={user ? <Home /> : <Register />} />
				<Route path="/login" element={user ? <Home /> : <Login />} />
				<Route path="/write" element={user ? <Write /> : <Register />} />
				<Route path="/settings" element={user ? <Settings /> : <Register />} />
				<Route path="/post/:postId" element={<Single />} />
			</Routes>
		</Router>
	);
}

export default App;
