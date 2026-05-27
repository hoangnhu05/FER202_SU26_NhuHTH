import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';

import Home from './pages/Home';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';
import RegistrationForm from './pages/RegistrationForm';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />

      <Routes>
        {/* Trang đầu tiên khi npm start */}
        <Route path="/" element={<RegistrationForm />} />

        {/* Trang blog home */}
        <Route path="/home" element={<Home />} />

        {/* Route đăng ký nếu bấm từ navbar */}
        <Route path="/registration" element={<RegistrationForm />} />

        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/about" element={<About />} />

        {/* Trang 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;