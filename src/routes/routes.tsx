import {Routes, Route} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Main/Home';
import NovelDetail from '../pages/Main/NovelDetail';
import ChapterContent from '../pages/Main/ChapterContet';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="novel/:id" element={<NovelDetail />} />
                <Route path="chapter" element={<ChapterContent />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
