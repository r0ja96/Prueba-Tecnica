import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchGIFsPage from "../pages/SearchGIFsPage/SearchGIfsPage";
import ShowGifPage from "../pages/ShowGifPage/ShowGifPage";
import "./App.css";

function App() {


  return (
  <BrowserRouter>
  <div>
    <div className="container">
    <Routes>
      <Route path="/"  exact element={<SearchGIFsPage/>}/>
      <Route path="/:id" element={<ShowGifPage/>}/>
    </Routes>
    </div>
  </div>
  </BrowserRouter> 
  );
}

export default App;
