import "./header.css";

export default function Header() {
	return (
		<div className="header">
			<div className="headerTitles">
				{/* <span className="headerTitlesm">React and Node</span> */}
				<span className="headerTitlelg">Blog</span>
			</div>
			<img
				className="headerImg"
				src="https://images.pexels.com/photos/270756/pexels-photo-270756.jpeg?cs=srgb&dl=pexels-pixabay-270756.jpg&fm=jpg"
				alt=""
			/>
		</div>
	);
}
