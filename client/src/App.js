import {
  createBrowserRouter,

  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Index from "./pages/index"
import Music from "./pages/music";
import Add from "./pages/add";
import Update from "./pages/update";
import "./styles.css"
import Artist from "./pages/artist";
import AddArtist from "./pages/addArtist";
import Genre from "./pages/genre";
import Hiphop from "./pages/hiphop";
import Pop from "./pages/pop";
import Classic from "./pages/classic";
import Band from "./pages/band";
import AddBand from "./pages/addband";
import Album from "./pages/album";
import AddAlbum from "./pages/addalbum";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/music" element={<Music />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/update/:musicid" element={<Update />}></Route>
          <Route path="/artist" element={<Artist/>}></Route>
          <Route path="/addArtist" element={<AddArtist/>}></Route>
          <Route path="/genre" element={<Genre/>}></Route>
          <Route path="/hiphop" element={<Hiphop/>}></Route>
          <Route path="/pop" element={<Pop/>}></Route>
          <Route path="/classic" element={<Classic/>}></Route>
          <Route path="/band" element={<Band/>}></Route>
          <Route path="/addband" element={<AddBand/>}></Route>
          <Route path="/album" element={<Album/>}></Route>
          <Route path="/addalbum" element={<AddAlbum/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
