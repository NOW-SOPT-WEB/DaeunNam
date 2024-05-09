import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Join from './pages/Join/Join';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/join" element={<Join />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
