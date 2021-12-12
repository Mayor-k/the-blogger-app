import "./settings.css";
import Sidebar from "../../sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrap">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Account</span>
                <span className="settingsDeleteTitle">Delete account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                <img src="https://images.pexels.com/photos/4448862/pexels-photo-4448862.jpeg?cs=srgb&dl=pexels-vlada-karpovich-4448862.jpg&fm=jpg" alt="" />

                <label htmlFor="fileInput">
                   < i className=" settingsPPIcon fas fa-user"/>
                </label>
                    <input type="file" id="fileInput" style={{ display: "none" }}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Jane Doe" />
                <label>Email</label>
                <input type="email" placeholder="janedoe@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
                </form>
                </div>
            <Sidebar/>
            
        </div>
    )
}
