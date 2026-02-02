import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Discover from "./pages/Discover";
import Player from "./components/Player";
import ThemeToggle from "./components/ThemeToggle";
import SongDetails from "./pages/SongDetails";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <ThemeToggle />

      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/song/:id" element={<SongDetails />} />
      </Routes>

      <Player />
    </div>
  );
};

export default App;
