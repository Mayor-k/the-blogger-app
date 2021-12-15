import "./post.css";
import { Link } from "react-router-dom";

export default function Post() {
	return (
		<div className="post">
			<img
				className="postImg"
				src="https://images.pexels.com/photos/4652275/pexels-photo-4652275.jpeg?cs=srgb&dl=pexels-taryn-elliott-4652275.jpg&fm=jpg"
				alt=""
			/>
			<div className="postInfo">
				<div className="postCategories">
					<span className="postCategory">Music</span>
					<span className="postCategory">Arts</span>
				</div>

				<span className="postTitle">Lorem ipsum dolor sit amet.</span>

				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dolorum
				expedita repellendus exercitationem mollitia animi nostrum, ullam maxime
				consectetur sequi quaerat alias veniam harum optio illum beatae eos!
				Voluptate cum officiis blanditiis quia eligendi error sed maxime facere
				veniam nesciunt temporibus, id similique inventore minus eum labore
				expedita ducimus illo.
			</p>
		</div>
	);
}
