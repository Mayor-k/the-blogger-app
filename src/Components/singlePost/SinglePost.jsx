import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostwrap">
                <img className="singlePostImg" src="https://images.pexels.com/photos/5833889/pexels-photo-5833889.jpeg?cs=srgb&dl=pexels-james-wheeler-5833889.jpg&fm=jpg" alt="" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                  <i className=" singlePostIcon far fa-edit"></i>
                  <i className=" singlePostIcon far fa-trash-alt"></i>  
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Jane Doe</b></span>
                    <span className="singlePostdate"> 1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum alias ipsum commodi fuga nemo ab sequi provident qui est error quidem corrupti porro laudantium quos, corporis maiores explicabo esse illo ducimus cupiditate dignissimos modi expedita dolorum excepturi? Corrupti dolores, praesentium error illo quibusdam optio repellat quidem molestias at quasi dolore maiores dolor quo, reprehenderit, deleniti voluptate vel? Beatae quae ad illo ea iure et porro fugiat, ullam, amet distinctio, reiciendis cumque qui neque quidem esse dolorem nobis architecto ratione quisquam provident atque tenetur tempora? Assumenda molestias accusantium cumque facilis, eos cum debitis quia ipsa sunt vitae inventore enim rerum at, laboriosam, placeat hic quisquam recusandae fugit maxime perspiciatis impedit necessitatibus alias modi. At quo dolorem optio, unde aspernatur id officia porro, delectus repellat molestias ab maiores tenetur, explicabo sint saepe debitis ipsum facilis. Enim distinctio maiores eum ab voluptate magni commodi tenetur, accusamus impedit blanditiis quam officia nulla neque quia!</p>
            </div>
            
        </div>
    )
}
