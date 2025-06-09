
import Navbar from "../../components/Navbar";
// import { NovelCard } from "../../components/NovelCard";
import NovelDetail from "./NovelDetail";
const Home = () => {
    return (
        <div className="main-layout h-auto w-max-screen">
            <Navbar />
            <div className="home pt-[80px]">
                {/* <NovelCard /> */}
                <NovelDetail />
            </div>
        </div>
    );
};

export default Home;

   