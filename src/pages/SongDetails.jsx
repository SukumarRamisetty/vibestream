import { useParams, Link } from "react-router-dom";
import songs from "../data/songs";

const SongDetails = () => {
  const { id } = useParams();
  const song = songs.find((s) => s.id === Number(id));

  if (!song) {
    return <p style={{ padding: "20px" }}>Song not found</p>;
  }

  return (
    <div style={{ flex: 1, padding: "20px" }}>
      <Link to="/">← Back</Link>

      <h2>{song.title}</h2>
      <p><strong>Artist:</strong> {song.artist}</p>
      <p><strong>Genre:</strong> {song.genre}</p>

      <button style={{ marginTop: "10px" }}>
        Play
      </button>
    </div>
  );
};

export default SongDetails;
