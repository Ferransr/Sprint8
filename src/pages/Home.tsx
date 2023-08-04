import Navbar from "../components/Navbar"
import welcomeGif from "../assets/img/starwars-grogu.gif"

function Home() {
    return (
        <>
            <Navbar />
            <div className="homePage">
                <img src={welcomeGif} className="welcomeGif" alt="welcomeGif" />
            </div>
        </>
    )
}

export default Home;