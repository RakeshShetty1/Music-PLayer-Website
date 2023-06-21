import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faInfoCircle,
  faEnvelope,
  faUserPlus,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function Home() {
  function playSong(songUrl, buttonId) {
    var audio = document.getElementById("audioPlayer");
    var button = document.getElementById(buttonId);

    if (audio.paused || audio.src !== songUrl) {
      audio.src = songUrl;
      audio.play();
      button.classList.remove("bi-play-circle-fill");
      button.classList.add("bi-pause-circle-fill");

      // Reset previous button if exists
      var previousButton = document.querySelector(".bi-pause-circle-fill");
      if (previousButton && previousButton !== button) {
        previousButton.classList.remove("bi-pause-circle-fill");
        previousButton.classList.add("bi-play-circle-fill");
      }
    } else {
      audio.pause();
      button.classList.remove("bi-pause-circle-fill");
      button.classList.add("bi-play-circle-fill");
    }
  }

  var mysong = new Audio();

  const playsongs = (songurl, id) => {
    mysong.src = songurl;
    mysong.play();
  };

  function pausesongs(songurl) {
    mysong.src = songurl;
    mysong.pause();
  }

  return (
    <>
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
              alt
              width={30}
              height={30}
            />
          </a>
          <a className="navbar-brand" href="#" style={{ color: "#800080" }}>
            <b>SoundPulse</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* me means padding from end change it to ms so it will give padding in the start  */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mytags">
                <a
                  className="nav-link active "
                  aria-current="page"
                  href="http://localhost:3000/music"
                  // target="_blank"
                  style={{ color: "#800080",margin:"0 5px"  }}
                >
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip">Music Player</Tooltip>}
                    placement="bottom"
                  >
                    <FontAwesomeIcon icon={faMusic} size="2x"/>
                  </OverlayTrigger>
                </a>
              </li>
              <li className="nav-item mytags">
                <a
                  className="nav-link active "
                  aria-current="page"
                  href="http://localhost:3000/about"
                  // target="_blank"
                  style={{ color: "#800080",margin:"0 5px" }}
                >
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip">About</Tooltip>}
                    placement="bottom"
                  >
                    <FontAwesomeIcon icon={faInfoCircle} size="2x"/>
                  </OverlayTrigger>
                </a>
              </li>
              <li className="nav-item mytags">
                <a
                  className="nav-link active "
                  aria-current="page"
                  href="http://localhost:3000/contact"
                  // target="_blank"
                  style={{ color: "#800080",margin:"0 5px"  }}
                >
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip">Contact</Tooltip>}
                    placement="bottom"
                  >
                    <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                  </OverlayTrigger>
                </a>
              </li>

              <li className="nav-item mt-2">
                <a
                  href="http://localhost:3000/register"
                  // target="_blank"
                  style={{ color: "#800080", textDecoration: "none" }}
                >
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip">Register</Tooltip>}
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
                      <FontAwesomeIcon icon={faUserPlus} />
                    </button>
                  </OverlayTrigger>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a
                  href="http://localhost:3000/login"
                  style={{ color: "#800080", textDecoration: "none" ,margin:"0 5px"}}
                >
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip">Logout</Tooltip>}
                    placement="bottom"
                  >
                    <button
                      className="btn"
                      type="button"
                      style={{
                        color: "#efbbff",
                        background: "#660066",
                        marginRight: 2,
                      }}
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} />
                    </button>
                  </OverlayTrigger>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* edeww */}
      <div>
        <section>
          <h2 id="text" style={{ color: "#efbbff" }}>
            <span>It's time for a </span>
            <br /> MUSIC
          </h2>
          {/* <a href="#" id="btn">Explore</a> */}
        </section>
        <div className="welcome">
          <span>Welcome to SoundPulse</span>
        </div>
        {/* slider */}
    <div className="row justify-content-center">
      <div className="col-sm-12 col-md-8"  style={{borderRadius:"25px"}}>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
       
      >
        <div className="carousel-inner">
        <div className="carousel-item active">
          <img
          src="images/A6.jpg"
          className="d-block w-100"
          alt="..."
          />
        </div>

        <div className="carousel-item active">
          <img
          src="images/A4.jpg"
          className="d-block w-100"
          alt="..."
          />
        </div>

        <div className="carousel-item active">
          <img
          src="images/A5.jpg"
          className="d-block w-100"
          alt="..."
          />
        </div>
        </div>
        <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
        >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        />
        <span className="visually-hidden">Previous</span>
        </button>
        <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
        >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        />
        <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      
    </div>
    {/* end of slider */}
    
        <br />
        <br />
        {/* start of parent box (main) */}
        <div className="parent d-flex ">
          {/* start of box1 (left) */}
          <div className="box1">
            <div className="left">
              <h1 className="titles">Playlist</h1>
              <div className="playlist ">
                <h4 className="active">
                  <i className="bi bi-music-note-beamed" />
                  Playlist
                </h4>
                {/* <i class="bi bi-music-note-beamed"></i> bootstrap music icon font link  */}
                <h4 className="active">
                  <i className="bi bi-music-note-beamed" />
                  Last Listening
                </h4>
                <h4 className="active">
                  <i className="bi bi-music-note-beamed" />
                  Recommended
                </h4>
              </div>
              <div className="left_songs">
                <li className="songs">
                  <span style={{ marginLeft: 10 }}>01</span>
                  <a href="https://open.spotify.com/album/1bcvtuHyO79DNAOOhHEkEm">
                    <img
                      src="img/1.jpg"
                      alt="Alan"
                      style={{ marginLeft: 40 }}
                    />
                  </a>
                  <h5>
                    On My Way
                    <div className="subtitle">Alan Walker</div>
                  </h5>
                  <a
                    href="https://open.spotify.com/album/1bcvtuHyO79DNAOOhHEkEm"
                    // onclick="playSong('songs/B1.mp3', 'button1'); return false;"
                  >
                    <i
                      className="bi playListPlay bi-play-circle-fill"
                      id="button1"
                      style={{ marginLeft: 4, marginBottom: 9 }}
                    />
                  </a>
                </li>
                <li className="songs">
                  <span style={{ marginLeft: 10 }}>02</span>
                  <a href="https://open.spotify.com/track/31ifrAJQNtwmEZaXGKlZBV">
                    {" "}
                    <img
                      src="img/3.jpg"
                      alt="Alan"
                      style={{ marginLeft: 40 }}
                    />
                  </a>
                  <h5>
                    Cartoon
                    <div className="subtitle">Mas Y Mas</div>
                  </h5>
                  <a
                    href="https://open.spotify.com/track/31ifrAJQNtwmEZaXGKlZBV"
                    // onclick="playSong('songs/B3.mp3', 'button2'); return false;"
                  >
                    <i
                      className="bi playListPlay bi-play-circle-fill"
                      id="button2"
                      style={{ marginLeft: 4, marginBottom: 9 }}
                    />
                  </a>
                </li>
                <li className="songs">
                  <span style={{ marginLeft: 10 }}>03</span>
                  <a href="https://open.spotify.com/album/2CUXo26JAWIbQx0EVMnjpA">
                    {" "}
                    <img
                      src="img/7.jpg"
                      alt="Alan"
                      style={{ marginLeft: 40 }}
                    />
                  </a>
                  <h5>
                    Tamasha
                    <div className="subtitle">Lucky Ali</div>
                  </h5>
                  <a
                    href="https://open.spotify.com/album/2CUXo26JAWIbQx0EVMnjpA"
                    // onclick="playSong('songs/B7.mp3', 'button3'); return false;"
                  >
                    <i
                      className="bi playListPlay bi-play-circle-fill"
                      id="button3"
                      style={{ marginLeft: 4, marginBottom: 9 }}
                    />
                  </a>
                </li>
                <li className="songs">
                  <span style={{ marginLeft: 10 }}>04</span>
                  <a href="https://open.spotify.com/track/0Ms1V2flsPzr2bVqImelCB">
                    {" "}
                    <img
                      src="img/9.jpg"
                      alt="Alan"
                      style={{ marginLeft: 40 }}
                    />
                  </a>
                  <h5>
                    Dilbar
                    <div className="subtitle">Neha Kakkar</div>
                  </h5>
                  <a
                    href="https://open.spotify.com/track/0Ms1V2flsPzr2bVqImelCB"
                    // onclick="playSong('songs/B9.mp3', 'button4'); return false;"
                  >
                    <i
                      className="bi playListPlay bi-play-circle-fill"
                      id="button4"
                      style={{ marginLeft: 4, marginBottom: 9 }}
                    />
                  </a>
                </li>
                <li className="songs">
                  <span style={{ marginLeft: 10 }}>05</span>
                  <a href="https://open.spotify.com/album/5hzAIEMlQpsEGIQFvnFOQx">
                    {" "}
                    <img
                      src="img/10.jpg"
                      alt="Alan"
                      style={{ marginLeft: 40 }}
                    />
                  </a>
                  <h5>
                    Luka Chuppi
                    <div className="subtitle">Arijit singh</div>
                  </h5>
                  <a
                    href="https://open.spotify.com/album/5hzAIEMlQpsEGIQFvnFOQx"
                    // onclick="playSong('songs/B10.mp3', 'button5'); return false;"
                  >
                    <i
                      className="bi playListPlay bi-play-circle-fill"
                      id="button5"
                      style={{ marginLeft: 4, marginBottom: 9 }}
                    />
                  </a>
                </li>
                <li className="songs">
                  <span style={{ marginLeft: 10 }}>06</span>
                  <a href="https://open.spotify.com/track/5I2wbDvSI98HLVB42YO9sU">
                    {" "}
                    <img
                      src="img/11.jpg"
                      alt="Alan"
                      style={{ marginLeft: 40 }}
                    />
                  </a>
                  <h5>
                    Lagadi lahore di
                    <div className="subtitle">Honey Singh</div>
                  </h5>
                  <a
                    href="https://open.spotify.com/track/5I2wbDvSI98HLVB42YO9sU"
                    // onclick="playSong('songs/B11.mp3', 'button6'); return false;"
                  >
                    <i
                      className="bi playListPlay bi-play-circle-fill"
                      id="button6"
                      style={{ marginLeft: 4, marginBottom: 9 }}
                    />
                  </a>
                </li>
                <li className="songs">
                  <span style={{ marginLeft: 10 }}>07</span>
                  <a href="https://open.spotify.com/track/6IZBey1FCwK6OgAF0nKrwX">
                    {" "}
                    <img
                      src="img/12.jpg"
                      alt="Alan"
                      style={{ marginLeft: 40 }}
                    />
                  </a>
                  <h5>
                    Putt
                    <div className="subtitle">Diljit_Dosanjh</div>
                  </h5>
                  <a
                    href="https://open.spotify.com/track/6IZBey1FCwK6OgAF0nKrwX"
                    // onclick="playSong('songs/B12.mp3', 'button7'); return false;"
                  >
                    <i
                      className="bi playListPlay bi-play-circle-fill"
                      id="button7"
                      style={{ marginLeft: 4, marginBottom: 9 }}
                    />
                  </a>
                </li>
                <li className="songs">
                  <span style={{ marginLeft: 10 }}>08</span>
                  <a href="https://open.spotify.com/album/2IgqTqUjGQsmahYITOCdBX">
                    {" "}
                    <img
                      src="img/15.jpg"
                      alt="Alan"
                      style={{ marginLeft: 40 }}
                    />
                  </a>
                  <h5>
                    Lut Gaye
                    <div className="subtitle">Atif Aslam</div>
                  </h5>
                  <a
                    href="https://open.spotify.com/album/2IgqTqUjGQsmahYITOCdBX"
                    // onclick="playSong('songs/B15.mp3', 'button8'); return false;"
                  >
                    <i
                      className="bi playListPlay bi-play-circle-fill"
                      id="button8"
                      style={{ marginLeft: 4, marginBottom: 9 }}
                    />
                  </a>
                </li>
              </div>
            </div>
          </div>
          {/* end of box1 */}
          {/* start of box 2 */}
          <div className="box2">
            <nav className="navbar bg-body-primary-border bg navbar-light">
              <div className="container-fluid">
                <a className="navbar-brand titles">SoundPulse</a>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search songs"
                    aria-label="Search"
                  />
                  <input
                    className="btn"
                    type="button"
                    defaultValue="Register"
                    style={{
                      color: "#efbbff",
                      background: "#660066",
                      marginRight: 2,
                    }}
                  />
                </form>
              </div>
            </nav>
            <div className="hs-text">
              <h2>
                <span>Listen </span> to new music.
              </h2>
              <p>
                {" "}
                I want to express my gratitude for choosing our platform as your
                preferred place for music consumption. We strive to provide a
                seamless and enjoyable experience for all our users, and I'm
                glad to hear that you're enjoying listening to songs through our
                platform.
              </p>
              <input
                className=" btn"
                type="button"
                defaultValue="Download Now"
                style={{
                  color: "#efbbff",
                  background: "#660066",
                  marginRight: 2,
                }}
              />
              <input
                className=" btn btn-sm"
                type="button"
                defaultValue="Start free trail"
                style={{
                  color: "#efbbff",
                  background: "#800080",
                  marginRight: 2,
                }}
              />
            </div>
            {/* START OF POPULAR SONGS */}
            <div className="popular_songs">
              <div className="list1">
                <h4 className="titles">New Releases</h4>
                <div className="btn_s">
                  <i className="bi bi-arrow-left-short" id="pop-art_left" />
                  <i className="bi bi-arrow-right-short" id="pop-art_right" />
                </div>
              </div>
              <div className="cardsBt">
                <li className="card">
                  <div className="img_play">
                    <img src="images/1.jpg" alt="alan" />
                    <i className="bi playListPlay bi-play-circle-fill" id={1} />
                  </div>
                  <h5>
                    <a href="https://open.spotify.com/album/1o1ElG9Z0MKQ7IDHhua1fK">
                      Unstopable
                    </a>
                    <br />
                    <div className="subtitle">Sia</div>
                  </h5>
                </li>
                <li className="card">
                  <div className="img_play">
                    <img src="images/2.jpg" alt="alan" />
                    <i className="bi playListPlay bi-play-circle-fill" id={2} />
                  </div>
                  <h5>
                    <a href="https://open.spotify.com/album/7IzpJkWQqgz1BTutQvSitX">
                      Something Just Like This
                    </a>
                    <br />
                    <div className="subtitle">Chainsmokers</div>
                  </h5>
                </li>
                <li className="card">
                  <div className="img_play">
                    <img src="img/c1.jpg" alt="alan" />
                    <i className="bi playListPlay bi-play-circle-fill" id={3} />
                  </div>
                  <h5>
                    <a href="https://open.spotify.com/album/15yvc643iYfQtb6zh9NEJo">
                      A Thousand Years
                    </a>
                    <br />
                    <div className="subtitle">Christina Perri</div>
                  </h5>
                </li>
                <li className="card">
                  <div className="img_play">
                    <img src="images/3.jpg" alt="alan" />
                    <i className="bi playListPlay bi-play-circle-fill" id={4} />
                  </div>
                  <h5>
                    <a href="https://open.spotify.com/album/6542lxPaayNLGe9DbKBU8I">
                      Ek Zindagi
                    </a>
                    <br />
                    <div className="subtitle">Sachin–Jigar</div>
                  </h5>
                </li>
                <li className="card">
                  <div className="img_play">
                    <img src="images/4.jpg" alt="alan" />
                    <i className="bi playListPlay bi-play-circle-fill" id={5} />
                  </div>
                  <h5>
                    <a href="https://open.spotify.com/track/208sMwgVcaFt2mT79Df1KG">
                      Nacho Nacho
                    </a>
                    <br />
                    <div className="subtitle"> Vishal Mishra</div>
                  </h5>
                </li>
                <li className="card">
                  <div className="img_play">
                    <img src="images/5.jpg" alt="alan" />
                    <i className="bi playListPlay bi-play-circle-fill" id={6} />
                  </div>
                  <h5>
                    <a href="songs/5.mp3">Perfect</a>
                    <br />
                    <div className="subtitle"> Ed Sheeran</div>
                  </h5>
                </li>
                <li className="card">
                  <div className="img_play">
                    <img src="images/8.jpg" alt="alan" />
                    <i className="bi playListPlay bi-play-circle-fill" id={7} />
                  </div>
                  <h5>
                    <a href="https://open.spotify.com/album/4OXnPSBtZo8PBFiTOfuumP">
                      Good Girl Gone Bad
                    </a>
                    <br />
                    <div className="subtitle">Rihana</div>
                  </h5>
                </li>
                <li className="card">
                  <div className="img_play">
                    <img src="images/6.jpg" alt="alan" />
                    <i className="bi playListPlay bi-play-circle-fill" id={8} />
                  </div>
                  <h5>
                    <a href="https://open.spotify.com/artist/7dIpKWlEeAljA20vFJ82RD">
                      Roar
                    </a>
                    <br />
                    <div className="subtitle">Katy Perry</div>
                  </h5>
                </li>
              </div>
              {/* END OF POPULAR SONGS CARDS */}
            </div>
            {/* end of POPULAR SONGS */}
            <br />
            {/* START OF POPULAR ARTIST */}
            <div className="popular_artists">
              <div className="list2">
                <h4 className="titles">Top Artists</h4>
                <div className="btn_s">
                  <i id="left" className="bi bi-arrow-left-short" />
                  <i id="right" className="bi bi-arrow-right-short" />
                </div>
              </div>
              <div className="artists">
                <li>
                  <img
                    src="img/arjit.jpg"
                    alt="Arjit Singh"
                    title="Arjit Singh"
                  />
                  <h5>
                    <a
                      href="https://open.spotify.com/playlist/37i9dQZF1DWYztMONFqfvX"
                      style={{ color: "#be29ec" }}
                    >
                      arjit
                    </a>
                  </h5>
                </li>
                <li>
                  <img
                    src="img/alan.jpg"
                    alt="Alan Walker"
                    title="Alan Walker"
                  />
                  <h5>
                    <a
                      href="https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
                      style={{ color: "#be29ec" }}
                    >
                      Alan
                    </a>
                  </h5>
                </li>
                <li>
                  <img src="img/atif.jpg" alt="Atif Aslam" title="Atif Aslam" />
                  <h5>
                    <a
                      href="https://open.spotify.com/artist/2oSONSC9zQ4UonDKnLqksx"
                      style={{ color: "#be29ec" }}
                    >
                      Atif
                    </a>
                  </h5>
                </li>
                <li>
                  <img
                    src="img/guru.jpg"
                    alt="Guru RAndawa"
                    title="Guru Randawa"
                  />
                  <h5>
                    <a
                      href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO3cOi1I"
                      style={{ color: "#be29ec" }}
                    >
                      Atif
                    </a>
                  </h5>
                </li>
                <li>
                  <img src="img/dhvani.jpg" alt="Dhvani" title="Dhvani" />
                  <h5>
                    <a
                      href="https://open.spotify.com/playlist/37i9dQZF1EIZFQaWe8DyGI"
                      style={{ color: "#be29ec" }}
                    >
                      Atif
                    </a>
                  </h5>
                </li>
                <li>
                  <img
                    src="img/Diljit_Dosanjh.jpg"
                    alt="Diljit Dosanjh"
                    title="Diljit Dosanjh"
                  />
                  <h5>
                    <a
                      href="https://open.spotify.com/playlist/37i9dQZF1EIZNOFIsiFGWV"
                      style={{ color: "#be29ec" }}
                    >
                      Atif
                    </a>
                  </h5>
                </li>
                <li>
                  <img
                    src="img/jubin Nautiyal.jpg"
                    alt="Jubin Nautiyal"
                    title="Jubin Nautiyal"
                  />
                  <h5>
                    <a
                      href="https://open.spotify.com/artist/1tqysapcCh1lWEAc9dIFpa"
                      style={{ color: "#be29ec" }}
                    >
                      Atif
                    </a>
                  </h5>
                </li>
                <li>
                  <img
                    src="img/neha.jpg"
                    alt="Neha Kakker"
                    title="Neha Kakker"
                  />
                  <h5>
                    <a
                      href="https://open.spotify.com/artist/5f4QpKfy7ptCHwTqspnSJI"
                      style={{ color: "#be29ec" }}
                    >
                      Atif
                    </a>
                  </h5>
                </li>
                <li>
                  <img
                    src="img/justin-bieber-lede.jpg"
                    alt="Justin Bieber"
                    title="Justin Bieber"
                  />
                  <h5>
                    <a
                      href="https://open.spotify.com/playlist/4kMs4OpwtS0Pk4Zvbd0j7z"
                      style={{ color: "#be29ec" }}
                    >
                      Atif
                    </a>
                  </h5>
                </li>
                <li>
                  <img
                    src="img/honey.jpg"
                    alt="Honey Singh"
                    title="Honey Singh"
                  />
                  <h5>
                    <a
                      href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4r9h36"
                      style={{ color: "#be29ec" }}
                    >
                      Atif
                    </a>
                  </h5>
                </li>
                <li>
                  <img src="img/akhil.jpg" alt="Akhil" title="Akhil" />
                  <h5>
                    <a
                      href="https://open.spotify.com/artist/6zZrFenNe3YPttxZsnQQs1"
                      style={{ color: "#be29ec" }}
                    >
                      Atif
                    </a>
                  </h5>
                </li>
              </div>
            </div>
            {/* END OF POPULAR ARTIST */}
          </div>
          {/* end of box 2 */}
        </div>
        <div className="row">
          <footer
            className="row align-items-center"
            style={{ justifyContent: "center", background: "#efbbff" }}
          >
            © www.soundpulse.com. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
}

export default Home;
