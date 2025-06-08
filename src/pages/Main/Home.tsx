
import Navbar from "../../components/Navbar";
import { NovelCard } from "../../components/Novel-Card";
const Home = () => {
    return (
        <div className="main-layout">
            <Navbar />
            <div className="home pt-[80px] px-[60px]">
                <NovelCard />
            </div>
        </div>
    );
};

export default Home;

   