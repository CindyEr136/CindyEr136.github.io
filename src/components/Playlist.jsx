import "./Playlist.css";

export function Playlist() {
  return (
    <div className="main">
      <div className="currentplaying">
        <svg
          height="50px"
          width="50px"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          className="spotify"
        >
          <radialGradient
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(0 -534)"
            r="43.888"
            cy="572.064"
            cx="33.34"
            id="ipdIa4~cOclR8yt_ClW93a"
          >
            <stop stopColor="#f4e9c3" offset="0" />
            <stop stopColor="#f8eecd" offsest=".219" />
            <stop stopColor="#fdf4dc" offset=".644" />
            <stop stopColor="#fff6e1" offset="1" />
          </radialGradient>
          <path d="" fill="url($ipdIa4~cOclR8yt_ClW93a)" />
        </svg>
        <p className="heading">Currently Playing</p>
      </div>
      <div className="loader">
        <div className="song">
          <p className="name">Winners in Paris</p>
          <p className="artist">Sleepy Hallow</p>
        </div>
        <div className="albumcover">
          <img />
        </div>
        <div className="loading">
          <div className="load" />
          <div className="load" />
          <div className="load" />
          <div className="load" />
        </div>
      </div>
      <div className="loader">
        <div className="song">
          <p className="name">Fall Back</p>
          <p className="artist">Lithe</p>
        </div>
        <div className="albumcover">
          <img />
        </div>
        <div className="play" />
      </div>
      <div className="loader">
        <div className="song">
          <p className="name">Call My Name</p>
          <p className="artist">GRAHAM, Henrik</p>
        </div>
        <div className="albumcover">
          <img />
        </div>
        <div className="play" />
      </div>
    </div>
  );
}

export default Playlist;
