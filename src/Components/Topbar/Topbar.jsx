import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";

export default function Topbar() {
	const { user, dispatch } = useContext(Context);

	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};
	return (
		<div className="top">
			<div className="topLeft">
				<i className=" topIcon fab fa-facebook-square"></i>
				<i className=" topIcon fab fa-twitter-square"></i>
				<i className=" topIcon fab fa-instagram-square"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link className="link" to="/">
							Home
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/">
							About
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/">
							Contact
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/write">
							Write
						</Link>
					</li>
					<li className="topListItem" onClick={handleLogout}>
						{user && "logout"}
					</li>
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<img
						className="topImg"
						src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?cs=srgb&dl=pexels-pixabay-38554.jpg&fm=jpg"
						alt=""
					/>
				) : (
					<ul className="topList">
						<li className="topListItem">
							<Link className="link" to="/login">
								Login
							</Link>
						</li>
						<li className="topListItem">
							<Link className="link" to="/register">
								Register
							</Link>
						</li>
					</ul>
				)}

				<i className="topSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
}
