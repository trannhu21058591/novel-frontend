
import Navbar from "../../components/Navbar";
import ListCard from '../../components/ListCard';

const Home = () => {
    return (
        <div className="main-layout">
            <Navbar />
            <div className="home pt-[80px] px-[60px]">
                <ListCard />
            </div>
        </div>
    );
};

export default Home;

   