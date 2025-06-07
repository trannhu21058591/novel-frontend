import { Outlet } from 'react-router-dom';
import '../App.css';
const MainLayout = () => {
    return (
        <div className="main-layout h-full w-full">
          <Outlet />
        </div>
    );
};

export default MainLayout;