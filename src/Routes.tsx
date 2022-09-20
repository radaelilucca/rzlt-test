import { Route, Routes } from 'react-router-dom';

import { SearchHistoryPage } from './pages/History';
import { HomePage } from './pages/Home';
import { UserDetailsPage } from './pages/User';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/user/*' element={<UserDetailsPage />} />
      <Route path='/history' element={<SearchHistoryPage />} />
    </Routes>
  );
};

export { AppRoutes };
