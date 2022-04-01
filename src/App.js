import { Routes, Route } from "react-router-dom";

import { useVideos } from 'context'
import {
  HomePage,
  PlaylistPage,
  WatchLaterPage,
  LikedPage,
  HistoryPage,
  Login,
  SignUp,
  SingleVideoPage
} from 'pages'

import "./App.css";

function App() {
  const { videos } = useVideos()  
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
        <Route path='/watch/:videoID' element={<SingleVideoPage />} />
      </Routes>
    </div>
  );
}

export default App;
