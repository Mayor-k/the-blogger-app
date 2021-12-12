import "./write.css"

export default function Write() {
    return (
        <div className="write">
                <img className="writeImg" src="https://images.pexels.com/photos/4448862/pexels-photo-4448862.jpeg?cs=srgb&dl=pexels-vlada-karpovich-4448862.jpg&fm=jpg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className=" writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea className="writeInput writeText" type="text" placeholder="Write a new story...."></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

