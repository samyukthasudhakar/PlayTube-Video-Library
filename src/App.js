import { Routes, Route } from "react-router-dom";

import {
  HomePage,
  PlaylistPage,
  WatchLaterPage,
  LikedPage,
  HistoryPage,
  Login,
  SignUp
} from 'pages'

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/playlist' element={<PlaylistPage />} />
        <Route path='/watchlater' element={<WatchLaterPage />} />
        <Route path='/liked' element={<LikedPage />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
