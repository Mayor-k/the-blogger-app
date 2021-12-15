import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("http://localhost:5000/api/auth/register", {
				username,
				email,
				password,
			});
			res.data && window.location.replace("/login");
		} catch (err) {
			console.log(err);
		}
		console.log(
			`username is ${username}, email is ${email} and passowrd is ${password}`
		);
	};

	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form className="registerForm" onSubmit={handleSubmit}>
				<label>Username</label>
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className="registerInput"
					placeholder="Enter Username"
				/>
				<label>Email</label>
				<input
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="registerInput"
					placeholder="Enter email"
				/>
				<label>Password</label>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="registerInput"
					placeholder="Enter password"
				/>
				<button className="registerButton" type="submit">
					Register
				</button>
			</form>
			<button className="registerloginButton">
				<Link className="link" to="/login">
					Login
				</Link>
			</button>
		</div>
	);
}
