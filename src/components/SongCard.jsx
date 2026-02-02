import { useDispatch } from "react-redux";
import { playSong } from "../features/playerSlice";
import { Link } from "react-router-dom";

const SongCard = ({ song }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: "#181818",
        padding: "12px",
        borderRadius: "6px",
      }}
    >
      <Link
        to={`/song/${song.id}`}
        style={{ color: "white", textDecoration: "none" }}
      >
        <h4 style={{ margin: 0 }}>{song.title}</h4>
        <p style={{ fontSize: "12px", color: "gray" }}>
          {song.artist}
        </p>
        <p style={{ fontSize: "11px" }}>{song.genre}</p>
      </Link>

      <button
        style={{ marginTop: "6px" }}
        onClick={() => dispatch(playSong(song))}
      >
        Play
      </button>
    </div>
  );
};

export default SongCard;
