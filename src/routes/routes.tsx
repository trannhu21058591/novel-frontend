import {Routes, Route} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Main/Home';
import NovelDetail from '../pages/Main/NovelDetail';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="novel/:id" element={<NovelDetail />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
