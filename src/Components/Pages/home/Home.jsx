import Header from "../../header/Header";
import Sidebar from "../../sidebar/Sidebar";
import "./home.css";
import Posts from "../../posts/Posts";
import axios from "axios";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

export default function Home() {
	const [posts, setPosts] = useState([]);
	const { search } = useLocation();

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get("/posts");
			console.log(res);
		};
		fetchPosts();
	}, []);
	return (
		<>
			<Header />
			<div className="home">
				<Posts />
				<Sidebar />
			</div>
		</>
	);
}
