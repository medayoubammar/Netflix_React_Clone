import "./Home.scss";
import Navbar from "../components/Navbar/Navbar";
import Featured from "../components/Featured/Featured";
import List from "../components/List/List";
import Footer from "../components/footer/Footer";


function Home() {
    return (
        <div className="home">
            <Navbar />
           <Featured type={"movie"} />
           <List />
           <List />
           <List />
          <Footer />
        </div>
    );
}

export default Home;