import { Outlet } from 'react-router-dom';
import '../App.css';
import Navbar from '../components/Navbar';
const MainLayout = () => {
    return (
        <div className="main-layout h-full w-full">
          <Navbar />
          <Outlet />
        </div>
    );
};

export default MainLayout;