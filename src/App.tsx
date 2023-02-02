import { Layout } from 'components';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { WishesPage, NotFoundPage, MessagesPage, AboutPage, ProfilePage, NotificationsPage } from './pages';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WishesPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
