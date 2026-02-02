import { useEffect, useState } from "react";
import songs from "../data/songs";
import SongCard from "../components/SongCard";
import TopPlay from "../components/TopPlay";

const Discover = () => {
  const [genre, setGenre] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // simulate API call
    const t = setTimeout(() => {
      setLoading(false);
      // setError(true); // uncomment to test error UI
    }, 800);
    return () => clearTimeout(t);
  }, []);

  const filtered =
    genre === "All" ? songs : songs.filter((s) => s.genre === genre);

  if (loading) {
    return <div style={{ padding: 20 }}>Loading songs...</div>;
  }

  if (error) {
    return <div style={{ padding: 20, color: "red" }}>Failed to load songs</div>;
  }

  return (
    <div style={{ flex: 1, padding: "20px" }}>
      <h2>Discover</h2>

      {/* Genre Filter */}
      <div style={{ marginBottom: "15px" }}>
        {["All", "Telugu", "Tamil", "Hindi", "English"].map((g) => (
          <button
            key={g}
            onClick={() => setGenre(g)}
            style={{
              marginRight: "10px",
              padding: "6px 10px",
              background: genre === g ? "#1db954" : "#282828",
              color: "white",
              border: "none",
              borderRadius: "20px",
            }}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Layout */}
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Songs Grid */}
        <div
          style={{
            flex: 3,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "15px",
          }}
        >
          {filtered.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>

        {/* Top Play */}
        <div style={{ flex: 1 }}>
          <TopPlay songs={songs} />
        </div>
      </div>
    </div>
  );
};

export default Discover;
