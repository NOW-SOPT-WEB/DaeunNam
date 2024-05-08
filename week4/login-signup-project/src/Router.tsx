import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./page/Join";
import Login from "./page/Login";
import Main from "./page/Main";

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
