const TopPlay = ({ songs }) => {
  return (
    <div style={{ background: "#181818", padding: "12px", borderRadius: "8px" }}>
      <h3>Top Play</h3>
      {songs.slice(0, 3).map((song) => (
        <p key={song.id} style={{ fontSize: "13px", color: "gray" }}>
          {song.title}
        </p>
      ))}
    </div>
  );
};

export default TopPlay;
