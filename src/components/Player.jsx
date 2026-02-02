import { useSelector, useDispatch } from "react-redux";
import { pauseSong } from "../features/playerSlice";

const Player = () => {
  const { currentSong, isPlaying } = useSelector(
    (state) => state.player
  );
  const dispatch = useDispatch();

  if (!currentSong) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: "220px",
        right: 0,
        backgroundColor: "#111",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <strong>{currentSong.title}</strong> –{" "}
        <span style={{ color: "gray" }}>
          {currentSong.artist}
        </span>
      </div>

      <div>
        {isPlaying ? "▶ Playing" : "⏸ Paused"}
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => dispatch(pauseSong())}
        >
          Pause
        </button>
      </div>
    </div>
  );
};

export default Player;
