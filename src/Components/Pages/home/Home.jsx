import Header from "../../header/Header"
import Post from "../../posts/Posts"
import Sidebar from "../../sidebar/Sidebar"
import "./home.css"


export default function Home() {
    return (
        
            <>
                <Header />
            <div className="home">
                <Post/>
                <Sidebar />
             </div>
          </>
            
            
        
    )
}

