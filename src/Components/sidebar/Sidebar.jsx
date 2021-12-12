import"./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <div>
                    <img className="sidebarImg" src="https://images.pexels.com/photos/1405963/pexels-photo-1405963.jpeg?cs=srgb&dl=pexels-dellon-thomas-1405963.jpg&fm=jpg" alt="" />
                    </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, est voluptate. Impedit nisi quam eum error, aut voluptas praesentium accusantium!</p>
               
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Lifestyle</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Arts</li>
                    <li className="sidebarListItem">Family</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="socialIcon">
                <i className=" sidebarIcon fab fa-facebook-square"></i>
                <i className=" sidebarIcon fab fa-twitter-square"></i>
                <i className=" sidebarIcon fab fa-instagram-square"></i>
                    </div>
                    
            </div>
            
        </div>
    )
}
