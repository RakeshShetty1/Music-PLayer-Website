import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faPause, faPlay,faHome } from '@fortawesome/free-solid-svg-icons';
import { OverlayTrigger, Tooltip } from "react-bootstrap";



function Music() {
  const [songs] = useState([
    {
      title: "Dilbar ",
      artist: " Neha",
      img_src: "./img/dilbar.jpg",
      src: "./songs/B9.mp3"
    },


    {
      title: "Duniya",
      artist: "Akhil",
      img_src: "./img/duniya.jpg",
      src: "./songs/B10.mp3"
    },

    {
      title: "Tum Saath ",
      artist: " Arijit ",
      img_src: "./img/tum saath ho.jpg",
      src: "./songs/B7.mp3"
    },
   
    {
      title: "Unstoppable",
      artist: "Sia",
      img_src: "./images/1.jpg",
      src: "./songs/1.mp3"
    }
    ,

    

    {
      title: "Roar ",
      artist: " Katy ",
      img_src: "./images/6.jpg",
      src: "./songs/6.mp3"
    }

  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const skipSong = (forwards = true) => {
    setCurrentSongIndex((prevIndex) => {
      let newIndex = prevIndex;
      if (forwards) {
        newIndex = (prevIndex + 1) % songs.length;
      } else {
        newIndex = (prevIndex - 1 + songs.length) % songs.length;
      }
      setNextSongIndex((newIndex + 1) % songs.length);
      return newIndex;
    });
  };

  return (
    <div className="mymains"style={{ backgroundColor: "#be29ec" }}>
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{
          backgroundColor: "#efbbff",
          borderRadius: "5px 5px 20px 20px",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6KPiPXerJXj5tnVBElVXrROMAoeg8txSszQ&usqp=CAU"
              alt=""
              width={30}
              height={30}
            />
          </a>
          <a className="navbar-brand" href="#" style={{ color: "#800080" }}>
            <b>SoundPulse</b>
          </a>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                href="http://localhost:3000/home"
                style={{ color: "#800080", textDecoration: "none" }}
              >
                <OverlayTrigger
                    overlay={<Tooltip id="tooltip">Home</Tooltip>}
                    placement="bottom"
                  >
                    <button
                      className=" btn"
                      type="button"
                      style={{
                        color: "#efbbff",
                        background: "#660066",
                        marginRight: 2,
                      }}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faHome} />
                    </button>
                  </OverlayTrigger>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="Music">
        <div className="player">
          <h4>Playing now</h4>
          <div className="details">
            <div className="details_song">
              <img src={songs[currentSongIndex].img_src} alt="" />
              <div className="details_song-info">
                <h3>{songs[currentSongIndex].title}</h3>
                <p>{songs[currentSongIndex].artist}</p>
              </div>
            </div>
            <div className="control">
            {/* details_controls */}

              <button
                className="control_SkipBtn"
                onClick={() => skipSong(false)}
              >
                <FontAwesomeIcon icon={faBackward} />
              </button>
              <button
                className="control_PlayButton"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
              </button>
              <button
                className="control_SkipBtn"
                onClick={() => skipSong()}
              >
                <FontAwesomeIcon icon={faForward} />
              </button>
            </div>
          </div>
          <audio
            className="player_audio"
            src={songs[currentSongIndex].src}
            ref={audioRef}
            controls
          />
          <p>
            Next Up: {" "}
            <span > 
              {songs[nextSongIndex].title} by {songs[nextSongIndex].artist}
            </span>
          </p>
        </div>
      </div>

      <div className="row">
        <footer
          className="row align-items-center"
          style={{ justifyContent: "center" }}
        >
          © www.soundpulse.com. All rights reserved.
        </footer>
      </div>
    </div>
  );
  
}

export default Music;